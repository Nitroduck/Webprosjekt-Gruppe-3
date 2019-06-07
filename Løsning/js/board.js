//Menu hide function

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

//Drag and drop function
if (itemID == null) {
    var itemID = 2;
};


//Add function, create a item with a modal and a uniqe ID
$('#addItem').click(function () {
    itemID++;
    var $box = $('<div class="dragItems"><i id="trash" class="far fa-trash-alt" onclick="deleteFunction(this)"></i><i class="far fa-edit" onClick="editFunction(this.id)" id="' + itemID + '" data-toggle="modal" data-target="#exampleModal"></i><h6 id="taskNameItem' + itemID + '">New assignment</h6><span id="taskTagItem' + itemID + '" class="badge-outline">Tag</span><p id="taskDescItem' + itemID + '" ></p><p id="taskUserItem' + itemID + '" ></p><p class="deadline" id="taskDateItem' + itemID + '">07.06.2019</p></div>');

    $('#todo').append($box);
    $(".dragItems").draggable();
});
$(".dragItems").draggable();

$(".boardProgress").droppable({
    accept: ".dragItems",
    drop: function (event, ui) {
        ui.draggable.draggable();
        var droppable = $(this);
        var draggable = ui.draggable;
        // Move draggable into droppable
        draggable.appendTo(droppable);
        draggable.css({
            top: '0',
            left: '0',
            marginTop: '0'
        });
    }
});

$(document).ready(function () {
    $('#item').draggable({
        containment: "parent"
    }).filter('#item').draggable("reset");

});

function editFunction(clicked_id) {
    //Create/change cookie to clicked ID
    $.cookie('click_cookie', clicked_id);

    //Change task ID element to add clicked ID
    document.getElementById('taskName').setAttribute('id', 'taskName' + $.cookie('click_cookie'));
    document.getElementById('taskDescription').setAttribute('id', 'taskDescription' + $.cookie('click_cookie'));
    document.getElementById('taskUser').setAttribute('id', 'taskUser' + $.cookie('click_cookie'));
    document.getElementById('taskTag').setAttribute('id', 'taskTag' + $.cookie('click_cookie'));
    document.getElementById('taskDate').setAttribute('id', 'taskDate' + $.cookie('click_cookie'));

    //Get and set correct input from Item   
    document.getElementById('taskName' + $.cookie('click_cookie')).value = document.getElementById('taskNameItem' + $.cookie('click_cookie')).innerHTML;
    document.getElementById('taskDescription' + $.cookie('click_cookie')).value = document.getElementById('taskDescItem' + $.cookie('click_cookie')).innerHTML;
    document.getElementById('taskUser' + $.cookie('click_cookie')).value = document.getElementById('taskUserItem' + $.cookie('click_cookie')).innerHTML;
    document.getElementById('taskTag' + $.cookie('click_cookie')).value = document.getElementById('taskTagItem' + $.cookie('click_cookie')).innerHTML;
    document.getElementById('taskDate' + $.cookie('click_cookie')).value = document.getElementById('taskDateItem' + $.cookie('click_cookie')).innerHTML;

    $("#taskDate" + $.cookie('click_cookie')).datepicker({
        dateFormat: 'dd.mm.yy'
    });

}

//Save info from task when btn click and make it unique
function saveForm() {


    //Formdata
    var name = document.getElementById('taskName' + $.cookie('click_cookie')).value;
    var descrtiption = document.getElementById('taskDescription' + $.cookie('click_cookie')).value;
    var tag = document.getElementById('taskTag' + $.cookie('click_cookie')).value;
    var user = document.getElementById('taskUser' + $.cookie('click_cookie')).value;
    var date = document.getElementById('taskDate' + $.cookie('click_cookie')).value;

    //Data in kanban. The concat() is used to join two or more arrays / data.
    var nameID = 'taskNameItem'.concat($.cookie('click_cookie'));
    var descID = 'taskDescItem'.concat($.cookie('click_cookie'));
    var tagID = 'taskTagItem'.concat($.cookie('click_cookie'));
    var userID = 'taskUserItem'.concat($.cookie('click_cookie'));
    var dateID = 'taskDateItem'.concat($.cookie('click_cookie'));

    var taskName = document.getElementById(nameID);
    var taskDesc = document.getElementById(descID);
    var taskTag = document.getElementById(tagID);
    var taskUser = document.getElementById(userID);
    var taskDate = document.getElementById(dateID);

    taskName.innerHTML = name;
    taskDesc.innerHTML = descrtiption;
    taskTag.innerHTML = tag;
    taskUser.innerHTML = user;
    taskDate.innerHTML = date;

    //Reset the modal input
    $('#exampleModal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
        document.getElementById('taskName' + $.cookie('click_cookie')).setAttribute('id', 'taskName');
        document.getElementById('taskDescription' + $.cookie('click_cookie')).setAttribute('id', 'taskDescription');
        document.getElementById('taskTag' + $.cookie('click_cookie')).setAttribute('id', 'taskTag');
        document.getElementById('taskUser' + $.cookie('click_cookie')).setAttribute('id', 'taskUser');
        document.getElementById('taskDate' + $.cookie('click_cookie')).setAttribute('id', 'taskDate');
    });

}

//Delete Item
function deleteFunction(item) {
    item.parentElement.remove();
}
