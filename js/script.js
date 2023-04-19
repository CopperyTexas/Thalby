const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.body.classList.add("_touch");
} else {
    document.body.classList.add("_pc");
}
const headerBurger = document.querySelector('.header_burger')
if (headerBurger) {
    const headerList = document.querySelector('.header_list');
    headerBurger.addEventListener("click", function (e) {
        headerBurger.classList.toggle('_active');
        headerList.classList.toggle('_active');
    });
}


const headerHamburger = document.querySelector('.header_hamburger')
if (headerHamburger) {
    const headerLogoList = document.querySelector('.header_logo_list');
    headerHamburger.addEventListener("click", function (e) {
        headerHamburger.classList.toggle('_active_burger');
        headerLogoList.classList.toggle('_active_burger');
    });
}