$(document).ready(function(){
    $('.header .gnb .depth01 > li ').on('mouseenter focusin', function(){
        $('.header .gnb .depth01 > li ').removeClass('on')
        $(this).addClass('on')
    })
    $('.header').on('mouseleave', function(){
        $('.header .gnb .depth01 > li ').removeClass('on')
    })
    $('.header .gnb .depth01 > li:last-child > .depth02 > li:last-child > a').on('focusout', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })

    let idx = 1
    let obj_left = 0
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx-1)*1340
        $('.visual ul').animate({
           left : obj_left
        },500)
    }, 3000)

    $('.board > ul > li').on('click', function(){
        $('.board > ul > li').removeClass('on')
        $(this).addClass('on')
    })
})