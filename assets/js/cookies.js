const createCookie = (name, value, hours) => {
    let expires;

    if (hours) {
            const date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
    } else {
            expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
};

const checkCookie = (name) => {
    const targetName = encodeURIComponent(name) + "=";
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        if (cookie.substring(0, targetName.length) === targetName) {
            return decodeURIComponent(cookie.substring(targetName.length, cookie.length));
        }
    }
    return null;
};