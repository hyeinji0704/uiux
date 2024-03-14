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
    $('.notice .layer_open').on('click', function(){
        $('.layer_popup').show()
    })
    $('.layer_popup .close').on('click', function(){
        $('.layer_popup').hide()
    })
    let idx = 0
    setInterval(function(){
        if( idx < 3){
            idx++
        }else{
            idx = 1
        }
        //console.log(idx)
        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx-1).addClass('active')
    },3000)
})