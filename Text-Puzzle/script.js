//**********************************************************************************
// written by Ben Jones
//
// Student idea container, students use tehir HTML, CSS & JS skills to turn this into a word puzzle game.
//
// Written 23/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************

let x = document.getElementById("playerWin");
let once = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");



function gameLoop(playerClicked) {
    if (once == 1) {
        once.style.display = "block";
    }
    x.style.display = "block";
    x.style.fontStyle = "italic";
}






