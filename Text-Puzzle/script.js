//**********************************************************************************
// written by Amber Dong
//
// Student idea container, students use tehir HTML, CSS & JS skills to turn this into a word puzzle game.
//
// Written 23/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE https://github.com/TempeHS/2024SDD-WebJs-AmberDong/blob/fb1d897f51b9de5b0797d82d4c2b56dc4a1a1059/LICENSE
//**********************************************************************************

let x = document.getElementById("playerWin");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let numberCounter = 0;



function gameLoop(playerClicked) {
    if (numberCounter == 0 && playerClicked == 'once') {
        numberCounter = numberCounter + 1;
        one.style.fontWeight = 700;
        one.style.color = "red";
    } else {
        if (numberCounter == 1 && playerClicked == 'two') {
            numberCounter = numberCounter + 1;
            two.style.fontWeight = 700;
            two.style.color = "red";
        } else {
            if (numberCounter == 2 && playerClicked == 'three') {
                three.style.fontWeight = 700;
                three.style.color = "red";
                x.style.display = "block";
                x.style.fontStyle = "italic";
            }
        }
    }
}
