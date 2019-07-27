const items = document.getElementsByClassName("Accordion__header");

[].forEach.call(items, item => {
    item.addEventListener('click', function (e) {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
        const indicator = item.querySelectorAll('.Accordion__header > .Accordion__button')[0];
        indicator.classList.toggle('active');
        indicator.innerHTML === '+' ?
            indicator.innerHTML = '&minus;':
            indicator.innerHTML = '&plus;';
    });
});
