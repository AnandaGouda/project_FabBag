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
function planchange(no){
    var price = document.getElementById("price");
    if(no==1){
        price.innerText="599";
    }else if(no==3){
        price.innerText="1599";
    }else if(no==6){
        price.innerText="2899";
    }else if(no==12){
        price.innerText="4999";
    }
}
//=======================================
function increaseQunt(){
    let qunt = document.getElementById("Qunt");
    qunt.innerText=Number(qunt.innerText)+1;
    
}
function decreaseQunt(){
    let qunt = document.getElementById("Qunt");
    if(Number(qunt.innerText)==1){
        qunt.innerText=1;
    }else{
        qunt.innerText=Number(qunt.innerText)-1;
    }
    
}
function gotocart(){
    var price=document.getElementById("price").innerText;
    var qnt= document.getElementById("Qunt").innerText;
    var total=Number(price)*Number(qnt);
    localStorage.setItem("total", JSON.stringify(total));
    window.location="cart.html"
}