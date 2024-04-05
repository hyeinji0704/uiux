/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){

    function gnb_over(){
        $('.header .gnb .depth01 > li').on('mouseenter focusin',function(){
            $('.header').addClass('menu_over')
            $('.header .gnb_bg').slideDown(500)
            $('.header .gnb .depth02').slideDown(850)
            $('.header .gnb .depth01 > li').removeClass('on')
            $(this).addClass('on')
        })
    }
    gnb_over()
    
    $('.header').on('mouseleave',function(){
        $('.header .gnb .depth01 > li').off()
        $('.header').removeClass('menu_over')
        $('.header .gnb_bg').slideUp(500)
        $('.header .gnb .depth02').slideUp(400, function(){
            gnb_over()
        })
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .tnb .lang').on('focusin',function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb_bg').slideUp(500)
        $('.header .gnb .depth02').slideUp(400)
        $('.header .gnb .depth01 > li').removeClass('on')
    })
})