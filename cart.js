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
   var total=document.getElementById("rs");
   var tp = JSON.parse(localStorage.getItem("total"));
   total.innerText=`Rs.${tp}.00`;
   document.getElementById("qty").value=1;
   document.getElementById("count").innerText=1;
   //=========================

   function cancel(){};


   function update(){
       let cart =document.getElementById("count");
       let qty =document.getElementById("qty").value;
       cart.innerText=qty;
       let price=tp*qty;
       total.innerText=`Rs.${price}.00`;

   }

   function gotopayment(){
       window.location="index.html";
   }
