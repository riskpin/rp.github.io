// change navigation list to button
const listToButton = () => {
    // const icon = document.getElementById('responsiveNavIcon');
    const version = document.getElementById('js-navigationTop');
    // const right = document.getElementById('navigationTop');

    // icon.classList.toggle('js-responsive-active');
    version.classList.toggle('js-responsive-active');
    // right.classList.toggle('active');
};
document.getElementById('responsiveNavIcon').addEventListener('click', listToButton);

// respond to media query
const responsiveSpot = window.matchMedia('(max-width: 800px)');

// change icon and list
const changeNav = () => {
    const version = document.getElementById('js-navigationTop');
    const dataAnnoDropbutton = document.getElementsByClassName('dropdown-button_Nav');

    if (responsiveSpot.matches === true) {
        version.classList.add('js-responsive');
        [].forEach.call(version.childNodes, link => {
            if (link.classList !== undefined) {
                // link.classList.remove('navigation__text');
            }
        });

        dataAnnoDropbutton.href = 'javascript: void(0)';

    } else {
        version.classList.remove('js-responsive');
        [].forEach.call(version.childNodes, link => {
            if (link.classList !== undefined) {
                // link.classList.add('navigation__text');
            }
        });

        // <Temporary hot fix -- need to disable navbar link on "products" button; 1/13/18>
        //        dataAnnoDropbutton.href = 'data-annotation.html';
    }
};

changeNav();
responsiveSpot.addListener(changeNav);
