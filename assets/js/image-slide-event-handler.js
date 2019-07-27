function setSlideCategory(category) {
    const slide = document.querySelector('.ImageSlide');
    const container = slide.querySelector('.category__container');

    const list = slide.querySelector('.image__list');
    const pActive = list.querySelector('.active');
    const nActive = list.querySelectorAll('.' + category)[0];

    container.querySelector('.active').classList.remove('active');
    container.querySelector('.' + category).classList.add('active');

    pActive.classList.remove('active');
    nActive.classList.add('active');
}

setInterval(() => {
    const slide = document.querySelector(".ImageSlide");
    const list = slide.querySelector('.image__list');

    const el = list.querySelector('.active');
    const next = (el.nextElementSibling == null) ? list.children[0] : el.nextElementSibling;

    el.classList.remove('active');

    const category = next.classList[0];

    next.classList.add('active');

    const container = slide.querySelector('.category__container');

    container.querySelector('.active').classList.remove('active');
    container.querySelector('.' + category).classList.add('active');
}, 5000);