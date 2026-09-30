<?php
namespace OMLMS\Schools;

defined('ABSPATH') || exit;

final class Service {
    public static function now() { return gmdate('Y-m-d H:i:s'); }
    public static function text($value, $max = 190) { return mb_substr(sanitize_text_field((string) $value), 0, $max); }
    public static function need($value, $message) {
        if (!$value) { throw new \RuntimeException($message, 400); }
    }
    public static function insert($table, array $data) {
        global $wpdb;
        if (false === $wpdb->insert(Schema::table($table), $data)) { throw new \RuntimeException('Unable to save this record. It may already exist.', 409); }
        return (int) $wpdb->insert_id;
    }
    public static function update($table, $data, $where) {
        global $wpdb;
        if (false === $wpdb->update(Schema::table($table), $data, $where)) { throw new \RuntimeException('Unable to update this record.', 500); }
    }
    public static function audit($school, $action, $object = 0) {
        self::insert('school_audit_log', ['school_id' => $school, 'actor_id' => get_current_user_id(), 'action' => $action, 'object_id' => $object, 'created_at' => self::now()]);
    }
    public static function row($table, $id) {
        global $wpdb;
        $name = Schema::table($table);
        return $wpdb->get_row($wpdb->prepare("SELECT * FROM $name WHERE id=%d", $id), ARRAY_A);
    }
    public static function membership($table, array $key, $active = true) {
        global $wpdb;
        $name = Schema::table($table);
        $clauses = []; $values = [];
        foreach ($key as $column => $value) { $clauses[] = "$column=%s"; $values[] = $value; }
        $id = $wpdb->get_var($wpdb->prepare("SELECT id FROM $name WHERE " . implode(' AND ', $clauses), $values));
        $data = ['status' => $active ? 'active' : 'inactive'];
        if ($id) { self::update($table, $data, ['id' => $id]); return (int) $id; }
        self::need($active, 'Membership does not exist.');
        return self::insert($table, array_merge($key, $data, ['joined_at' => self::now()]));
    }
    public static function transaction($callback) {
        global $wpdb;
        $wpdb->query('START TRANSACTION');
        try { $result = $callback(); $wpdb->query('COMMIT'); return $result; }
        catch (\Throwable $error) { $wpdb->query('ROLLBACK'); throw $error; }
    }
    public static function schools($page = 1) {
        global $wpdb;
        $s = Schema::table('schools'); $m = Schema::table('school_memberships');
        $where = Access::platform() ? '1=1' : $wpdb->prepare("s.status='active' AND EXISTS (SELECT 1 FROM $m m WHERE m.school_id=s.id AND m.user_id=%d AND m.status='active')", get_current_user_id());
        return $wpdb->get_results($wpdb->prepare("SELECT s.* FROM $s s WHERE $where ORDER BY s.name LIMIT 50 OFFSET %d", (max(1, $page) - 1) * 50), ARRAY_A);
    }
    public static function create_school($data) {
        Access::require_access(Access::platform());
        $name = self::text($data['name'] ?? '');
        $zone = self::text($data['timezone'] ?? 'UTC', 80);
        self::need($name && in_array($zone, timezone_identifiers_list(), true), 'Provide a school name and a valid timezone.');
        $id = self::insert('schools', ['name' => $name, 'slug' => sanitize_title($data['slug'] ?? $name), 'timezone' => $zone, 'created_by' => get_current_user_id(), 'created_at' => self::now()]);
        self::audit($id, 'school_created', $id);
        return ['id' => $id];
    }
    public static function years($school) {
        global $wpdb;
        Access::require_access(Access::school($school, ['school_admin', 'teacher']));
        $table = Schema::table('academic_years');
        return $wpdb->get_results($wpdb->prepare("SELECT * FROM $table WHERE school_id=%d ORDER BY starts_at DESC LIMIT 100", $school), ARRAY_A);
    }
    public static function create_year($school, $data) {
        Access::require_access(Access::school($school));
        $start = $data['starts_at'] ?? ''; $end = $data['ends_at'] ?? ''; $label = self::text($data['label'] ?? '', 100);
        foreach ([$start, $end] as $date) {
            $parsed = \DateTimeImmutable::createFromFormat('!Y-m-d', $date);
            self::need($parsed && $parsed->format('Y-m-d') === $date, 'Use valid academic-year dates.');
        }
        self::need($label && $end > $start, 'The end date must follow the start date.');
        $id = self::insert('academic_years', ['school_id' => $school, 'label' => $label, 'starts_at' => $start, 'ends_at' => $end]);
        self::audit($school, 'year_created', $id);
        return ['id' => $id];
    }
    public static function classes($school, $page = 1) {
        global $wpdb;
        Access::require_access(Access::school($school, ['school_admin', 'teacher', 'student']));
        $c = Schema::table('classes'); $m = Schema::table('class_memberships');
        $scope = Access::school($school) ? '' : $wpdb->prepare(" AND EXISTS (SELECT 1 FROM $m m WHERE m.class_id=c.id AND m.user_id=%d AND m.status='active')", get_current_user_id());
        return $wpdb->get_results($wpdb->prepare("SELECT c.* FROM $c c WHERE c.school_id=%d $scope ORDER BY c.id DESC LIMIT 50 OFFSET %d", $school, (max(1, $page) - 1) * 50), ARRAY_A);
    }
    public static function create_class($school, $data) {
        Access::require_access(Access::school($school));
        $year = self::row('academic_years', absint($data['academic_year_id'] ?? 0));
        self::need($year && (int) $year['school_id'] === $school && $year['status'] === 'active', 'Select an active academic year in this school.');
        $name = self::text($data['name'] ?? '');
        self::need($name, 'A class name is required.');
        $id = self::insert('classes', ['school_id' => $school, 'academic_year_id' => $year['id'], 'name' => $name, 'subject' => self::text($data['subject'] ?? '', 100), 'grade' => self::text($data['grade'] ?? '', 50)]);
        self::audit($school, 'class_created', $id);
        return ['id' => $id];
    }
    public static function roster($school, $class = 0, $page = 1, $search = '') {
        global $wpdb;
        if ($class) {
            $record = Access::classroom($class);
            Access::require_access($record && (int) $record['school_id'] === $school);
        } else { Access::require_access(Access::school($school)); }
        $m = Schema::table('school_memberships'); $c = Schema::table('class_memberships'); $p = Schema::table('school_student_profiles');
        $scope = $class ? $wpdb->prepare(" AND EXISTS (SELECT 1 FROM $c cm WHERE cm.class_id=%d AND cm.user_id=m.user_id AND cm.role=m.role AND cm.status='active')", $class) : '';
        $like = '%' . $wpdb->esc_like($search) . '%';
        return $wpdb->get_results($wpdb->prepare("SELECT m.id,m.user_id,m.role,m.status,u.display_name,u.user_login,p.external_student_id FROM $m m JOIN {$wpdb->users} u ON u.ID=m.user_id LEFT JOIN $p p ON p.school_id=m.school_id AND p.user_id=m.user_id WHERE m.school_id=%d AND m.status='active' $scope AND (u.display_name LIKE %s OR p.external_student_id LIKE %s) ORDER BY u.display_name,m.id LIMIT 50 OFFSET %d", $school, $like, $like, (max(1, $page) - 1) * 50), ARRAY_A);
    }
    public static function class_member($class, $data) {
        $record = Access::classroom($class, true);
        Access::require_access($record);
        $user = absint($data['user_id'] ?? 0); $role = $data['role'] ?? 'student';
        self::need(in_array($role, ['student', 'teacher'], true), 'Invalid class role.');
        if ($role === 'teacher') { Access::require_access(Access::school($record['school_id'])); }
        // Staff can use only the master school roster, never arbitrary site users.
        Access::require_access(Access::school($record['school_id'], [$role], $user));
        $active = ($data['status'] ?? 'active') === 'active';
        self::membership('class_memberships', ['class_id' => $class, 'user_id' => $user, 'role' => $role], $active);
        self::audit($record['school_id'], $active ? 'class_member_added' : 'class_member_removed', $user);
        return ['success' => true];
    }
    public static function remove_member($school, $id) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $record = self::row('school_memberships', $id);
        self::need($record && (int) $record['school_id'] === $school, 'Membership not found.');
        self::need((int) $record['user_id'] !== get_current_user_id() || Access::platform(), 'Ask another administrator to remove your membership.');
        self::transaction(function () use ($school, $id, $record, $wpdb) {
            self::update('school_memberships', ['status' => 'inactive'], ['id' => $id]);
            $c = Schema::table('classes'); $m = Schema::table('class_memberships');
            $wpdb->query($wpdb->prepare("UPDATE $m m JOIN $c c ON c.id=m.class_id SET m.status='inactive' WHERE c.school_id=%d AND m.user_id=%d AND m.role=%s", $school, $record['user_id'], $record['role']));
            if ($record['role'] === 'student') { self::update('guardian_links', ['status' => 'inactive'], ['school_id' => $school, 'student_user_id' => $record['user_id']]); }
            self::audit($school, 'school_member_removed', $record['user_id']);
        });
        return ['success' => true];
    }
    public static function create_student($school, $data) {
        Access::require_access(Access::school($school));
        $name = self::text($data['name'] ?? ''); $external = self::text($data['external_student_id'] ?? '', 100);
        self::need($name && $external, 'Student name and school student ID are required.');
        global $wpdb;
        $p = Schema::table('school_student_profiles');
        self::need(!$wpdb->get_var($wpdb->prepare("SELECT id FROM $p WHERE school_id=%d AND external_student_id=%s", $school, $external)), 'This school student ID already exists. Use the existing roster entry.');
        $role = function_exists('creator_lms_get_assignable_student_role') ? creator_lms_get_assignable_student_role() : 'subscriber';
        $id = wp_insert_user(['user_login' => 'student-' . $school . '-' . strtolower(wp_generate_password(12, false)), 'user_pass' => wp_generate_password(40), 'display_name' => $name, 'role' => $role]);
        if (is_wp_error($id)) { throw new \RuntimeException($id->get_error_message(), 400); }
        try {
            self::transaction(function () use ($school, $id, $external) {
                self::insert('school_student_profiles', ['school_id' => $school, 'user_id' => $id, 'external_student_id' => $external]);
                self::membership('school_memberships', ['school_id' => $school, 'user_id' => $id, 'role' => 'student']);
                update_user_meta($id, '_omlms_managed_school', $school);
                self::audit($school, 'student_created', $id);
            });
        } catch (\Throwable $error) {
            require_once ABSPATH . 'wp-admin/includes/user.php'; wp_delete_user($id); throw $error;
        }
        return ['id' => $id, 'username' => get_userdata($id)->user_login];
    }
    public static function invite($school, $data) {
        Access::require_access(Access::school($school));
        $role = $data['role'] ?? ''; $email = sanitize_email($data['email'] ?? '');
        $student = absint($data['student_user_id'] ?? 0); $class = absint($data['class_id'] ?? 0);
        self::need(in_array($role, ['school_admin', 'teacher', 'student', 'guardian', 'activation'], true), 'Invalid invitation type.');
        self::need($role === 'activation' || is_email($email), 'A valid recipient email is required.');
        if ($role === 'activation' || $role === 'guardian') { Access::require_access(Access::student($school, $student)); }
        if ($role === 'activation') { Access::require_access((int) get_user_meta($student, '_omlms_managed_school', true) === $school); }
        if ($class) {
            $record = Access::classroom($class, true);
            self::need($record && (int) $record['school_id'] === $school && in_array($role, ['teacher', 'student'], true), 'Select a valid class for this invitation.');
        }
        $token = bin2hex(random_bytes(32));
        $id = self::insert('school_invitations', ['token_hash' => hash('sha256', $token), 'school_id' => $school, 'class_id' => $class, 'student_user_id' => $student, 'role' => $role, 'email' => $email, 'expires_at' => gmdate('Y-m-d H:i:s', time() + 2 * DAY_IN_SECONDS), 'invited_by' => get_current_user_id(), 'created_at' => self::now()]);
        $url = add_query_arg('omlms_invite', $token, Views::portal_url());
        // Return the link to the authorized staff member. Mail is sent only on an explicit UI action.
        if (!empty($data['send_email']) && $role !== 'activation') {
            $sent = wp_mail($email, __('Your OhMyLMS invitation', 'ohmylms'), sprintf(__('Open this invitation within 48 hours: %s', 'ohmylms'), $url));
        }
        self::audit($school, 'invitation_created', $id);
        return ['id' => $id, 'url' => $url, 'email_sent' => isset($sent) ? (bool) $sent : false];
    }
    public static function invitations($school) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $table = Schema::table('school_invitations');
        return $wpdb->get_results($wpdb->prepare("SELECT id,role,email,student_user_id,expires_at,consumed_at,revoked_at FROM $table WHERE school_id=%d ORDER BY id DESC LIMIT 50", $school), ARRAY_A);
    }
    public static function revoke_invite($school, $id) {
        Access::require_access(Access::school($school));
        $invite = self::row('school_invitations', $id);
        self::need($invite && (int) $invite['school_id'] === $school, 'Invitation not found.');
        self::update('school_invitations', ['revoked_at' => self::now()], ['id' => $id]);
        self::audit($school, 'invitation_revoked', $id);
        return ['success' => true];
    }
    public static function accept($token, $password = '') {
        global $wpdb;
        self::need(is_string($token) && preg_match('/^[a-f0-9]{64}$/', $token), 'Invalid invitation.');
        $table = Schema::table('school_invitations');
        return self::transaction(function () use ($wpdb, $table, $token, $password) {
            $invite = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table WHERE token_hash=%s FOR UPDATE", hash('sha256', $token)), ARRAY_A);
            self::need($invite && !$invite['consumed_at'] && !$invite['revoked_at'] && $invite['expires_at'] > self::now(), 'This invitation has expired or has already been used.');
            $school = (int) $invite['school_id']; $school_row = self::row('schools', $school);
            self::need($school_row && $school_row['status'] === 'active', 'This school is inactive.');
            $issuer = get_userdata($invite['invited_by']);
            self::need($issuer && (user_can($issuer, 'manage_options') || Access::school($school, ['school_admin'], $issuer->ID)), 'The invitation issuer no longer has permission.');
            if ($invite['role'] === 'activation') {
                $user_id = (int) $invite['student_user_id'];
                Access::require_access(Access::student($school, $user_id) && (int) get_user_meta($user_id, '_omlms_managed_school', true) === $school);
                self::need(strlen($password) >= 12 && strlen($password) <= 128, 'Choose a password between 12 and 128 characters.');
                wp_set_password($password, $user_id);
                // Invalidate other outstanding recovery links for this child.
                $wpdb->query($wpdb->prepare("UPDATE $table SET revoked_at=%s WHERE student_user_id=%d AND role='activation' AND id<>%d AND consumed_at IS NULL", self::now(), $user_id, $invite['id']));
            } else {
                $user = wp_get_current_user(); $user_id = $user->ID;
                Access::require_access($user_id && strtolower($user->user_email) === strtolower($invite['email']));
                // Possession of a single-use token sent to this address proves mailbox access.
                update_user_meta($user_id, \OMLMS\Services\EmailVerificationService::META_VERIFIED, 'yes');
                if ($invite['role'] === 'guardian') {
                    Access::require_access(Access::student($school, $invite['student_user_id']));
                    $links = Schema::table('guardian_links');
                    $link = $wpdb->get_var($wpdb->prepare("SELECT id FROM $links WHERE school_id=%d AND guardian_user_id=%d AND student_user_id=%d", $school, $user_id, $invite['student_user_id']));
                    $record = ['status' => 'active', 'approved_by' => $invite['invited_by'], 'approved_at' => self::now()];
                    if ($link) { self::update('guardian_links', $record, ['id' => $link]); }
                    else { self::insert('guardian_links', array_merge($record, ['school_id' => $school, 'guardian_user_id' => $user_id, 'student_user_id' => $invite['student_user_id']])); }
                    $user->add_role('omlms_parent');
                } else {
                    self::membership('school_memberships', ['school_id' => $school, 'user_id' => $user_id, 'role' => $invite['role']]);
                    $role_map = ['school_admin' => 'omlms_school_admin', 'teacher' => 'omlms_teacher', 'student' => function_exists('creator_lms_get_assignable_student_role') ? creator_lms_get_assignable_student_role() : 'subscriber'];
                    $user->add_role($role_map[$invite['role']]);
                    if ($invite['class_id']) {
                        $class = self::row('classes', $invite['class_id']);
                        self::need($class && $class['status'] === 'active' && (int) $class['school_id'] === $school, 'This class is no longer active.');
                        self::membership('class_memberships', ['class_id' => $class['id'], 'user_id' => $user_id, 'role' => $invite['role']]);
                    }
                }
            }
            self::update('school_invitations', ['consumed_at' => self::now()], ['id' => $invite['id']]);
            self::audit($school, 'invitation_accepted', $invite['id']);
            return ['success' => true, 'username' => $invite['role'] === 'activation' ? get_userdata($user_id)->user_login : '', 'message' => 'Invitation accepted. You can now sign in or open your dashboard.'];
        });
    }
    public static function guardians($school) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $g = Schema::table('guardian_links');
        return $wpdb->get_results($wpdb->prepare("SELECT g.id,g.student_user_id,g.status,u.display_name AS parent_name,s.display_name AS student_name FROM $g g JOIN {$wpdb->users} u ON u.ID=g.guardian_user_id JOIN {$wpdb->users} s ON s.ID=g.student_user_id WHERE g.school_id=%d ORDER BY g.id DESC LIMIT 100", $school), ARRAY_A);
    }
    public static function revoke_guardian($school, $id) {
        Access::require_access(Access::school($school));
        $link = self::row('guardian_links', $id);
        self::need($link && (int) $link['school_id'] === $school, 'Link not found.');
        self::update('guardian_links', ['status' => 'inactive'], ['id' => $id]);
        self::audit($school, 'guardian_revoked', $id);
        return ['success' => true];
    }
    public static function children() {
        global $wpdb;
        $g = Schema::table('guardian_links'); $s = Schema::table('schools'); $m = Schema::table('school_memberships');
        return $wpdb->get_results($wpdb->prepare("SELECT DISTINCT g.student_user_id,g.school_id,u.display_name,s.name AS school_name FROM $g g JOIN $s s ON s.id=g.school_id AND s.status='active' JOIN {$wpdb->users} u ON u.ID=g.student_user_id JOIN $m m ON m.school_id=g.school_id AND m.user_id=g.student_user_id AND m.role='student' AND m.status='active' WHERE g.guardian_user_id=%d AND g.status='active' ORDER BY u.display_name LIMIT 100", get_current_user_id()), ARRAY_A);
    }
    public static function create_assignment($class, $data) {
        global $wpdb;
        $record = Access::classroom($class, true); Access::require_access($record);
        $course_id = absint($data['course_id'] ?? 0); $content = absint($data['content_id'] ?? 0);
        $course = get_post($course_id);
        self::need($course && $course->post_type === CREATOR_LMS_COURSE_CPT && $course->post_status === 'publish', 'Select a published course.');
        // Content distribution does not grant access or change purchases/enrollments.
        if ($content) {
            $rel = Schema::table('content_relationship'); $chapters = Schema::table('chapter_relationship');
            self::need($wpdb->get_var($wpdb->prepare("SELECT r.id FROM $rel r JOIN $chapters c ON c.chapter_id=r.chapter_id WHERE c.course_id=%d AND r.content_id=%d", $course_id, $content)), 'This activity does not belong to the selected course.');
        }
        $m = Schema::table('class_memberships'); $sm = Schema::table('school_memberships');
        $users = array_map('intval', $wpdb->get_col($wpdb->prepare("SELECT cm.user_id FROM $m cm JOIN $sm sm ON sm.user_id=cm.user_id AND sm.school_id=%d AND sm.role='student' AND sm.status='active' WHERE cm.class_id=%d AND cm.role='student' AND cm.status='active'", $record['school_id'], $class)));
        if (!empty($data['student_ids'])) { $selected = array_unique(array_map('absint', (array) $data['student_ids'])); self::need(!array_diff($selected, $users), 'A selected student is outside this class.'); $users = $selected; }
        self::need($users, 'Add students to the class first.');
        foreach ($users as $user) {
            $student = new \OMLMS\Data\Student($user);
            self::need($student->maybe_enrolled($course_id), 'Every recipient must already have access to this course. Assignment does not enroll students.');
            self::need(!empty($data['prior_completion']) || !($content ? $student->maybe_completed($content) : $student->is_course_completed($course_id)), 'A recipient already completed this work. Enable counting prior completion or choose different work.');
        }
        $due = null;
        if (!empty($data['due_at'])) {
            try { $school = self::row('schools', $record['school_id']); $due = (new \DateTimeImmutable($data['due_at'], new \DateTimeZone($school['timezone'])))->setTimezone(new \DateTimeZone('UTC'))->format('Y-m-d H:i:s'); }
            catch (\Exception $error) { throw new \RuntimeException('Invalid due date.', 400); }
        }
        $title = self::text($data['title'] ?? '') ?: get_the_title($content ?: $course_id);
        return self::transaction(function () use ($record, $class, $course_id, $content, $due, $title, $users, $data) {
            $id = self::insert('learning_assignments', ['school_id' => $record['school_id'], 'class_id' => $class, 'creator_id' => get_current_user_id(), 'title' => $title, 'course_id' => $course_id, 'content_id' => $content, 'due_at' => $due, 'prior_completion' => !empty($data['prior_completion']) ? 1 : 0, 'created_at' => self::now()]);
            foreach ($users as $user) {
                $student = new \OMLMS\Data\Student($user);
                $done = !empty($data['prior_completion']) && ($content ? $student->maybe_completed($content) : $student->is_course_completed($course_id));
                self::insert('assignment_recipients', ['assignment_id' => $id, 'student_user_id' => $user, 'assigned_at' => self::now(), 'completed_at' => $done ? self::now() : null]);
            }
            self::audit($record['school_id'], 'learning_assigned', $id);
            return ['id' => $id, 'recipients' => count($users)];
        });
    }
    public static function assignments($class = 0, $student = 0, $school = 0, $page = 1) {
        global $wpdb;
        $a = Schema::table('learning_assignments'); $r = Schema::table('assignment_recipients'); $c = Schema::table('classes'); $s = Schema::table('schools'); $sm = Schema::table('school_memberships'); $cm = Schema::table('class_memberships');
        if ($class) {
            Access::require_access(Access::classroom($class));
            $scope = $wpdb->prepare('a.class_id=%d', $class);
        } else {
            $student = $student ?: get_current_user_id();
            Access::require_access($student === get_current_user_id() || ($school && Access::guardian($school, $student)));
            $scope = $wpdb->prepare('r.student_user_id=%d', $student);
            if ($school) { $scope .= $wpdb->prepare(' AND a.school_id=%d', $school); }
        }
        // Report only distributed school work and current memberships; never global student history.
        $rows = $wpdb->get_results($wpdb->prepare("SELECT a.id,a.title,a.course_id,a.content_id,a.due_at,a.created_at,a.class_id,c.name AS class_name,a.school_id,r.student_user_id,u.display_name AS student_name,r.completed_at FROM $a a JOIN $r r ON r.assignment_id=a.id JOIN $c c ON c.id=a.class_id JOIN $s s ON s.id=a.school_id AND s.status='active' JOIN {$wpdb->users} u ON u.ID=r.student_user_id JOIN $sm sm ON sm.school_id=a.school_id AND sm.user_id=r.student_user_id AND sm.role='student' AND sm.status='active' JOIN $cm cm ON cm.class_id=a.class_id AND cm.user_id=r.student_user_id AND cm.role='student' AND cm.status='active' WHERE a.status='active' AND $scope ORDER BY a.id DESC,r.student_user_id LIMIT 50 OFFSET %d", (max(1, $page) - 1) * 50), ARRAY_A);
        foreach ($rows as &$row) { $row['url'] = get_permalink($row['content_id'] ?: $row['course_id']); }
        return $rows;
    }
    public static function course_completed($student, $course) { self::mark_completed($student, $course, 0); }
    public static function content_completed($content, $course, $student) { self::mark_completed($student, $course, $content); }
    private static function mark_completed($student, $course, $content) {
        global $wpdb;
        $a = Schema::table('learning_assignments'); $r = Schema::table('assignment_recipients');
        // Re-check actual LMS state instead of trusting event arguments from integrations.
        $person = new \OMLMS\Data\Student($student);
        if (!($content ? $person->maybe_completed($content) : $person->is_course_completed($course))) { return; }
        $wpdb->query($wpdb->prepare("UPDATE $r r JOIN $a a ON a.id=r.assignment_id SET r.completed_at=%s WHERE r.student_user_id=%d AND a.course_id=%d AND a.content_id=%d AND a.status='active' AND r.completed_at IS NULL", self::now(), $student, $course, $content));
    }
    public static function report($school) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $a = Schema::table('learning_assignments'); $r = Schema::table('assignment_recipients'); $c = Schema::table('classes');
        return $wpdb->get_results($wpdb->prepare("SELECT c.id,c.name,c.status,COUNT(r.id) AS assigned,SUM(CASE WHEN r.completed_at IS NOT NULL THEN 1 ELSE 0 END) AS completed FROM $c c LEFT JOIN $a a ON a.class_id=c.id AND a.status='active' LEFT JOIN $r r ON r.assignment_id=a.id WHERE c.school_id=%d GROUP BY c.id,c.name,c.status ORDER BY c.name LIMIT 200", $school), ARRAY_A);
    }
    /** Limit grading to an explicitly distributed activity, current roster, and its submission. */
    public static function submission_scope($learning_id, $attempt_id) {
        $learning = self::row('learning_assignments', $learning_id);
        Access::require_access($learning && $learning['status'] === 'active' && Access::classroom($learning['class_id'], true));
        $attempt = self::row('assignment_attempts', $attempt_id);
        Access::require_access($attempt && (int) $attempt['assignment_id'] === (int) $learning['content_id'] && (int) $attempt['course_id'] === (int) $learning['course_id']);
        global $wpdb;
        $r = Schema::table('assignment_recipients'); $m = Schema::table('class_memberships');
        $assigned = $wpdb->get_var($wpdb->prepare("SELECT r.assigned_at FROM $r r JOIN $m m ON m.user_id=r.student_user_id AND m.class_id=%d AND m.role='student' AND m.status='active' WHERE r.assignment_id=%d AND r.student_user_id=%d", $learning['class_id'], $learning_id, $attempt['user_id']));
        Access::require_access($assigned && Access::student($learning['school_id'], $attempt['user_id']));
        Access::require_access($learning['prior_completion'] || get_gmt_from_date($attempt['start_date']) >= $assigned);
        return [$learning, $attempt];
    }
    public static function submissions($class) {
        global $wpdb;
        $class_row = Access::classroom($class, true); Access::require_access($class_row);
        $a = Schema::table('learning_assignments'); $r = Schema::table('assignment_recipients'); $attempts = Schema::table('assignment_attempts');
        $rows = $wpdb->get_results($wpdb->prepare("SELECT a.id AS learning_id,t.id FROM $a a JOIN $r r ON r.assignment_id=a.id JOIN $attempts t ON t.assignment_id=a.content_id AND t.course_id=a.course_id AND t.user_id=r.student_user_id WHERE a.class_id=%d AND a.status='active' ORDER BY t.id DESC LIMIT 100", $class), ARRAY_A);
        $result = [];
        foreach ($rows as $row) {
            try { [$learning, $attempt] = self::submission_scope($row['learning_id'], $row['id']); }
            catch (\RuntimeException $error) { continue; }
            $files = maybe_unserialize($attempt['files']);
            $result[] = ['id' => $attempt['id'], 'learning_id' => $learning['id'], 'title' => $learning['title'], 'student_name' => get_userdata($attempt['user_id'])->display_name, 'content' => wp_strip_all_tags($attempt['content']), 'score' => $attempt['score'], 'status' => $attempt['status'], 'note' => wp_strip_all_tags($attempt['note'] ?? ''), 'total_points' => (int) get_post_meta($attempt['assignment_id'], '_total_points', true), 'file_url' => is_array($files) && !empty($files['file']) ? add_query_arg(['ohmylms_school_file' => $attempt['id'], 'learning_id' => $learning['id'], '_wpnonce' => wp_create_nonce('omlms_school_file')], home_url('/')) : ''];
        }
        return $result;
    }
    public static function grade($learning_id, $attempt_id, $data) {
        [$learning, $attempt] = self::submission_scope($learning_id, $attempt_id);
        $total = (int) get_post_meta($attempt['assignment_id'], '_total_points', true);
        $score = $data['score'] ?? null;
        self::need(is_numeric($score) && (float) $score === (float) (int) $score && $score >= 0 && $score <= $total, 'Score must be a whole number between zero and the total points.');
        // Reuse the existing grading/completion pipeline with only the verified attempt ID.
        $request = new \WP_REST_Request('POST');
        $request->set_url_params(['id' => (int) $attempt['assignment_id'], 'user_id' => (int) $attempt['user_id']]);
        $request->set_header('Content-Type', 'application/json');
        $request->set_body(wp_json_encode([['id' => (int) $attempt_id, 'score' => (int) $score, 'status' => 'reviewed', 'note' => self::text($data['note'] ?? '', 2000)]]));
        $result = (new \OMLMS\Rest\V1\AssignmentController())->update_attempt_report($request);
        if (is_wp_error($result)) { throw new \RuntimeException('Unable to grade this submission.', 400); }
        self::content_completed($attempt['assignment_id'], $attempt['course_id'], $attempt['user_id']);
        self::audit($learning['school_id'], 'submission_graded', $attempt_id);
        return ['success' => true];
    }
    public static function archive_class($id) {
        $class = self::row('classes', $id);
        Access::require_access($class && Access::school($class['school_id']));
        self::update('classes', ['status' => 'archived'], ['id' => $id]);
        self::audit($class['school_id'], 'class_archived', $id);
        return ['success' => true];
    }
    public static function rollover($school, $data) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $from = self::row('academic_years', absint($data['from_year'] ?? 0)); $to = self::row('academic_years', absint($data['to_year'] ?? 0));
        self::need($from && $to && $from['id'] !== $to['id'] && (int) $from['school_id'] === $school && (int) $to['school_id'] === $school && $from['status'] === 'active' && $to['status'] === 'active', 'Select two different active years in this school.');
        return self::transaction(function () use ($school, $from, $to, $wpdb) {
            $years = Schema::table('academic_years');
            // Serialize rollover; repeated requests must never duplicate classes.
            $status = $wpdb->get_var($wpdb->prepare("SELECT status FROM $years WHERE id=%d FOR UPDATE", $from['id']));
            self::need($status === 'active', 'This year has already been archived.');
            $c = Schema::table('classes');
            $classes = $wpdb->get_results($wpdb->prepare("SELECT * FROM $c WHERE academic_year_id=%d AND school_id=%d AND status='active'", $from['id'], $school), ARRAY_A);
            foreach ($classes as $class) {
                // New year starts with empty rosters; grade promotion is an explicit staff decision.
                self::insert('classes', ['school_id' => $school, 'academic_year_id' => $to['id'], 'name' => $class['name'], 'subject' => $class['subject'], 'grade' => $class['grade']]);
                self::update('classes', ['status' => 'archived'], ['id' => $class['id']]);
            }
            self::update('academic_years', ['status' => 'archived'], ['id' => $from['id']]);
            self::audit($school, 'year_rolled_over', $from['id']);
            return ['classes_created' => count($classes)];
        });
    }
    public static function import_roster($school, $data) {
        global $wpdb;
        Access::require_access(Access::school($school));
        $csv = (string) ($data['csv'] ?? ''); self::need(strlen($csv) <= 100000, 'CSV must be smaller than 100 KB.');
        $preview_key = 'omlms_roster_preview_' . hash('sha256', get_current_user_id() . ':' . $school . ':' . $csv);
        if (!empty($data['commit'])) { self::need(get_transient($preview_key), 'Preview this exact CSV before importing it.'); }
        $stream = fopen('php://temp', 'r+'); fwrite($stream, $csv); rewind($stream);
        $headers = fgetcsv($stream); self::need($headers && in_array('name', $headers, true) && in_array('external_student_id', $headers, true), 'CSV headers must include name and external_student_id.');
        $results = []; $seen = []; $line = 1;
        while (($values = fgetcsv($stream)) !== false) {
            $line++; self::need($line <= 201, 'Import up to 200 students at a time.');
            if ($values === [null]) { continue; }
            $result = ['line' => $line];
            try {
                self::need(count($headers) === count($values), 'Column count does not match the header.');
                $row = array_combine($headers, $values); $name = self::text($row['name']); $external = self::text($row['external_student_id'], 100);
                self::need($name && $external && !isset($seen[$external]), 'Missing name/student ID or repeated student ID in this file.'); $seen[$external] = true;
                $table = Schema::table('school_student_profiles');
                $existing = $wpdb->get_var($wpdb->prepare("SELECT user_id FROM $table WHERE school_id=%d AND external_student_id=%s", $school, $external));
                $result += ['name' => $name, 'external_student_id' => $external, 'status' => $existing ? 'existing' : 'new'];
                if (!empty($data['commit']) && !$existing) { $created = self::create_student($school, $row); $result['status'] = 'created'; $result['user_id'] = $created['id']; }
            } catch (\Throwable $error) { $result['status'] = 'error'; $result['error'] = $error->getMessage(); }
            $results[] = $result;
        }
        fclose($stream);
        if (empty($data['commit'])) { set_transient($preview_key, 1, 15 * MINUTE_IN_SECONDS); }
        else { delete_transient($preview_key); self::audit($school, 'roster_imported'); }
        return $results;
    }
}
