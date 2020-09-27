let counterVariable = 0;

function counterPlus() {
  counterVariable++;
  let counterSelector = document.querySelector("body > div > h1 > span");
//   console.log(counterSelector);
  counterSelector.textContent = counterVariable;
}

//TABS array
let tabs = document.querySelector(".tabs").children;
let tabsArray = [...tabs];
// console.log(tabs);

//CONTENT array
let content = document.querySelectorAll(".content");
let contentArray = [...content];
// console.log(contentArray);

for (let index = 0; index < tabsArray.length; index++) {
  tabsArray[index].addEventListener("click", function (event) {
    //COUNTER control
    if (index == 1) {
      counterPlus();
    }

    //TABS control
    tabsArray.forEach((element) => {
      element.classList.remove("active");
    });
    tabsArray[index].classList.add("active");

    //CONTENT control
    contentArray.forEach((element) => {
      element.classList.remove("active");
    });
    contentArray[index].classList.add("active");
  });

  window.addEventListener("keydown", function (event) {
    if (event.key == index+1) {
      //COUNTER control
      if (index == 1) {
          counterPlus();
      }

      //TABS control
      tabsArray.forEach((element) => {
        element.classList.remove("active");
      });
      tabsArray[index].classList.add("active");

      //CONTENT control
      contentArray.forEach((element) => {
        element.classList.remove("active");
      });
      contentArray[index].classList.add("active");
    }
  });
}
