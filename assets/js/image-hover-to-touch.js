const image = document.getElementsByClassName('imagehandle--sub');

const hoverToTouchStart = () => [].forEach.call(image, image => {

    let touched = 0;

    image.addEventListener('touchstart', () => {

        if (touched === 0) {
            image.style.opacity = '0';
            touched = 1;
            console.log(touched);

        } else if (touched === 1) {
            image.style.opacity = '1';
            touched = 0;
            console.log(touched);
        }
    });
});

hoverToTouchStart();