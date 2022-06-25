const leftBtn = document.querySelector("#left");
const rigthBtn = document.querySelector("#right");
const item = document.querySelector("#items");
const computedStyles = getComputedStyle(item);


rigthBtn.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight < 500) {
        items.style.right = `${currentRight + 100}px`;
    }
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
        items.style.right = `${currentRight - 100}px`;
    }
});