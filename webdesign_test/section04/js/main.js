$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .gnb .depth01 > li:last-child > .depth02 > li:last-child > a').on('focusout', function(){
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
        obj_top = -(idx-1)*300
        $('.visual ul').animate({
            top : obj_top
        },500)
    },3000)

    $('.cnt .board .list > li').on('click', function(){
        $('.cnt .board .list > li').removeClass('on')
        $(this).addClass('on')
    })

    $('.cnt .board .layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close').on('click', function(){
        $('.layer_popup').hide()
    })
})