$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Set userdata//
set("user-name", users[0].name);
set("my-mail", users[0].email);
set("my-dob", users[0].dob);

// Enter new uservalues//
function myFunction() {
    var fName = document.getElementById("fullName").value;
    document.getElementById("user-name").innerHTML = fName;
    var myMail = document.getElementById("mail").value;
    document.getElementById("my-mail").innerHTML = myMail;
    var myDob = document.getElementById("dob").value;
    document.getElementById("my-dob").innerHTML = myDob;
}
