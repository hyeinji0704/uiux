/*
    파일명 : main.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 메인페이지에서 사용된 jqeury(header 빼고)
*/
$(document).ready(function(){
    window.addEventListener("load", () => {
        let elBox = document.querySelector(".visual .tit .text03");
        elBox.onclick = e => {
            e.currentTarget.classList.toggle("logo_move");  
        };
        
        elBox.onanimationend = e => {
            $('.visual .logo_ani').attr('style', 'opacity: 1')
        };
    });
})