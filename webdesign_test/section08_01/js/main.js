$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave',function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .gnb .depth01 > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    
    $('.container .board .list > li').on('click', function(){
        $('.container .board .list > li').removeClass('on')
        $(this).addClass('on')
    })

    $('.notice .layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close button').on('click', function(){
        $('.layer_popup').hide()
    })

    let idx = 1
    setInterval(function(){
        /*1-2-3-1-2-3 이 순서로 진행되어야함 */
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        //console.log(idx) //console로그 주석 처리해야함
        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx-1).addClass('active')
    }, 3000)//시간 꼭 고쳐줘야함 테스트 할 때만 1초로
})