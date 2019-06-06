$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
     });
}); 

//Drag and drop function//

if (itemID == null){
        var itemID = 0;
    };


$('#createProject').on("click", function() {
itemID++;
var $box = $("#board").append('<button class="btn btn-primary" id="linkButton" onClick="reply_click(this.id) style="float:left" <p id="prosjekt_add+'+itemID+'"></p></button>');

});