
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

//slideshow------------------------

var slideindex=0;
showslides(slideindex);
function showslides(n){
    var slides =document.getElementsByClassName("myslide");
    if(n>slides.length){
        slideindex=0;
    }
    if(n<0){
        slideindex=slides.length;
    }
    for(var i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
        slideindex++;
        if( slideindex > slides.length){
            slideindex=1;
        }
        slides[slideindex-1].style.display="block";

        setTimeout(showslides, 3000);
    
}

function plusslides(n){
    showslides(slideindex+=n);
}


//=========================================