$(document).ready(function () {
    console.log("Terp");
});


function gotoPerson() {
    //window.location.href = "/person"
    var searchString = $("#personSearch").val();
    window.location.href = "/person/" + searchString;
}

function goHome() {
    window.location.href = "/"
}


function gotoEverybody() {
    window.location.href = "/everybody";
}

