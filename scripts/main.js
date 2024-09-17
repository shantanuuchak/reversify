// DOM Selection
const inputEl = document.querySelector("[data-input-string]");
const copyBtnEl = document.querySelector("[data-btn-copy]");
const chipEl = document.querySelector(".chip");
const toggleEl = document.querySelector("[data-toggle-theme]");
const themeImgEl = document.querySelector(".theme-img");

// app variables
let theme = "light";

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

  // checking for blank
  if (currInput === "") return;

  //   caluculate reverse
  const reverseInput = reverse(currInput);
  // change the input to reverse
  inputEl.value = reverseInput;

  // set clipboard to reverse && show chip
  try {
    await navigator.clipboard.writeText(reverseInput);
    chipEl.classList.add("animate");
    setTimeout(() => {
      chipEl.classList.remove("animate");
    }, 2000);
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

// toggle dark/light mode
toggleEl.addEventListener("click", (e) => {
  const themeData = {
    dark: "/img/partly-cloudy-day.png",
    light: "/img/partly-cloudy-night.png",
  };

  // calculate next theme
  theme = theme === "light" ? "dark" : "light";
  themeImgEl.src = themeData[theme];

  console.log("theme changed: ", theme);
});

console.log("site loaded, theme: ", theme);
