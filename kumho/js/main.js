/*
    파일명 : main.js
    작성자 : 지혜인
    작성일 : 2024.02.28
    속  성 : 메인페이지에서 사용된 jqeury(header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },
    });
    
    
    $('.visual .btn_ctrl .stop').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl .play').show()
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    })
    $('.visual .btn_ctrl .play').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl .stop').show()
        visual_swiper.autoplay.start();  /* 재생 기능 */
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
    device_chk()//문서가 로딩되고 1번 실행
    $(window).resize(function(){ //문서가 리사이즈될 때마다 1번씩 실행
        device_chk()
    })

    /***************************************************
        .biz .list ul li에 마우스를 올리면 on 클래스 추가
        .biz .list ul li에 마우스를 빼면 off클래스 추가 
    **************************************************** */
    $('.biz .list ul li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').addClass('off')
            $(this).removeClass('off')
            $(this).addClass('on')
        } 
    })
    $('.biz .list ul li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').removeClass('off')
        }
    })
    /***************************************************
        news의 팝업
    **************************************************** */

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {    
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1025: {   
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })
})//$(document).reday