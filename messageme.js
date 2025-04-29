const input = document.getElementById("text");
const header = document.getElementById("header");

input.addEventListener("input",function(inp){
    header.innerText="Hey " +inp.target.value+" !Write down your message";
})