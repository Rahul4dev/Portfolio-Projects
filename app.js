const sections = document.querySelectorAll(".section");
const controlContainer = document.querySelector(".controls");
const controlBtns = document.querySelectorAll(".control");
const body = document.querySelector(".body");

function pageTransition() {
  // Button click => active class
  //   controlBtns.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       if (btn.classList.contains("active-btn")) {
  //         btn.classList.remove("active-btn");
  //       } else {
  //         btn.classList.add("active-btn");
  //       }
  //     });
  //   });

  // same using for loop
  for (let i = 0; i < controlBtns.length; i++) {
    controlBtns[i].addEventListener("click", function () {
      let btns = document.querySelectorAll(".active-btn");
      btns[0].className = btns[0].className.replace("active-btn", "");
      this.className += " active-btn"; // this keyword  doesn't work in arrow functions
    });
  }

  // section active with click
  body.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected section active class
      controlBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

pageTransition();

// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
