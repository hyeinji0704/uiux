/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.03.20
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    let device_status
    let window_w
    function device_chk(){
        let window_w = $(window).width()
        if(window_w > 768 ){ //pc
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk()//문서가 로딩되고 1번 실행
    $(window).resize(function(){ //문서가 리사이즈될 때마다 1번씩 실행
        device_chk()
    })

    $('.header .gnb .depth01 > li').on('mouseenter, focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .tnb ul li.lang').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .gnb ul.depth01 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            /*$('.header .gnb ul.depth01 > li').removeClass('on')*/
            $(this).parent().toggleClass('on')		
        }
    })
    $('.header .gnb .gnb_open').on('click', function(){
        if(device_status == 'mobile'){
            $('.header').addClass('menu_open')
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        }
    })
    $('.header .gnb .gnb_close').on('click', function(){
        if(device_status == 'mobile'){
            $('.header').removeClass('menu_open')
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        }
    })

    $('.header .tnb .lang .open').on('click',function(){
        $('.header .tnb .lang').addClass('on')
    })
    $('.header .tnb .lang .close').on('click',function(){
        $('.header .tnb .lang').removeClass('on')
    })
})//$(document).ready