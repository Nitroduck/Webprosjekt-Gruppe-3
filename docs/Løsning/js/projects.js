$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$('#addItem').on("click", function () {
    var $box = $("#board").append('<div id="projectList"><a class="btn btn-primary"  id="linkButton" href="board.html" data-role="button" ></a><p id="prosjekt_navn">New project</p></div>');
});
