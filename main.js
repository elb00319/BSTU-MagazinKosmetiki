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


const seasons = {
    winter: [
      'https://www.artdiva.pro/image/cache/data/darsonval-700x700.jpg',
      'https://sc04.alicdn.com/kf/Hd9c78b6e66b54ecc9c51df3bf0d54a3b9.jpg',
      'https://sc01.alicdn.com/kf/HTB1VJQSXzzuK1RjSspeq6ziHVXaH/234854537/HTB1VJQSXzzuK1RjSspeq6ziHVXaH.jpg'
    ],
    spring: [
      'https://sc04.alicdn.com/kf/H352e4b2c99f348c3b6b0018606c993aeC.jpg',
'https://da.by/upload/iblock/a09/d75927fc747a3abb47deda2ce1d2a5db.jpg',
'https://beurer-belarus.by/upload/Sh/imageCache/a8f/32d/76fd1732c62d24a64cd9e7ee38ade6ef.jpg'
    ],
    summer: [
'https://sc04.alicdn.com/kf/H8647594827564015aa0d9955fc1a6354M.jpg',
'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/132497/3_132497.jpg',
'https://cbu01.alicdn.com/img/ibank/2020/744/241/14653142447_1260485008.jpg'
    ],
    autumn: [
      'https://tehnoteca.ru/img/1219/1218440/ga_ma_trp_5_1.jpg',
      'https://avatars.mds.yandex.net/get-mpic/6269810/img_id458422374024974506.jpeg/orig',
      'https://avatars.mds.yandex.net/i?id=170f2edf1a0d0d0e82686a53e94bf9fc474b7442-8567811-images-thumbs&n=13'
    ],
  }
  
  
  function changeImage (event) {
    const season = event.target.dataset.season;
    const seasonImages = document.querySelector('.photo__image').children;
    Array.from(seasonImages).forEach((image, index) => image.src = seasons[season][index]);
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.photo__buttons').children;
    Array.from(buttons).forEach(button => {
      if (button.dataset.season == season) {
        button.classList.add('button_color');
      } else {
        button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.photo__buttons').addEventListener('click', buttonClick);

