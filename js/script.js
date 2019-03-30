$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #sidebarCollapse, #content').toggleClass('active');
        // $('#sidebarCollapse').toggleClass('active');
        // $('#content').toggleClass('active');
    });
});