const secondHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.min-hand'),
      hourHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date(),
        seconds = now.getSeconds(),
        // +90 offsets default set in CSS
        secondDeg = ((seconds/60) * 360) + 90,
        minutes = now.getMinutes(),
        minuteDeg = ((minutes/60) * 360) + 90,
        hours = now.getHours(),
        hourDeg = ((hours/12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);
