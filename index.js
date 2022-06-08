const buttonOpen = document.querySelectorAll("button");
const answer = document.querySelectorAll(".answer");
const imgArrow = document.querySelectorAll(".img");
const boldText = document.querySelectorAll(".boldText");

let x;

function openClose(event) {
    if (x == 1) {
        answer[event].classList.add("answer");
        imgArrow[event].classList.remove("imgArrow");
        boldText[event].classList.remove("bold");
        return (x = 0);
    } else {
        answer[event].classList.remove("answer");
        imgArrow[event].classList.add("imgArrow");
        boldText[event].classList.add("bold");
        return (x = 1);
    }
}

for (let i = 0; i < buttonOpen.length; i++) {
    buttonOpen[i].addEventListener("click", function() {
        openClose(i);
    });
}

/* Credit to agam95 - on github for the JS code! */