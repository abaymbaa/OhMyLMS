<?php
    $single_course_layout = get_option('creator_lms_single_course_page_layout','layout_1');

    if( 'layout_3' === $single_course_layout ){
        ?>
        <svg width="20" height="20" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path fill="#C8D2E9" fill-opacity=".5" d="M20.625 17.875a2.75 2.75 0 11-5.5 0V5.5a2.75 2.75 0 115.5 0v12.375z"/><path fill="#7A8B9A" d="M13.75 17.875a2.75 2.75 0 11-5.5 0V11a2.75 2.75 0 115.5 0v6.875zm-6.875 0a2.75 2.75 0 11-5.5 0v-2.75a2.75 2.75 0 115.5 0v2.75z"/></svg>
        <?php
    }else {
        ?>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#A1A1AA" stroke="#A1A1AA" d="M11.17 15.333H8.835V7.166h2.333v8.167zm-6.25 0H2.585v-5.25h2.333v5.25z"/><path fill="#DDDDE6" d="M14.586 15.833V4.166h3.333v11.667h-3.333z"/></svg>
        <?php
    }
?>

