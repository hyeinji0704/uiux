/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    /*******************브라우저가 스크롤이 되면 header fixed 클래스 추가****************/
    let scrolling 
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){//조금이라도 스크롤 함
            $('.header').addClass('fixed')
        }else{//상단에 있는 경우 -- 스크롤 안한 경우 또는 다시 올라간 경우
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //문서 로드되었을 때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    
    /*****************메뉴 오버 and 오픈**************** */
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1260 ){ //pc
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

    
    $('.header .gnb .depth01 > li').on('mouseenter focusin', function(){
       if(device_status == 'pc') {
            $('.header').addClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header .gnb').on('mouseleave', function(){
        if(device_status == 'pc') {
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .family').on('focusin', function(){
        if(device_status == 'pc') {
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .share').on('click', function(){
        $(this).toggleClass('on')
        $('html').on('click', function(e){
            if($(e.target).parents('.header .share').length < 1){
                $('.header .share').removeClass('on')
            }
        })
    })
    $('.header .gnb .depth01 > li > a').on('click', function(e){
        if(device_status == 'mobile') {
            e.preventDefault()
            $(this).parent().toggleClass('on')
        }
    })
    $('.header .gnb .gnb_open').on('click', function(){
        if(device_status == 'mobile') {
            $('.header').addClass('menu_open')
            $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        }
    })
    $('.header .gnb .gnb_close').on('click', function(){
        if(device_status == 'mobile') {
            $('.header').removeClass('menu_open')
            $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        }
    })
    /*****************메뉴 오버 and 오픈**************** */

    $('.footer .f_btm .open').on('click', function(){
        $('.footer .f_btm .familysite').addClass('on')
    })
    $('.footer .f_btm .close').on('click', function(){
        $('.footer .f_btm .familysite').removeClass('on')
    })
})