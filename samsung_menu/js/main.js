$(document).ready(function(){
    //html 문서가 로딩되면 단 1번만 실행
    /*스크롤시 header fixed가 된 경우 */
    let scrolling = $(window).scrollTop()//스크롤 된 값
    function scroll_chk(){//함수를 선언
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        if(scrolling > 0){//스크롤 된 값이 0보다 크다면 - fixed class 추가
            $('.header').addClass('fixed')
        }else{//0이거나 0보다 작거나 - fixed class 삭제
            $('.header').removeClass('fixed')
        }
    }//function scroll_chk
    scroll_chk() //함수의 호출
    $(window).scroll(function(){
        //브라우저가 스크롤 될 때마다 1번만 실행
        scroll_chk() //함수의 실행
    })//$(window).scroll
    
    /*pc버전시 메뉴에 오버하면 header스타일 변경 */
    let window_w //브라우저의 넓이
    let device_status //모바일모드인지 pc모드인지 구분
    let mobile_size = 640 //함수 선언
    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){//pc버전
            device_status = 'pc'
        }else{//640이하
            device_status = 'mobile'
        }
        console.log(device_status)
    }//function device_chk
    device_chk()//함수 호출
    $(window).resize(function(){
        //브라우저가 리사이즈 될 때마다 1번만 실행
        device_chk() //함수의 실행
    })//$(window).resize

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    /*메뉴 바로 뒤에는 로그인 버튼이 있음
    로그인 버튽에 포커스가 되면 메뉴의 오버상태를 해제*/
    $('.header .tnb .login').on('focusin', function(){
        $('.header').removeClass('menu_over')
    })

    /*모바일 메뉴 열기/닫기*/ 
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })
    $(".header .gnb ul.depth01 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault()	/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('sub_open')
        }
	}) 
    //  .header .gnb ul.depth01 > li --- sub_open 클래스 추가
    //  .header .gnb ul.depth01 > li > a
    // 1차메뉴 a를 클릭하면 감싸는 li에 클래스를 추가
    // a는 href 이동값을 가지고 있음... 이게 모바일에서는 클릭되면 안됩니다!
})//$(document).ready
