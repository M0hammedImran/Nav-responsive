const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const link1 = document.querySelector('.link1');
    const link2 = document.querySelector('.link2');
    const link3 = document.querySelector('.link3');
    const link4 = document.querySelector('.link4');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-visual');
        link1.classList.toggle('link-visual');
        link2.classList.toggle('link-visual');
        link3.classList.toggle('link-visual');
        link4.classList.toggle('link-visual');
        burger.classList.toggle('toggle');
    });



}
(() => {
    navSlide();
})();