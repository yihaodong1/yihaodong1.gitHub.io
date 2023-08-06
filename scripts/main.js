let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName && !localStorage.getItem("name")) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }

let storedName = localStorage.getItem("name");
myHeading.textContent = "Mozilla 酷毙了，" + storedName;
myButton.onclick = function () {
    setUserName();
  };
    
