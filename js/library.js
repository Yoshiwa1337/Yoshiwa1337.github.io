
//images
let images = document.querySelectorAll('img');
//wrapper
let wrapper = document.getElementById('wrapper');
//imgWrapper
let imgWrapper = document.getElementById('fullImg');
//close
let close = document.querySelector('span');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openModal(`img/img${index}.jpg`);
    })
});

close.addEventListener('click', () => (wrapper.style.display = 'none'));

function openModal(pic){
    wrapper.style.display = 'flex'
    imgWrapper.src = pic
}