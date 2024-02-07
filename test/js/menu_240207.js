$(document).ready(function(){ // 문서가 로딩되면 한번만 실행
    /*
        메뉴에 마우스를 오버하면 - .header .gnb
        header에 클래스를 menu_over를 추가

        메뉴에 마우스를 아웃하면
        --header에 bg를 깔아줬기 때문에 header에 마우스 아웃
        header에 menu_over 클래스 삭제

        mouseneter를 주면 click해도 작동됨...
        모바일에서 pc버전용으로 만든 코드가 작동됨
        --pc인지/모바일인지 jquery에서 구분해서 pc에서만 작동되도록 제한
        css도 브라우저 사이즈로만 모바일/pc를 구분
        jquery도 브라우저 사이즈로만 모바일/pc를 구분
    */
   //let은 출생신고 한거 두번 쓰면 안됨
    let window_w = $(window).width() //브라우저 넓이
    let device_status = 'pc' //pc인지 mobile인지

    function device_chk(){ //check //함수를 선언 
        window_w = $(window).width() 
        if(window_w > 640){ //pc
            device_status = 'pc' //pc
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }//function device_chk

    device_chk()//함수의 실행

    $(window).resize(function(){ // 브라우저가 리사지으 될 때마다 1번씩 실행
        device_chk()
    })//$(window).resize


    $('.header .gnb').on('mouseenter focusin', function(){ //mouseenter focusin 같이 주어야함 -- 똑같은 기능이기에 
        if(device_status == 'pc'){ //pc버전이라면 실행 - 모바일이면 실행안함
            console.log('마우스올림')
            $('.header').addClass('menu_over')
        }
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    //제일 좋은 방식은 메뉴 옆에 언어/찾기라던가 다른 링크가 있고 그 링크에 포커스가 됐을 때 
    //out되는 것이 제일 좋음
    $('.header .gnb ul.depth01 li:last-child ul.depth02 li:last-child a').on('focusout', function(){
        $('.header').removeClass('menu_over')
    })


    /*
        1차메뉴를 클릭하면 감싸고 있는 li태그에
        sub_open이라는 클래스를 추가

        같은 메뉴를 1번 클릭하면 열리고 
        다시 클릭하면 닫힘

        하나의 메뉴를 클릭해서 열고 다른 메뉴를 클릭하면
        이전 메뉴도 닫힘(지금클릭한 것만 열림)

        --pc버전에서는 1차메뉴를 클릭하면 페이지 이동을 하고 
        모바일버전에서는 하위메뉴를 열어줌.
    */
    $(".header .gnb ul.depth01 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault()		/* a 태그의 href를 작동 시키지 않음 */
            //클릭한 a 자기자신을 감싸는 li를 선택
            $(this).parent().toggleClass('sub_open')
            /*toggleClass는 없으면 추가하고 있으면 삭제한다*/
        }
    })

    /*
    열기버튼을 누르면 header에 menu_open클래스 추가
    닫기버튼을 누르면 header에 menu_open클래스 삭제
    */
    
    $('.header .gnb .gnb_open').on('click', function (){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function (){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})//$(document).ready