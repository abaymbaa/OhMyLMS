# Removed editor blocks

The Activity, Course List, My Courses and Student Assignments Gutenberg blocks have been removed at the user's request. Their registrations, editor enqueues, exclusive PHP renderers and exclusive JavaScript sources/outputs are retired. The general editor helper no longer contains Course List styling setup.

Course catalog widgets and shortcodes, the My Courses shortcode, activity registrations and shortcodes, and the student assignment portal remain shared features. Student Assignments is still available through its existing shortcode; removing its block does not remove learner assignments.

Existing posts are not rewritten or deleted. Saved instances of these four blocks become unsupported blocks and their dynamic frontend content stops rendering. Replace those instances with the appropriate existing shortcode in a WordPress Shortcode block if their content is still needed.

The public helpers `ohmylms_page_has_course_list_block()` and `ohmylms_page_has_my_courses_block()` remain as compatibility shims returning false, so callers do not fatal after removal. The removed PHP block class/file mappings are an intentional compatibility exception: these classes implement the specifically retired blocks and are no longer loaded.

`assets/src/manifest.json` records retired generated asset paths. Both builds (including parity builds) and shipping remove those files and their maps, preventing old bundles from surviving rebuilds. Historical baseline metadata and translation catalogs remain provenance; they do not register or load blocks.
