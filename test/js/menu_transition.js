$(document).ready(function(){
    /*
    <div class="gnb_btn open">
                    <button>메뉴열기</button> 
                </div>

    <div class="gnb_btn close">
                    <button>메뉴닫기</button>
                </div>
    */
    $('.header .gnb .gnb_btn').on('click', function(){
        if($(this).hasClass('open') == true){//open클래스를 가지고 있으면 --- 닫힘 > 열기
            $('.header').addClass('menu_open')
            $(this).removeClass('open')
            $(this).removeClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴닫기')
        }else{//open 클래스가 없을 때 - 열린상태 >닫힌상태
            $('.header').removeClass('menu_open')
            $(this).addClass('open')
            $(this).removeClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴열기')
        }
    })
    /* 
        메뉴열기 slideDown()
        메뉴닫기 slideUp()
        같은 1차메뉴를 클릭하는데 
        클릭할 때마다 현재 메뉴가 열린 상태인지 아닌지를 판단
        열린상태라면 li에 sub_open클래스가 있음
    */
    $(".header .gnb ul.depth01 > li > a").on("click", function(e){
		e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        let open_status = $(this).parent().hasClass('sub_open')
        console.log(open_status)
        if(open_status == true){ //열려있는 상태 - sub_open 있는 상태
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('.depth02').slideUp()
        }else{
            $(this).parent().addClass('sub_open')
            $(this).parent().find('.depth02').slideDown()
        }
	})
})//$(document).ready