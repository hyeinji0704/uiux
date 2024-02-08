$(document).ready(function(){
    //html 문서가 로딩되면 단 1번만 실행
    let scrolling = $(window).scrollTop()//스크롤 된 값
    
    function scroll_chk(){//함수를 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){//스크롤 된 값이 0보다 크다면 - fixed class 추가
            $('.header').addClass('fixed')
        }else{//0이거나 0보다 작거나 - fixed class 삭제
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //함수의 호출

    $(window).scroll(function(){
        //브라우저가 스크롤 될 때마다 1번만 실행
        scroll_chk() //함수의 실행
    })//$(window).scroll
})//$(document).ready
