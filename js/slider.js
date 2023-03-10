// function Sim(sldrId) {

// 	let id = document.getElementById(sldrId);
// 	if(id) {
// 		this.sldrRoot = id
// 	}
// 	else {
// 		this.sldrRoot = document.querySelector('.my-works__slider')
// 	};

// 	// Slider objects
// 	this.sldrList = this.sldrRoot.querySelector('.my-works__slider__list');
// 	this.sldrElements = this.sldrList.querySelectorAll('.my-works__slider__element');
// 	this.sldrElemFirst = this.sldrList.querySelector('.my-works__slider__element');
// 	this.leftArrow = this.sldrRoot.querySelector('.my-works__slider__arrow-left');
// 	this.rightArrow = this.sldrRoot.querySelector('.my-works__slider__arrow-right');
// 	this.indicatorDots = this.sldrRoot.querySelector('.my-works__slider__dots');

// 	// Initialization
// 	this.options = Sim.defaults;
// 	Sim.initialize(this)
// };

// Sim.defaults = {

// 	// Default options for the slider
// 	loop: true,     // Бесконечное зацикливание слайдера
// 	auto: true,     // Автоматическое пролистывание
// 	interval: 5000, // Интервал между пролистыванием элементов (мс)
// 	arrows: true,   // Пролистывание стрелками
// 	dots: true      // Индикаторные точки
// };

// Sim.prototype.elemPrev = function(num) {
// 	num = num || 1;

// 	let prevElement = this.currentElement;
// 	this.currentElement -= num;
// 	if(this.currentElement < 0) this.currentElement = this.elemCount-1;

// 	if(!this.options.loop) {
// 		if(this.currentElement == 0) {
// 			this.leftArrow.style.display = 'none'
// 		};
// 		this.rightArrow.style.display = 'block'
// 	};
	
// 	this.sldrElements[this.currentElement].style.opacity = '1';
// 	this.sldrElements[prevElement].style.opacity = '0';

// 	if(this.options.dots) {
// 		this.dotOn(prevElement); this.dotOff(this.currentElement)
// 	}
// };

// Sim.prototype.elemNext = function(num) {
// 	num = num || 1;
	
// 	let prevElement = this.currentElement;
// 	this.currentElement += num;
// 	if(this.currentElement >= this.elemCount) this.currentElement = 0;

// 	if(!this.options.loop) {
// 		if(this.currentElement == this.elemCount-1) {
// 			this.rightArrow.style.display = 'none'
// 		};
// 		this.leftArrow.style.display = 'block'
// 	};

// 	this.sldrElements[this.currentElement].style.opacity = '1';
// 	this.sldrElements[prevElement].style.opacity = '0';

// 	if(this.options.dots) {
// 		this.dotOn(prevElement); this.dotOff(this.currentElement)
// 	}
// };

// Sim.prototype.dotOn = function(num) {
// 	this.indicatorDotsAll[num].style.cssText =
//              'background-color:#BBB; cursor:pointer;'
// };

// Sim.prototype.dotOff = function(num) {
// 	this.indicatorDotsAll[num].style.cssText =
//              'background-color:#556; cursor:default;'
// };

// Sim.initialize = function(that) {

// 	// Constants
// 	that.elemCount = that.sldrElements.length; // Количество элементов

// 	// Variables
// 	that.currentElement = 0;
// 	let bgTime = getTime();

// 	// Functions
// 	function getTime() {
// 		return new Date().getTime();
// 	};
// 	function setAutoScroll() {
// 		that.autoScroll = setInterval(function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime + 10 > that.options.interval) {
// 				bgTime = fnTime; that.elemNext()
// 			}
// 		}, that.options.interval)
// 	};

// 	// Start initialization
// 	if(that.elemCount <= 1) {   // Отключить навигацию
// 		that.options.auto = false;
//                 that.options.arrows = false; that.options.dots = false;
// 		that.leftArrow.style.display = 'none';
//                 that.rightArrow.style.display = 'none'
// 	};
// 	if(that.elemCount >= 1) {   // показать первый элемент
// 		that.sldrElemFirst.style.opacity = '1';
// 	};

// 	if(!that.options.loop) {
// 		that.leftArrow.style.display = 'none';  // отключить левую стрелку
// 		that.options.auto = false; // отключить автопркрутку
// 	}
// 	else if(that.options.auto) {   // инициализация автопрокруки
// 		setAutoScroll();
// 		// Остановка прокрутки при наведении мыши на элемент
// 		that.sldrList.addEventListener('mouseenter', function() {
//                       clearInterval(that.autoScroll)
//                 }, false);
// 		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
// 	};

// 	if(that.options.arrows) {  // инициализация стрелок
// 		that.leftArrow.addEventListener('click', function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime > 1000) {
// 				bgTime = fnTime; that.elemPrev()
// 			}
// 		}, false);
// 		that.rightArrow.addEventListener('click', function() {
// 			let fnTime = getTime();
// 			if(fnTime - bgTime > 1000) {
// 				bgTime = fnTime; that.elemNext()
// 			}
// 		}, false)
// 	}
// 	else {
// 		that.leftArrow.style.display = 'none';
//                 that.rightArrow.style.display = 'none'
// 	};

// 	if(that.options.dots) {  // инициализация индикаторных точек
// 		let sum = '', diffNum;
// 		for(let i=0; i<that.elemCount; i++) {
// 			sum += '<span class="sim-dot"></span>'
// 		};
// 		that.indicatorDots.innerHTML = sum;
// 		that.indicatorDotsAll =
//                        that.sldrRoot.querySelectorAll('span.sim-dot');
// 		// Назначаем точкам обработчик события 'click'
// 		for(let n=0; n<that.elemCount; n++) {
// 			that.indicatorDotsAll[n].addEventListener('click', function(){
// 				diffNum = Math.abs(n - that.currentElement);
// 				if(n < that.currentElement) {
// 					bgTime = getTime(); that.elemPrev(diffNum)
// 				}
// 				else if(n > that.currentElement) {
// 					bgTime = getTime(); that.elemNext(diffNum)
// 				}
// 				// Если n == that.currentElement ничего не делаем
// 			}, false)
// 		};
// 		that.dotOff(0);  // точка[0] выключена, остальные включены
// 		for(let i=1; i<that.elemCount; i++) {
// 			that.dotOn(i)
// 		}
// 	}
// };

///////////////////////////

const images = document.querySelectorAll('.slider__img');
const sliderItems = document.querySelector('.slider__items');
let count = 0;
let width;

function init() {
	width = document.querySelector('.my-products__slider').offsetWidth;
	sliderItems.style.width = width * images.length + 'px';
	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	})
	console.log(width);
	scrollSlider();
}


window.addEventListener('resize', init);
init();

document.querySelector('.slider_next').addEventListener('click', function(){
	count++;
	if (count >= images.length) {
		count = 0;
	}
	scrollSlider();

})

document.querySelector('.slider_preview').addEventListener('click', function(){
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	scrollSlider();

})



function scrollSlider() {
	sliderItems.style.transform = 'translate(-' + count * width + 'px)';
}

