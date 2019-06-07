function set(property, value) { //SETTER
    document.getElementById(property).innerHTML = value;
}


function publishReport() {

    let publishedReports = document.getElementById("reportContainer")

    let reportDiv = document.createElement("div");

    reportDiv.classList.add("publishedReport");
    reportDiv.innerHTML = "<p>" + document.getElementById("reportText").value + "<p>"
    publishedReports.appendChild(reportDiv);
}





/* Work in progress

function verifyLogin() {
    
    for(i = 0; 1 < users.length; i++) {
        if (document.getElementById("uname") == users[i].username) 
            && (document.getElementById("pword") == users[i].password){
                
            }
    }
}

*/



/* function get(property){ GETTER
        return document.getElementById(property).innerHTML;        
}; */
