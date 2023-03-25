const sections = document.querySelectorAll('.section');
const controlContainer = document.querySelector('.controls');
const controlBtns = document.querySelectorAll('.control');
const body = document.querySelector('.body');
const themeBtn = document.querySelector('.theme-btn');
/** Banner styles */
const bannerTextEl = document.getElementById('bannerText');
const text = 'I love FrontEnd and Designing';

let index = 1;
let speed = 300;

writeText();

themeBtn.addEventListener('click', (e) => {
  e.target.classList.toggle('active');
  let pageColor = document.body;
  pageColor.classList.toggle('light-mode');
});

function writeText() {
  bannerTextEl.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

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
    controlBtns[i].addEventListener('click', function () {
      let btns = document.querySelectorAll('.active-btn');
      btns[0].className = btns[0].className.replace('active-btn', '');
      this.className += ' active-btn'; // this keyword  doesn't work in arrow functions
    });
  }

  // section active with click
  body.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected section active class
      controlBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      // hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

pageTransition();
