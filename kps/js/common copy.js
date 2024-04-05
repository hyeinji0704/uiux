/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter focusin',function(){
        $('.header').addClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .tnb .lang').on('focusin',function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })
})