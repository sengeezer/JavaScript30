// NodeList to Array
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// only time
const seconds = timeNodes
  .map(node => node.dataset.time)
  // convert to seconds
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidsecs) => total + vidsecs);

// convert back to h:m:s
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, mins, secondsLeft);
