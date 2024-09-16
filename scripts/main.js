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

function handleClick() {
  const currInput = inputEl.value;
  const reverseInput = reverse(currInput);
  inputEl.value = reverseInput;
}

// listening on btn click
copyBtnEl.addEventListener("click", handleClick);
