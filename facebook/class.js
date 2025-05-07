const button = document.getElementById("button-id")
button.addEventListener ("click", function (){
    const newdiv  = document.createElement("h1");
    newdiv.textContent = "soft";
    document.body.appendChild(newdiv);  
});
