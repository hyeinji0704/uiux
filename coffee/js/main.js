/*
    파일명 : main.js
    작성자 : 지혜인
    작성일 : 2024.02.28
    속  성 : 메인페이지에서 사용된 jqeury(header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    })


    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
	loop: true, /*팝업 꼬리 물기 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
	spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
	breakpoints: {
		768: {  /* 768px 이상이 되면 적용 */
			spaceBetween: 18, 
		},
        1024: {
            spaceBetween: 22,
        },
		1025: {  /* 1024px 이상이 되면 적용 */
			spaceBetween: 30,
		}
	},
	navigation: {
		nextEl: '.product .swiper-button-next',
		prevEl: '.product .swiper-button-prev',
	}
    })

    const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 28,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
	navigation: {
		nextEl: '.social .swiper-button-next',
		prevEl: '.social .swiper-button-prev',
	}
    })
	
})