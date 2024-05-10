$(document).ready(function(){
    const para = document.querySelector("button");

    para.addEventListener("click", updateName);

    function updateName() {
    const name = prompt("Enter a new name");
    para.textContent = `Player 1: ${name}`;
    }
})