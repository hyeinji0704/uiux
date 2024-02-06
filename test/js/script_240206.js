//alert('hello')
//확인창 alert - 회원가입 확인창 
console.log('개발자모드에서만 확인가능한 메시지 출력')
//코딩의 결과를 확인하기 위한 용도

var a = '한글' //a라는 변수에 '한글'이라는 값을 저장
a = 123456789 //기존에 저장된 값을 지우고 다시 '대한'만 출력
var b = 987456321
a = a * b 
console.log(a)

var c = 7
if(c == 5){//만약에 c가 5와 같다면 
    console.log('c는 5입니다.')
    //if문의 ()안에 조건이 맞을 경우에만 실행
}
if(c != 5){
    console.log('c는 5가 아닙니다.')
}

var d = 7
if(d > 10){
    console.log('d는 10보다 크다')
}else{//if이 맞이 않다면 무조건 else를 실행 
    // d가 10이거나, 10보다 작다면 무조건 실행 
    console.log('d가 10이거나, 10보다 작다')
}

var e = 20
if(e > 20){
    console.log('e는 20보다 크다')
}else if(e < 20){
    console.log('e는 20보다 작다')
}else{
    console.log('e는 20이다')
}//if문의 특징 단 한번만 실행
// scroll할 때 사용

//console.log()--괄호가 붙는거는 나한테 시키는거 -- 메소드
//li.length--괄호가 없는거 -- 속성

//팝업 창은 autoplay으로 제어

var e = '안녕'
console.log (e)
//var 이라는 변수를 선언하는 방식 -- 중복선언이 가능
//이 변수명을 이미 사용중인지 아닌지 판단이 어려움.


//let 재선언이 불가능한 변수 -- 중복선언을 막아줌
//이미 사용중인 변수를 또 선언하면 에러가 남
let abc = 'person'
console.log (abc)

abc = '중복'
console.log (abc)

const bbb = '제이쿼리'
console.log (bbb)
//bbb = '안녕' - 처음에 선언했던 값 이외에 다른 값을 저장이 불가능 (상수-변하지 않는 값)

let box_w = $('.box').width()
console.log(box_w)
// js는 대부분 head태그 안에서 불러들임
// 근데 js에서 html요소를 불러서 효과를 줌 .. 근데 아직 html요소가 로딩되기 전임
/*<head>
---js파일
</head>
<body>
---html요소의 위치
</body>
js파일이 html을 포함하고 있기 때문에 안나타남
body 안에 있어야 나타남
jquery는 호출될 때 단한번 작동됨.
근데 jquery는 조건이 될 때 다시 한번 호출이 되도록 하는 기능히 있음
*/
$(document).ready(function(){ //html 문서가 모두 로딩된 이후에 1번 실행
    let box_h = $('.box').height()
    console.log(box_h)
    let box_w = $('.box').width()
    console.log(box_w)
    $(window).resize(function(){ //브라우저 사이즈가 리사이즈 될 때마다 
        let window_w = $(window).width()
        console.log(window_w)
    })
    $(window).scroll(function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
    })

    //box에 마우스를 오버하면 active클래스를 추가
    //box에서 마우스를 아웃하면 active 클래스를 삭제
    $('.box').on('mouseenter', function(){
        //마우스를 오버한 box 자기 자신한테 active 클래스를 줌
        //$('.box').addClass('active') - 모든 박스에 class가 추가됨
        $(this).addClass('active') //마우스를 오버한 자기자신
    })//on은 .box감시자
    $('.box').on('mouseleave', function(){
        $(this).removeClass('active')
    })
    //box1이 1초동안 opacity가 0으로 점점 변하는 애니메이셔ㅛㄴ
    $('.box1').animate({
        opacity : 0
    }, 1000)
    //btn_top을 누르면 상단으로 자동 스크롤 
    $('.btn_top').on('click' , function(){
        //$(window).scrollTop(0)
        $('html, body').animate({
            scrollTop : 0
        } , 250)
    })
}) //$(document).ready
