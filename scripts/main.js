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

function handleReverse() {
  const currInput = inputEl.value;
  const reverseInput = reverse(currInput);
  inputEl.value = reverseInput;
}

// listening on btn click
copyBtnEl.addEventListener("click", handleReverse);

// listening on keyboard enter
inputEl.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) handleReverse();
});
