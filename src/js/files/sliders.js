import Swiper, { Navigation, Pagination } from 'swiper';
import "../../scss/base/swiper.scss";

let mySwiper
const slider = document.querySelector('.discover__slider');

function initSliders() {
	if (slider) {
		if (window.innerWidth <= 991.98 && slider.dataset.mobile == 'false') {
			mySwiper = new Swiper(slider, {
				modules: [Navigation, Pagination],
				observer: true,
				observeParents: true,
				spaceBetween: 30,
				speed: 800,
				pagination: {
					el: '.discover__pagination',
					clickable: true,
				},
	
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					670: {
						slidesPerView: 2,
					},
					860: {
						slidesPerView: 2.5,
					},
					992: {
					},
				},
			});
			slider.dataset.mobile = 'true';
		}
		if (window.innerWidth > 991.98) {
			slider.dataset.mobile = 'false';
			mySwiper.destroy();
		}
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});

window.addEventListener("resize", function (e) {
	initSliders();
});