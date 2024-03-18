/*
    파일명 : common.js
    작성자 : 지혜인
    작성일 : 2024.02.28
    속  성 : 모든 페이지에서 작동되는 jquery (header, footer에서 작동되는 jquery)
*/
$(document).ready(function(){
    /*********************************************
        아래로 스크롤하면 header가 숨겨짐 (trasform으로)
        위로 스크롤하면 header가 나타남 (trasform으로 움직임)
        이전스크롤 값(ex-10) - 현재스크롤 된 값(ex-100) = 아래로 스크롤 중
        이전스크롤 값(ex-100) - 현재스크롤 된 값(ex-10) = 위로 스크롤 중
        무조건 스크롤을 내리면 header에 fixed 클래스가 들어감
    ********************************************/
        let scroll_dir //방향 -- 0보다 크면 위로 스크롤 , 0보다 작으면 아래로 스크롤
        let scroll_prev //이전 스크롤값
        let scroll_curr //현재 스크롤값
        /* prv = X curr = 0
           prv = 0 curr = 100
        */    
        function scroll_chk(){
            scroll_prev = scroll_curr
            scroll_curr = $(window).scrollTop()
            scroll_dir =scroll_prev - scroll_curr
            console.log(scroll_dir)
            if(scroll_curr > 300){ //스크롤이 되는 중
                $('header').addClass('fixed')
                if(scroll_dir > 0){ //위로 스크롤 되는 중 - 나타나야함
                    $('header').attr('style', 'transform: translate(0, 0)')
                    //transform: translate(0, -170px)
                }else{ //아래로 스크롤 되는 중 - 사라져야함
                    $('header').attr('style', 'transform: translate(0, -170px)')
                    $('.header .header_sub .gnb .depth01 > li').removeClass('on')
                    $('.header').removeClass('menu_over')//메뉴를 오버했을 때 스크롤하면 메뉴(depth02)가 사라짐
                }
            }else{
                $('header').removeClass('fixed')
                $('header').attr('style', 'transform: translate(0, 0)')
            }
        }
        scroll_chk()//처음 로딩됐을 때 1번 실행
    
        $(window).scroll(function(){ //스크롤 할 때마다 1번 실행
            scroll_chk()
        })
    /*********************************************
        메뉴에 마우스를 오버하면 header에 menu_over클래스 추가
        
    ********************************************/
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

        $('.header .header_sub .gnb .depth01 > li').on('mouseenter focusin', function(){
            if(device_status == 'pc'){
                $('.header .header_sub .gnb .depth01 > li').removeClass('on')
                $(this).addClass('on')
                $('.header').addClass('menu_over')
            }
        })
        $('.header').on('mouseleave', function(){
            if(device_status == 'pc'){
                $('.header .header_sub .gnb .depth01 > li').removeClass('on')
                $('.header').removeClass('menu_over')
            }
        })
        $('.header .header_sub .gnb .depth01 > li:last-child > .depth02 > li:last-child > a').on('focusout', function(){
            if(device_status == 'pc'){
                $('.header .header_sub .gnb .depth01 > li').removeClass('on')
                $('.header').removeClass('menu_over')
            }
        })
        

        /************************
         모바일 메뉴
         ***************************/
         $('.header .header_sub .gnb .depth01 > li > a').on('click', function(e){
            if(device_status == 'mobile'){
                e.preventDefault()
                /*$('.header .gnb ul.depth01 > li').removeClass('on')*/
                $(this).parent().toggleClass('on')		
            }
        })
        $('.header .header_sub .gnb .gnb_open').on('click', function(){
            if(device_status == 'mobile'){
                $('.header').addClass('menu_open')
                $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
            }
        })
        $('.header .header_sub .gnb .gnb_close').on('click', function(){
            if(device_status == 'mobile'){
                $('.header').removeClass('menu_open')
                $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
            }
        })

        //TOP 버튼 눌려서 상단으로 이동
        $('aside button').on('click', function(){
            $('html, body').animate({
                scrollTop : 0
            }, 500)
        })
})//$(document).ready