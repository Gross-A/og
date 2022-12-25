

// открытие всплывающего меню по клику на бургере

const burgerLogo = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
// const needle2 = document.getElementById('needle_2');
const needles = document.querySelectorAll('.needle');

console.log(burgerMenu)


burgerLogo.addEventListener('click', () => {
    console.log('burger');
    console.log(burgerMenu.classList)
    burgerMenu.classList.toggle('open')
    // needle2.classList.toggle('close');
    needles.forEach(el => {
        el.classList.toggle('close');
    })
})


// ****************slider 24_11
const sliderElem = {
    'women': [
        {'number': 1,
        'sourse': './assets/images/my_works/women/1.jpg'
        },
        {'number': 2,
        'sourse': './assets/images/my_works/women/2.jpg'
        },
        {'number': 3,
        'sourse': './assets/images/my_works/women/3.jpg'
        },
        {'number': 4,
        'sourse': './assets/images/my_works/women/4.jpg'
        },
        {'number': 5,
        'sourse': './assets/images/my_works/women/5.jpg'
        },
        {'number': 6,
        'sourse': './assets/images/my_works/women/6.jpg'
        },
        {'number': 7,
        'sourse': './assets/images/my_works/women/7.jpg'
        },


    ],
    'men': [
        {'number': 1,
        'sourse': './assets/images/my_works/men/1.jpg'
        },
        {'number': 2,
        'sourse': './assets/images/my_works/men/2.jpg'
        },
        {'number': 3,
        'sourse': './assets/images/my_works/men/3.jpg'
        },
        {'number': 4,
        'sourse': './assets/images/my_works/men/4.jpg'
        },
        // {'number': 5,
        // 'sourse': './assets/images/my_works/men/5.jpg'
        // },
        // {'number': 6,
        // 'sourse': './assets/images/my_works/men/6.jpg'
        // },



    ],
    'childs': [
        {'number': 1,
        'sourse': './assets/images/my_works/childs/1.jpg'
        },
        {'number': 2,
        'sourse': './assets/images/my_works/childs/2.jpg'
        },
        {'number': 3,
        'sourse': './assets/images/my_works/childs/3.jpg'
        },
        {'number': 4,
        'sourse': './assets/images/my_works/childs/4.jpg'
        },
        {'number': 5,
        'sourse': './assets/images/my_works/childs/5.jpg'
        },
        {'number': 6,
        'sourse': './assets/images/my_works/childs/6.jpg'
        },
        {'number': 7,
        'sourse': './assets/images/my_works/childs/7.jpg'
        },
        {'number': 8,
        'sourse': './assets/images/my_works/childs/8.jpg'
        },
        {'number': 9,
        'sourse': './assets/images/my_works/childs/9.jpg'
        },
        {'number': 10,
        'sourse': './assets/images/my_works/childs/10.jpg'
        },
        {'number': 11,
        'sourse': './assets/images/my_works/childs/11.jpg'
        },
        {'number': 12,
        'sourse': './assets/images/my_works/childs/12.jpg'
        },






    ]

}
const sliderTest = document.querySelector('.slider__test');


function createSlideElem(elSource) {
    let sourse = elSource;
    // const slider = document.querySelector('.slider');
    sliderTest.insertAdjacentHTML('afterbegin', `
    <div class="item">
        <img src="${sourse}">
    </div>
    `)
}

const menButton = document.getElementById('men');
const childButton = document.getElementById('childs');
const womanButton = document.getElementById('women');


menButton.addEventListener('click', () => {
    sliderTest.innerHTML = ''
    for(i=0; i < sliderElem['men'].length; i++) {
        createSlideElem(sliderElem['men'][i]['sourse'])
    }
    showSlides(slideIndex);

})

childButton.addEventListener('click', () => {
    sliderTest.innerHTML = ''
    for(i=0; i < sliderElem['childs'].length; i++) {
        createSlideElem(sliderElem['childs'][i]['sourse'])
    }
    showSlides(slideIndex);

})

womanButton.addEventListener('click', () => {
    sliderTest.innerHTML = ''
    for(i=0; i < sliderElem['women'].length; i++) {
        createSlideElem(sliderElem['women'][i]['sourse'])
    }
    showSlides(slideIndex);

})






/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

