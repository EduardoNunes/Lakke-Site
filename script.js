$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 3000000
    });


const controls = document.querySelectorAll('.arrow-control');
let currentItem = 0;
let items = document.querySelectorAll('.item');
let items2 = document.querySelectorAll('.item2');
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        
        if (isLeft) {
            currentItem -= 1;                     
        }else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }        

        items.forEach(item => item.classList.remove('current-item'));
        items2.forEach(item2 => item2.classList.remove('current-item2'));

        items[currentItem].scrollIntoView({
            behavior: "center",
            inline: "start",
            block: "nearest",
            behavior: "smooth",
        });

        items2[currentItem].scrollIntoView({
            behavior: "center",
            inline: "start",
            block: "nearest",
            behavior: "smooth",
        });
        
        items[currentItem].classList.add("current-item");
        items2[currentItem].classList.add("current-item2");  
    });
});

