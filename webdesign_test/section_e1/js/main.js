$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter focusin', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header').on('mouseleave', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .tnb .login').on('focusin', function(){
        $('.header .gnb .depth01 > li').removeClass('on')
    })

    let idx = 1
    let obj_left = 0
    let v_width = $('.visual').width()
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx-1)*v_width
        $('.visual ul').animate({
            left : obj_left
        }, 500)
    } ,3000)

    $('.layer_open').on('click', function(){
      $('.popup').show()
    })
    $('.close').on('click', function(){
        $('.popup').hide()
    })
})