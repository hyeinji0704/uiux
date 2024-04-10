/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024 ){ //pc
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

    let scroll_dir 
    let scroll_prev
    let scroll_curr
    function scroll_chk(){
        scroll_prev = scroll_curr
        scroll_curr = $(window).scrollTop()
        scroll_dir = scroll_prev - scroll_curr
        if(scroll_curr > 300){
            $('.header').addClass('fixed')
            if(scroll_dir > 0){
                $('.header').attr('style', 'transform: translate(0, 0)')
            }else{
                $('.header').attr('style', 'transform: translate(0, -170px)')
                $('.header .gnb .depth01 > li').removeClass('on')
                $('.header').removeClass('menu_over')
            }
        }else{
            $('.header').removeClass('fixed')
            $('header').attr('style', 'transform: translate(0,0)')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        if(device_status == 'pc'){
            scroll_chk()
        }
    })

    $('.header .gnb .depth01 > li').on('mouseenter focusin',function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave',function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .tnb .lang').on('focusin',function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .gnb_wrapper .gnb_button').on('click', function(){
        if(device_status == 'mobile'){
            if($(this).hasClass('open') == true) {
                $('.header').addClass('menu_open')
                $(this).removeClass('open')
                $(this).addClass('active')
            }else {
                $('.header').removeClass('menu_open')
                $(this).addClass('open')
                $(this).removeClass('active')
            }
        }
    })
    $('.header .gnb .depth01 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            /*$('.header .gnb ul.depth01 > li').removeClass('on')*/
            $(this).parent().toggleClass('on')		
        }
    })
    $('.footer .f_btm .open').on('click', function(){
        $('.footer .f_btm .familysite').addClass('on')
    })
    $('.footer .f_btm .close').on('click', function(){
        $('.footer .f_btm .familysite').removeClass('on')
    })
})