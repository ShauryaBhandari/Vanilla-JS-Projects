const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);

  // do for minutes hand
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // hour hand
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  if (seconds % 2 === 0) {
    addanim();
    removeanim2();
  } else {
    addanim2();
    removeanim();
  }
}

setInterval(setDate, 1000);

function addanim() {
  // add animation
  const anim1 = document.getElementById(1);
  anim1.classList.add("anim");
}
// setInterval(addanim, 1000);

function removeanim() {
  const anim1 = document.getElementById(1);
  anim1.classList.remove("anim");
}
// setInterval(removeanim, 2000);

function addanim2() {
  const anim2 = document.getElementById(2);
  anim2.classList.add("anim");
}
// setInterval(addanim2, 1000);

function removeanim2() {
  const anim2 = document.getElementById(2);
  anim2.classList.remove("anim");
}
// setInterval(removeanim2, 2000);
