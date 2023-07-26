let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png")
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png")
  }
}

// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world!"

// let myVariant = "李雷"
// myVariant = "韩梅梅"

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("我最喜欢巧克力冰激凌了.");
// } else {
//   alert("但是巧克力按此是我的最爱呀……")
// }

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result
// }
// multiply(4,7)
// multiply(20,20)
// multiply(0.5,3)

// document.querySelector("html").addEventListener("click", function() {
//   alert("别戳, 怕疼?")
// });
