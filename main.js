
window.onload = function () {

    let number = document.getElementsByTagName("h1");

    newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    let newContent = Math.floor(Math.random() * newNumber.length);
    number[0].innerHTML = newNumber[newContent];

    let hearts = document.getElementById("heart1");

    randomClass = ["fa-heart", "fa-spade", "fa-club", "fa-diamond"];

    let randomNum = Math.floor(Math.random() * randomClass.length);
   
    hearts.classList.remove("fa-heart");
    hearts.classList.add(randomClass[randomNum]);
}