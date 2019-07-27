const navigation = document.getElementsByClassName('Navigation__container')[0];
const dashboardLink = document.getElementById('dashboardLink');

if (window.scrollY > 20) {
    navigation.style.backgroundColor = "rgba(255, 255, 255, 1)";
}

window.addEventListener('scroll', function (e) {
    e.preventDefault();
    if (window.scrollY > 20) {
        navigation.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
        navigation.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
});

if (window.location.pathname === '/') {
    if (window.scrollY <= 20) {
        dashboardLink.style.color = "#fff";
    }
    window.addEventListener('scroll', function (e) {
        e.preventDefault();
        if (window.scrollY <= 20) {
            dashboardLink.style.color = "#fff";
        } else {
            dashboardLink.style.color = "#963524";
        }
    });
}