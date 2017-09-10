const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// How far should the shadow go (in px)?
const walk = 100;

function shadow(e) {
  // destructuring shortcut
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // e.target == what the event was triggered on, not what it is listening on
  // fix for inside / outside h1 discrepancies
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xwalk = Math.round((x / width * walk) - (walk / 2));
  const ywalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
                          ${xwalk * -1}px ${ywalk * -1}px 0 rgba(0,255,255,0.7)`;

}

hero.addEventListener('mousemove', shadow);
