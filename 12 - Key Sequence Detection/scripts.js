const pressed = [];
const secretCode = 'omgwtfbbqmybffjill';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  // constantly expunges extraneous characters
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('result!');
    cornify_add();
  }
});
