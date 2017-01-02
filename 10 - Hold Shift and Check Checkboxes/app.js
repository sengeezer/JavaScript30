//let firstSel = 0;
let lastSel = 0;

const checkboxes = document.querySelectorAll('input[type=checkbox]');

function registerClick(e) {
  let inbetw = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(chb => {
      if(chb === this || chb === lastSel) {
        inbetw = !inbetw;
      }

      if (inbetw) {
        chb.checked = true;
      }
    });
  }

  lastSel = this;
}

//console.table(checkboxes);
checkboxes.forEach(chb => chb.addEventListener('click', registerClick));
