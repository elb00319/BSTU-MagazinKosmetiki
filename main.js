(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', ()=> {
        menu.classList.remove('header_nav_active');
    });
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', ()=> {
                menu.classList.remove('header_nav_active');
            });
        }
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


function calc() {
        //ссылка на элемент Select (Тип услуги)
        var type_services = document.getElementById("type_services");
        //ссылка на чекбокс (Требуется верстка?)
        var is_html = document.getElementById("is_html");
        //ссылка на элемент input (Кол-во вариантов)
        var count = document.getElementById("count");
        //ссылка на элемент span, в него пишем стоимость
        var result = document.getElementById("result");
        var price = 0;
        price += parseInt(type_services.options[type_services.selectedIndex].value);
        price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
        price = parseInt(count.value) * price;
        result.innerHTML = price;
}

