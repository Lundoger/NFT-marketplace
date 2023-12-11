// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const mainPage = document.querySelector('.page');
if (mainPage) {
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)));
		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}
	
	function initializeClock(id, endtime) {
		let clock = document.getElementById(id);
		let hoursSpan = clock.querySelector(".hours");
		let minutesSpan = clock.querySelector(".minutes");
		let secondsSpan = clock.querySelector(".seconds");
	
		function updateClock() {
			let t = getTimeRemaining(endtime);
	
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
	
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	
	const deadline = "January 1 2024 00:00:00 GMT+0300"; //for Ukraine
	// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
	initializeClock("countdown", deadline);
}


const nftPage = document.querySelector('.nft');
if(nftPage) {
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)));
		return {
			total: t,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	}
	
	function initializeClock(id, endtime) {
		let clock = document.getElementById(id);
		let hoursSpan = clock.querySelector(".counter-hours");
		let minutesSpan = clock.querySelector(".counter-minutes");
		let secondsSpan = clock.querySelector(".counter-seconds");
	
		function updateClock() {
			let t = getTimeRemaining(endtime);
	
			hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
			minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
			secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
	
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}
	
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	
	// const deadline = "January 30 2023 00:00:00 GMT+0300"; //for Ukraine
	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
	initializeClock("counter", deadline);
}


const header = document.querySelector('.header');
if(header) {
	const menu = document.querySelector(".menu__list");
	menu.addEventListener("mouseover", (event) => {
	  if (event.target.classList.contains("menu__link")) {
	    menu.style.setProperty(
	      "--underline-width",
	      `${event.target.offsetWidth}px`
	    );
	    menu.style.setProperty(
	      "--underline-offset-x",
	      `${event.target.offsetLeft}px`
	    );
	  }
	});
	menu.addEventListener("mouseleave", () =>
	  menu.style.setProperty("--underline-width", "0")
	);
}


const btnFollow = document.querySelector('.info-client__button--follow');
if (btnFollow) {
	btnFollow.addEventListener("click", (e) => {
		if(e.target.closest('.info-client__button--follow')) {
			btnFollow.classList.toggle('signed');
		};
	});
};