const leftBtn = document.querySelector("#left");
const rigthBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");
const slider = document.querySelector(".slider");


const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const sliderWidth = getComputedStyle(slider).width;
const preShownItem = parseInt(sliderWidth) / step;
const maxRight = (items.length - preShownItem) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
})

left.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight)    {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`
    }
    
})