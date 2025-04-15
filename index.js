for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}


document.addEventListener("keydown", function (event) {
  makeSound(event.key.toUpperCase()); 
});


function makeSound(key) {
  switch (key) {
    case "W":
      new Audio("sounds/crash.mp3").play();
      break;
    case "A":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "S":
      new Audio("sounds/snare.mp3").play();
      break;
    case "D":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "J":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "K":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "L":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log("Unrecognized key:", key);
  }
}