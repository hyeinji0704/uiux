$(document).ready(function(){
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){//pc
            device_status = 'pc'
        }else{ //1024보다 작다면
            device_status = 'mobile'
        }
    }
    device_chk() //html 로딩 후 ---함수의 선언
    $(window).resize(function(){
        device_chk() // 브라우저가 리사이즈 될 때마다 1번씩
    })
    console.log(device_status)


    //html 문서가 로딩된 다음에 실행
    /*
        1차 메뉴(.header ul.depth01 > li)에 마우스를 오버하면 
        오버한 li(this)에 sub_over 클래스를 추가
        header에는 menu_over 클래스를 추가
        옆의 메뉴로 이동하면 이전메뉴가 아웃
        모든 li에 있는 클래스를 지우고 지금 오버한 것만 다시 클래스를 줌
    */
    $('.header .gnb ul.depth01 > li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth01 > li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header').on('mouseleave', function(){
        $('.header .gnb ul.depth01 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth01 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    /*swiper */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_btn .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_btn .prev ',  
        },
    });
    /*
        .visual .ctrl_btn .pause 정지 버튼을 클릭하면 팝업은 정지됨, stop 사라짐 play 버튼 나타남
        .visual .ctrl_btn .play 재생버튼을 클릭하면 팝업은 재생됨, stop버튼은 나타나고, play사라짐
    */
    $('.visual .ctrl_btn .pause').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .pause').show()
    })
    /*
        .lost .list > ul > li클릭하면
        li에 active 클래스 추가
        이전에 active 클래스가 있던 li의 active는 삭제
    */
    $('.lost .list > ul > li').on('click', function(){
        $('.lost .list > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    //adopt 팝업
    const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        breakpoints: {
            500: {    /* 500px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1320: {
                slidesPerView: 'auto', /*사이즈 제한*/ 
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.adopt .swiper .ctrl_btn .next',
            prevEl: '.adopt .swiper .ctrl_btn .prev',
        },
    });
       // adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
       // adopt_swiper.autoplay.start();  /* 재생 기능 */
    $('.adopt .ctrl_btn .pause').on('click', function(){
        adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.adopt .ctrl_btn .pause').show()
    })
    /* 관련사이트
        site_open을 클릭하면 목록이 나타남
            site_list 목록이 나타남
            site_open 사라짐
            site_close 나타남
        site_close을 클릭하면 목록이 사라짐
            site_list 목록이 사라짐
            site_open 나타남
            site_close 사라짐
    */
    $('.footer .family .site_open').on('click', function(){
        $('.footer .family .site_list').slideDown()
        $(this).hide()
        $('.footer .family .site_close').show()
    })
    $('.footer .family .site_close').on('click', function(){
        $('.footer .family .site_list').slideUp()
        $(this).hide()
        $('.footer .family .site_open').show()
    })
    /*모바일 메뉴
		.header .gnb .gnb_open 를 클릭하면 메뉴가 열림
			---header에 menu_open클래스 추가
		.header .gnb .gnb_close 를 클릭하면 메뉴가 닫힘
			---header에 menu_open클래스 삭제
		1차 메뉴를 클릭하면 하위메뉴가 열리는데 
			해당 li에 sub_open 클래스를 추가
			이미 열린 메뉴를 다시 클릭하면 닫힘
			1차 메뉴 클릭(href)를 무력화 - 안눌려서 이동 안하게끔
	*/
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb ul.depth01 > li:has(.depth02) > a').on('click', function(e){
        if(device_status == 'mobile'){//모바일일 때만 선언
            e.preventDefault()//모바일에서 href링크 없앰
            $(this).parent().toggleClass('sub_open')
        }
    })

})