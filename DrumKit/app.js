document.addEventListener("keydowns", (e) => {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; // do nothing if its not a transform
  } else {
    this.classList.remove("playing");
  }
}
