$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter focusin', function(){
        $('.header').addClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .gnb .depth01 > li:last-child > .depth02 > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })

    let idx = 1
    let obj_top = 0
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_top = -(idx-1)*350
        $('.visual ul').animate({
            top : obj_top
        }, 500)
    }, 3000)

    $('.notice .layer_open').on('click', function(){
        $('.popup').show()
    })
    $('.popup .close').on('click', function(){
        $('.popup').hide()
    })
})