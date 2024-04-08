/*
    파일명 : main.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 메인페이지에서 사용된 jqeury(header 빼고)
*/
$(document).ready(function(){
    let device_status
    let window_w
    let window_h 
    let scrolling
    let obj_wrap = $('.story')
    let obj = $('.story .story_sub')
    let obj_start = 1024
    let obj_size 
    let obj_radius
    let obj_h
    let cnt_o 
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024 ){ //pc
            device_status = 'pc'
        }else{ //모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    function story_chk(){
        window_w = $(window).width()
        window_h = $(window).height()
        scrolling = $(window).scrollTop()
        if((scrolling >= obj_wrap.offset().top)&&(scrolling <= obj_wrap.offset().top + obj_wrap.height() - window_h)){
            obj_wrap.addClass('fixed')
            obj_wrap.removeClass('fixed_after')
        }else if(scrolling > obj_wrap.offset().top + obj_wrap.height() - window_h){
            obj_wrap.removeClass('fixed')
            obj_wrap.addClass('fixed_after')
        }else{
            obj_wrap.removeClass('fixed')
            obj_wrap.removeClass('fixed_after')
        }
        if(scrolling >= obj_wrap.offset().top){
            obj_size = obj_start+(scrolling - obj_wrap.offset().top)*1.8
            if(obj_size > window_w){
                obj_size = window_w
            }
            obj.width(obj_size)
            obj_radius = 50 - (scrolling - obj_wrap.offset().top)*0.06
            /*obj_h = 429 + (scrolling - obj_wrap.offset().top)*0.21
            obj.height(obj_h) 
            if(obj_radius < 0) {
                obj.height(obj_h) 
            }else{
                obj.height(429)
            }*/
            if(obj_radius < 0){
                obj_radius = 0
            }
            $('.story .bg').attr('style', 'border-radius:'+obj_radius+'% '+obj_radius+'% 0 0')
            $('.story').addClass('active')
        }else{
            $('.story .bg').attr('style', 'border-radius:50% 50% 0 0')
            $('.story').removeClass('active')
        }
    }
    device_chk()//문서가 로딩되고 1번 실행
    story_chk()
    $(window).resize(function(){ //문서가 리사이즈될 때마다 1번씩 실행
        device_chk()
        story_chk()
    })
    $(window).scroll(function(){
        story_chk()
    })
    
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,

        on: {
            slideChange: function() {
                setTimeout(function () {
                    visual_swiper.params.touchReleaseOnEdges = false;  
                    visual_swiper.params.mousewheel.releaseOnEdges = false;
                });
            },
            reachEnd: function() {
                setTimeout(function () {
                    visual_swiper.params.touchReleaseOnEdges = true;
                    visual_swiper.params.mousewheel.releaseOnEdges = true;
                }, 500);
            },
        }
    });
    const biz_swiper = new Swiper('.biz .swiper', { /* 팝업을 감싼는 요소의 class명 */
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,

        on: {
            slideChange: function() {
                setTimeout(function () {
                    biz_swiper.params.touchReleaseOnEdges = false;  
                    biz_swiper.params.mousewheel.releaseOnEdges = false;
                });
            },
            reachEnd: function() {
                setTimeout(function () {
                    biz_swiper.params.touchReleaseOnEdges = true;
                    biz_swiper.params.mousewheel.releaseOnEdges = true;
                }, 500);
            },
        }
    });

})