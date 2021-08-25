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
function signin(){
    window.location="signin.html"
}
//================
function signupdata(e){
        e.preventDefault()
    var person={}
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value; 
    var email = document.getElementById("email").value;
    var psw = document.getElementById("password").value;
    if(fname == ""|| lname==""||email==""||psw==""){
        alert("Please fill all field");
        console.log(person);
    }else{
        person.email=email;
        person.psw=psw;
       
       localStorage.setItem("data", JSON.stringify(person));
        alert("you have successfully signedup");
        setTimeout(function(){
            window.location ="signin.html";
        },3000);

    }
    
    
    

}