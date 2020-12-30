function dishDisplay(type){
    const mainDish = document.getElementById("display-dish-main");
    const sideDish = document.getElementById("display-dish-side");
    const dessertDish = document.getElementById("display-dish-dessert");

    if (type === 'main') {
        mainDish.classList.remove("none");
        sideDish.classList.add("none");
        dessertDish.classList.add("none");
    } else if (type === 'side') {
        mainDish.classList.add("none");
        sideDish.classList.remove("none");
        dessertDish.classList.add("none");
    } else if (type === 'dessert') {
        mainDish.classList.add("none");
        sideDish.classList.add("none");
        dessertDish.classList.remove("none");
    }
}