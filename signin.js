//navigation part

function showsidenav(){
    document.getElementById("sidenav").style.display="block";
}
function hidesidenav(){
    document.getElementById("sidenav").style.display="none";
}
function showupnav(){
    document.getElementById("upnav").style.display="block";
}
function hideupnav(){
    document.getElementById("upnav").style.display="none";
}

//===============================================

function signup(){
    window.location="signup.html";
}
//=================================
function matchdata(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let psw = document.getElementById("password").value;
    var persons = JSON.parse(localStorage.getItem("data"));
    if(persons.email!=email || persons.psw!=psw){
        alert("please fill correct data")
    }else{
        alert("you have successfully logedin");
        setTimeout(function(){
            window.location="index.html";
        },2000);
    }
}