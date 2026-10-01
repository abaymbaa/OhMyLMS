// Reconstructed Webpack factory 93509; arguments retain original semantics.
((e, t, n) => {
  "use strict";

  n.d(t, {
    $C: () => o,
    Q9: () => r,
    qO: () => a
  });
  var r = {
      user_id: "98765432",
      student_email: "alice@example.com",
      student_img: "",
      enrollment_date: "2025-02-15 10:30:45",
      enrolled_courses: "3",
      in_progress_courses: "2",
      completed_courses: "1",
      total_membership: 2,
      currency: "$",
      currency_pos: "left",
      courses: [{
        course_id: "201",
        course_name: "JavaScript Basics",
        enrollment_date: "2025-02-15 10:30:45",
        course_lesson_count: "5",
        course_assignment_count: "2",
        course_quiz_count: "3",
        completed_lesson: 3,
        completed_assignment: 1,
        completed_quiz: 2,
        total_points: "10",
        completed_points: "6",
        currency: "$",
        currency_pos: "left"
      }, {
        course_id: "305",
        course_name: "React Fundamentals",
        enrollment_date: "2025-02-20 09:45:30",
        course_lesson_count: "8",
        course_assignment_count: "3",
        course_quiz_count: "4",
        completed_lesson: 4,
        completed_assignment: 1,
        completed_quiz: 1,
        total_points: "15",
        completed_points: "5",
        currency: "$",
        currency_pos: "left"
      }, {
        course_id: "450",
        course_name: "Advanced Node.js",
        enrollment_date: "2025-02-25 14:20:10",
        course_lesson_count: "6",
        course_assignment_count: "2",
        course_quiz_count: "2",
        completed_lesson: 6,
        completed_assignment: 2,
        completed_quiz: 2,
        total_points: "12",
        completed_points: "12",
        currency: "$",
        currency_pos: "left"
      }],
      memberships: [{
        membership_id: "502",
        membership_name: "Tech Mastery",
        date_created: {
          date: "2025-02-10 11:15:00.000000",
          timezone_type: 1,
          timezone: "+00:00"
        },
        number_of_courses: 2,
        currency: "$",
        currency_pos: "left",
        regular_price: 100,
        period: "month",
        courses: [{
          id: 201,
          name: "JavaScript Basics",
          image_src: "https://example.com/images/javascript-course.jpg",
          date_created: {
            date: "2025-02-01 08:00:00.000000",
            timezone_type: 1,
            timezone: "+00:00"
          }
        }, {
          id: 305,
          name: "React Fundamentals",
          image_src: "https://example.com/images/react-course.jpg",
          date_created: {
            date: "2025-02-05 12:30:00.000000",
            timezone_type: 1,
            timezone: "+00:00"
          }
        }]
      }, {
        membership_id: "650",
        membership_name: "Full-Stack Pack",
        date_created: {
          date: "2025-01-28 09:00:00.000000",
          timezone_type: 1,
          timezone: "+00:00"
        },
        number_of_courses: 1,
        currency: "$",
        currency_pos: "left",
        regular_price: 100,
        period: "month",
        courses: [{
          id: 450,
          name: "Advanced Node.js",
          image_src: "https://example.com/images/nodejs-course.jpg",
          date_created: {
            date: "2025-01-20 14:45:00.000000",
            timezone_type: 1,
            timezone: "+00:00"
          }
        }]
      }]
    },
    a = [{
      student_id: "12345678",
      start_date: "2025-03-12 04:28:01",
      end_date: "2025-03-12 04:28:13",
      progress: "completed",
      status: "enrolled",
      name: "John Doe",
      email: "john@doe.com",
      profile_image: "https://secure.gravatar.com/avatar/a05f4337b325bfd8f3eb945387fa767021e67b88a9e941e785e55abcad3b1be7?s=96&d=mm&r=g",
      completion_rate: "17",
      is_completed: !1,
      completion_duration: 12,
      skipped_quizzes: [],
      skipped_assignments: [],
      is_reminder_sent: !0,
      last_reminder_sent: {},
      position: 1,
      position_in_text: "1st"
    }, {
      student_id: "789456",
      start_date: "2025-03-12 04:28:01",
      end_date: "2025-03-12 04:28:13",
      progress: "completed",
      status: "enrolled",
      name: "Smith Doe",
      email: "Smith@doe.com",
      profile_image: "https://secure.gravatar.com/avatar/a05f4337b325bfd8f3eb945387fa767021e67b88a9e941e785e55abcad3b1be7?s=96&d=mm&r=g",
      completion_rate: "17",
      is_completed: !1,
      completion_duration: 12,
      skipped_quizzes: [],
      skipped_assignments: [],
      is_reminder_sent: !0,
      last_reminder_sent: {},
      position: 1,
      position_in_text: "1st"
    }, {
      student_id: "78944556",
      start_date: "2025-03-12 04:28:01",
      end_date: "2025-03-12 04:28:13",
      progress: "completed",
      status: "enrolled",
      name: "Elizabeth Doe",
      email: "elizabeth@doe.com",
      profile_image: "https://secure.gravatar.com/avatar/a05f4337b325bfd8f3eb945387fa767021e67b88a9e941e785e55abcad3b1be7?s=96&d=mm&r=g",
      completion_rate: "17",
      is_completed: !1,
      completion_duration: 12,
      skipped_quizzes: [],
      skipped_assignments: [],
      is_reminder_sent: !0,
      last_reminder_sent: {},
      position: 1,
      position_in_text: "1st"
    }],
    o = {
      currency: "$",
      currency_pos: "right_space",
      earning_graph: {
        total_revenue: 1955,
        total_refund: 855,
        net_amount: 1100,
        growth: {
          total_revenue: 551.67,
          total_refund: 755,
          net_amount: 450
        },
        graph_data: {
          "2025-01": {
            earning: 1846,
            net: 1100,
            refund: 746
          },
          "2025-02": {
            earning: 109,
            net: 0,
            refund: 109
          },
          "2025-03": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-04": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-05": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-06": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-07": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-08": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-09": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-10": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-11": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2025-12": {
            earning: 0,
            net: 0,
            refund: 0
          },
          "2026-01": {
            earning: 0,
            net: 0,
            refund: 0
          }
        }
      },
      transactions: [{
        date: "2025-03-21 04:18:00",
        order_id: 3938,
        order_total: 0,
        order_items: [{
          course_id: 3928,
          course_name: ""
        }],
        type: "course"
      }, {
        date: "2025-03-21 03:19:13",
        order_id: 3915,
        order_total: 0,
        order_items: [{
          course_id: 3884,
          course_name: "Just testing the listˆˆ"
        }],
        type: "course"
      }, {
        date: "2025-03-12 04:28:01",
        order_id: 3845,
        order_total: 0,
        order_items: [{
          course_id: 3815,
          course_name: "Certificagte Cheching"
        }],
        type: "course"
      }, {
        date: "2025-03-12 04:23:45",
        order_id: 3843,
        order_total: 0,
        order_items: [{
          course_id: 3815,
          course_name: "Certificagte Cheching"
        }],
        type: "course"
      }, {
        date: "2025-03-05 06:00:51",
        order_id: 3471,
        order_total: 0,
        order_items: [],
        type: "course"
      }, {
        date: "2025-02-13 06:55:24",
        order_id: 2916,
        order_total: 0,
        order_items: [],
        type: "course"
      }, {
        date: "2025-01-23 06:58:36",
        order_id: 2455,
        order_total: 0,
        order_items: [],
        type: "course"
      }],
      count_unchecked_orders: 52,
      order_by_country: []
    };
});
