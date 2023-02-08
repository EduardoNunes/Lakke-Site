$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
    });

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
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

        items[currentItem].scrollIntoView({
            behavior: "center",
            block: "nearest",
            behavior: "smooth",
        });    
        
        items[currentItem].classList.add("current-item");        
    });
});

