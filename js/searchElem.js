
const inStock = document.getElementById('inStock');
console.log(inStock);

inStock.addEventListener('click', (event)=> {
    console.log('WORK inStock')
    console.log(event)

    alert('В этом разделе будут раземещаться изделия, которые еще не нашли своего хозяина.\n Пока он пуст, така как таких вещей пока нет')
})



