
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonSound = this.innerHTML;

    makeSound(buttonSound);

    makeAnimation(buttonSound);

  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);

  makeAnimation(key.event);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play();
        break;

      case "j" :
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;

      case "k":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "l":
        var snare = new Audio("sounds/snare.mp3") ;
        snare.play();

    default: console.log(buttonSound);

  }
}

function makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);

}
