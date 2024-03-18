$(document).ready(function(){
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })


    let device_status
    let window_w
    function device_chk(){
        let window_w = $(window).width()
        if(window_w > 1024 ){ //pc
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk()
    $(window).resize(function(){
        device_chk()
    })

    $('.header .gnb .depth01 > li').on('mouseenter, focusin', function(){
        if(device_status == 'pc' ){
            $('.header').addClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc' ){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })
    $('.header .tnb').on('focusin', function(){
        if(device_status == 'pc' ){
            $('.header').removeClass('menu_over')
            $('.header .gnb .depth01 > li').removeClass('on')
        }
    })

    //모바일
    $('.header .gnb ul.depth01 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            /*$('.header .gnb ul.depth01 > li').removeClass('on')*/
            $(this).parent().toggleClass('on')		
        }
    })
    $('.header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})