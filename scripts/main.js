// DOM Selection
const inputEl = document.querySelector("[data-input-string]");
const copyBtnEl = document.querySelector("[data-btn-copy]");

function reverse(string) {
  // convert to array
  const strArr = string.split("");
  // reverse the array
  strArr.reverse();
  // convert reverse array back to string
  const revStr = strArr.join("");

  return revStr;
}

async function handleReverse() {
  // get current input
  const currInput = inputEl.value;
  //   caluculate reverse
  const reverseInput = reverse(currInput);
  // change the input to reverse
  inputEl.value = reverseInput;

  // set clipboard to reverse
  try {
    await navigator.clipboard.writeText(reverseInput);
  } catch (err) {
    console.error("Exception occured:", err);
  }
}

// listening on btn click
copyBtnEl.addEventListener("click", handleReverse);

// listening on keyboard enter
inputEl.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) handleReverse();
});
