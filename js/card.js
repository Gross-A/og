// const { resolve } = require("path");

 const womenImageSourse = "assets/images/store/women/"; //переменная описывающая путь к поддиректориям с фото шапок из разделf женщины
 const childImageSourse = "assets/images/store/child/"; //переменная описывающая путь к поддиректориям с фото шапок из разделf женщины
 const manImageSourse = "assets/images/store/men/"; //переменная описывающая путь к поддиректориям с фото шапок из разделf женщины

 const products = { 
    // "products": {
        "women": [
                {
                    "id": "1",
                    "name": "Капор",
                    "image": "image_1.png",
                    "card-text": "головной убор в виде капюшона (возможен вариант с округлой макушкой или с классическим прямым углом",
                    "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                    "size range": "от 50 до 58",
                    "consist": "90% пух норки, 10% полиамид",
                    "season": "демисезон/ зима",
                    "price": "3500"
                },
                {
                    "id": "2",
                    "name": "Ушанка",
                    "image": "image_2.jpg",
                    "card-text": "Зимний теплый вариант шапки с 'ушками' (может быть с завязками или без них)",
                    "card-text full": "пдлофвадфоафдоаф",
                    "size range": "от 50 до 58",
                    "consist": "90% пух норки, 10% полиамид",
                    "season": "демисезон/ зима",
                    "price": "4000"
                },
                {
                    "id": "3",
                    "name": "Повязка",
                    "image": "image_3.jpg",
                    "card-text": "стильная вязанная повязка",
                    "card-text full": "пдлофвадфоафдоаф",
                    "size range": "от 50 до 58",
                    "consist": "100% меринос/ 90% пух норки, 10% полиамид",
                    "season": "демисезон/ зима",
                    "price": "4000"
                },
                {
                    "id": "4",
                    "name": "Шапка - луковка",
                    "image": "image_4.jpg",
                    "card-text": "Модель шапки с вытянутой в виде спирали макушкой (с отворотом и без него)",
                    "card-text full": "пдлофвадфоафдоаф",
                    "size range": "от 50 до 58",
                    "consist": "100% меринос",
                    "season": "демисезон/ зима",
                    "price": "4000"
                },
                {
                    "id": "5",
                    "name": "Шапка - тыковка",
                    "image": "image_5.jpg",
                    "card-text": "модель шапки со стянутой макушкой (с отворотом или без него)",
                    "card-text full": "пдлофвадфоафдоаф",
                    "size range": "от 50 до 58",
                    "consist": "100% меринос",
                    "season": "демисезон/ зима",

                    "price": "4000"
                },
                {
                    "id": "6",
                    "name": "Шапка - бини",
                    "image": "image_6.jpg",
                    "card-text": "описание бини ",
                    "card-text full": "пдлофвадфоафдоаф",
                    "size range": "от 50 до 58",
                    "consist": "100% меринос/ 90% пух норки, 10% полиамид",
                    "season": "демисезон/ зима",
                    "price": "4000"
                },
            ],
        "man": [
            {
                "id": "1",
                "name": "Шапка - бини",
                "image": "image_1.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
        ],
        "child": [
            {
                "id": "1",
                "name": "Шапка - эльф'",
                "image": "image_1.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "2",
                "name": "Шапка - мишка",
                "image": "image_1.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "3",
                "name": "Анатомическая шапка",
                "image": "image_3.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "4",
                "name": "Луковка на завязках",
                "image": "image_4.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "5",
                "name": "Горошковая шапка",
                "image": "image_5.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "6",
                "name": "Ушанка",
                "image": "image_6.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "7",
                "name": "Шапочка для новорожденных",
                "image": "image_7.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "8",
                "name": "Носочки",
                "image": "image_8.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "9",
                "name": "Пинетки",
                "image": "image_1.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "10",
                "name": "Варежки",
                "image": "image_10.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "11",
                "name": "Шарф",
                "image": "image_11.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "12",
                "name": "Снуд",
                "image": "image_12.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "13",
                "name": "Боди",
                "image": "image_13.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "14",
                "name": "Кардиган",
                "image": "image_14.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "15",
                "name": "Комбинезон",
                "image": "image_15.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
            {
                "id": "16",
                "name": "Свитер",
                "image": "image_16.jpg",
                "card-text": "тралялялялялялялялялялялялял",
                "card-text full": "ghjsdfjlasjfa;ljlajfd;lsfj;lajdf",
                "price": "3500"
            },
        ]
        }


const womenButton = document.querySelector('.women');
const childButton = document.querySelector('.child');
const productsCards = document.querySelector('.products__cards');
// const productsMenu = document.querySelector('.products__menu');
// при событии клик проверяется условие: если эллемент, на котором произошел клик имеет класс .women, то проходимся по
// переменной products по массиву women и для каждого элемента массива запускаем функцию создания карточки товара
// закомментировал 11.11.2022

// => новый вариант йункции создания поля карточек
function createFieldOfCards(e) { // e - это событие клик
    let count = 0;
    let chapterName = e.target.classList.value;
    switch (chapterName) {
        case "women":
        case "man":
        case "child":
            count = products[chapterName].length - 1;
            document.querySelector('.products__cards').innerHTML = "";  
            console.log(count);
            for (let i=0; i <= count; i++) {
                createCard(products, chapterName, i);
            }
            break;

    }
}
// productsMenu.addEventListener('click',(event) => {
//     createFieldOfCards(event)
// });







// функция создания карточки. в параметры передается: название переменной с объектами, 
// название нужного ключа - названия класса массива объектов (который определился в addEventListener) и номер элемента в массиве
function createCard (nameClass, element, i) {
    const card = document.createElement('div');
    productsCards.appendChild(card);
    card.id = `${element} ${nameClass[element][i]["id"]}`;
    const cardImg = document.createElement('img');
    card.appendChild(cardImg);
    cardImg.src = `${womenImageSourse + nameClass[element][i]["image"]}`
    const cardInfo = document.createElement('div');
    card.appendChild(cardInfo);

    const cardTitle = document.createElement('div');
    cardInfo.appendChild(cardTitle);
    cardTitle.innerHTML = `<h3> ${nameClass[element][i]["name"]} </h3>`

    const cardSubtitle = document.createElement('div');
    cardInfo.appendChild(cardSubtitle);
    cardSubtitle.innerHTML = `<h5> ${nameClass[element][i]["card-text"]} </h5>`

    const cardPrice = document.createElement('div');
    cardInfo.appendChild(cardPrice);

    const priceTitle = document.createElement('p');
    priceTitle.innerHTML = "Цена от:  ";

    cardPrice.appendChild(priceTitle);
    const priceValue = document.createElement('p');
    cardPrice.appendChild(priceValue);
    priceValue.innerHTML = `<h5> ${nameClass[element][i]["price"]} </h5>`;


    const priceCurrency = document.createElement('p');
    cardPrice.appendChild(priceCurrency);
    priceCurrency.innerHTML = "   рубл.";


    card.classList.add('product-card');
    cardImg.classList.add('product-image');
    cardInfo.classList.add('card__info');
    cardTitle.classList.add('card__title');
    cardSubtitle.classList.add('card__subtitle');
    cardPrice.classList.add('card__price');
    priceTitle.classList.add('price__title');
    priceValue.classList.add('price__value');
    priceCurrency.classList.add('price__currency');
    // productCard = document.querySelectorAll('.product-card');//12.12.22
    // console.log(productCard);
}




