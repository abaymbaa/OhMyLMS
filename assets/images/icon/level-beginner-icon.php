<?php
    $single_course_layout = get_option('ohmylms_single_course_page_layout','layout_1');

    if( 'layout_3' === $single_course_layout ){
        ?>
        <svg width="20" height="20" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path fill="#C8D2E9" fill-opacity=".5" d="M20.625 17.875a2.75 2.75 0 11-5.5 0V5.5a2.75 2.75 0 115.5 0v12.375zm-6.875 0a2.75 2.75 0 11-5.5 0V11a2.75 2.75 0 015.5 0v6.875z"/><path fill="#7A8B9A" d="M6.875 17.875a2.75 2.75 0 11-5.5 0v-2.75a2.75 2.75 0 115.5 0v2.75z"/></svg>
        <?php
    }else {
        ?>
        <svg width="16" height="12" fill="none" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg"><path fill="#DDDDE6" stroke="#DDDDE6" d="M9.17 11.333H6.835V3.166h2.333v8.167z"/><path fill="#A1A1AA" stroke="#A1A1AA" d="M2.92 11.333H.585v-5.25h2.333v5.25z"/><path fill="#DDDDE6" d="M12.586 11.833V.166h3.333v11.667h-3.333z"/></svg>
        <?php
    }
?>

