$(document).ready(function () {
    $('#sidebarCollapse, #mobSidebarCollapse').on('click', function () {
        $('#sidebar, #sidebarCollapse, #content').toggleClass('active');

    });
});