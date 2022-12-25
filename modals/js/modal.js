function _createModal(options) {
    const modalProduct = document.querySelector('.modal-product');
    modalProduct.insertAdjacentHTML('afterbegin', `
        <div class="modal__background"></div>
        <div class="modal__card">
            <img src="${elemImg}" alt="" class="modal__image">
            <div class="modal__subscribe">
                <div class="modal__title">
                    <h2>lorem</h2>
                </div>
                <div class="modal__subtitle">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, similique, labore qui fugiat tempore earum fugit esse repellendus eum maxime harum reiciendis officia. Facilis, natus praesentium atque officia ducimus recusandae?</h4>
                </div>
                <div class="modal__info">
                    <h4>Размерный ряд:</h4>
                    <p>&nbsp &nbsp &nbsp от 50 до 58</p>
                    <span class="modal__paragraph"></span> 
                </div>
                <div class="modal__info">
                    <h4>Состав:</h4>
                    <p>&nbsp &nbsp &nbsp 90% пух норки, 10% полиамид</p>
                    <span class="modal__paragraph"></span> 
                </div>
                <div class="modal__info">
                    <h4>Сезон:</h4>
                    <p>&nbsp &nbsp &nbsp демисезон/ зима</p>
                    <span class="modal__paragraph"></span> 
                </div>


                <!-- <p class="size-range">

                </p>
                <p class="compound"></p>
                <p class="season"></p>  -->
                <div class="modal__price">
                    <div class="modal__info">
                        <h4>Цена от:&nbsp &nbsp &nbsp</h4>
                        <h3> 2000</h3>
                        <p>&nbsp &nbsp &nbsp руб</p>
                        <span class="modal__paragraph"></span> 
                    </div>

                    <p>
                        <span class="modal__paragraph">Цена от:</span>
                        &nbsp &nbsp &nbsp &nbsp
                    </p> 
                    <div class="modal__button_order"> <a src="product.html#contacts">заказать</div>
                </div>

            </div>

        </div>

    `)
    return modalProduct
}

$.modal = function(options) {
    const $modalProduct = _createModal(options);
    let closeStatus = false;
    return {
        open() {
            if(!closeStatus) {
                $modalProduct.classList.add('open');
            }
        },
        close() {
            closeStatus = true;
            $modalProduct.classList.remove('open');
            closeStatus = false;
        },
        destroy() {},
    }
}




