let icon = document.getElementById("toggleDark");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/soleil.png";
    }else{
        icon.src = "images/moon-fill.svg";
    }
}
const side = document.querySelector(".sidebar");
function showsidebar(){
    
    side.style.display = "flex";
}

function back(){
side.style.display="none";
}




