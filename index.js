var randomNumber1 = 1 + Math.floor(6 * Math.random());

var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomNumber2 = 1 + Math.floor(6 * Math.random());

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins !!!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins !!!";
} else {
    document.querySelector("h1").innerHTML = "draw !!! ";
}