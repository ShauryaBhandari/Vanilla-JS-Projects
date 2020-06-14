const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  // check for shift key down
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over all checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  } else {
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
