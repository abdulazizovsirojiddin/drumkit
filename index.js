const drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    const clickText = drum.textContent;
     played(clickText);
    
  });
});
document.addEventListener("keydown", (e) =>{
    const pressedText = e.key;
    played(pressedText);
    animation(pressedText);
});

function played (text){
switch (text) {
  case "w":
    const crash = new Audio("./sounds/crash.mp3");
    crash.play();
    break;
  case "a":
    const kickBass = new Audio("./sounds/kick-bass.mp3");
    kickBass.play();
    break;
  case "s":
    const snare = new Audio("./sounds/snare.mp3");
    snare.play();
    break;
  case "d":
    const tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();
    break;
  case "j":
    const tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();
  case "k":
    const tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();
  case "l":
    day = "Saturday";
    const tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();
}


}
function animation(text) {
  const button = document.querySelector(`.${text}`);
  button.classList.add("pressed");
  document.body.style.backgroundColor = "rgb(87, 84, 84)";
  setTimeout(() => {
    button.classList.remove("pressed");
     document.body.style.backgroundColor = "black";
  }, 100);
}
