/*
    파일명 : main.js
    작성자 : 지혜인
    작성일 : 2024.03.28
    속  성 : 메인페이지에서 사용된 jqeury(header 빼고)
*/
$(document).ready(function(){
        let device_status
        let window_w
        function device_chk(){
            let window_w = $(window).width()
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

        const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            effect: "fade", /* fade 효과 */

            autoplay: {  /* 팝업 자동 실행 */
                delay: 3500,
                disableOnInteraction: true,
            },

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                el: '.visual .pagination', /* 해당 요소의 class명 */
                clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                /* type: 'fraction',  type fraction을 주면 paging이 숫자로 표시됨 */
                renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },

            navigation: {  /* 이전, 다음 버튼 */
                nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
                prevEl: '.visual .prev',  
            },

        });
        
        $('.visual .swiper .pause').on('click', function(){
            swiper.autoplay.stop(); /* 일시정지 기능 */
            $('.visual .swiper .play').show()
            $('.visual .swiper .pause').hide()
        })
        $('.visual .swiper .play').on('click', function(){
            swiper.autoplay.start();  /* 재생 기능 */
            $('.visual .swiper .pause').show()
            $('.visual .swiper .play').hide()
        })

        $('.q_service').on('mouseenter', function(){
            $(this).addClass('on')
        })
        $('.q_service').on('mouseleave', function(){
            $(this).removeClass('on')
        })

        $('aside .q_top a').on('click', function(){
            $('html, body').animate({
                scrollTop : 0
            }, 500)
        })

        /***************biz over  ************** 
         * .biz .list ul li에 마우스를 올리면 on 클래스 추가
        .biz .list ul li에 마우스를 빼면 off클래스 추가 
        **************************** */
        $('.biz .list ul li').on('mouseenter', function(){
            if(device_status == 'pc') {
                $('.biz .list ul li').removeClass('on')
                $('.biz .list ul li').addClass('off')
                $(this).removeClass('off')
                $(this).addClass('on')
            }
        })
        $('.biz .list ul li').on('mouseleave', function(){
            if(device_status == 'pc') {
                $('.biz .list ul li').removeClass('on')
                $('.biz .list ul li').removeClass('off')
            }
        })
})