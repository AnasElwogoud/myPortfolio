let progNumber = document.querySelectorAll("#number");
let counter = 0;
setInterval(() => {
  for (let i = 0; i <= progNumber.length; i++) {
    if (counter == 81) {
      clearInterval;
    } else {
      counter += i;
      progNumber[i].innerHTML = `${counter}%`;
    }
  }
}, 180);

let typed = new Typed(".typing", {
  strings: ["Frontend Developer", "Web Designer", "Testo", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

let nav = document.querySelector("nav");
let navList = nav.querySelectorAll("li");
let totalNavList = navList.length;
allSection = document.querySelectorAll("section");
totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  let navLinks = navList[i].querySelector("a");
  navLinks.addEventListener("click", () => {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    navLinks.classList.add("active");
    showSection(navLinks);
  });
}
let showSection = (el) => {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
    allSection[i].classList.add("hidden");
  }
  let target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
  document.querySelector("#" + target).classList.toggle("hidden");
};
let updateNav = (el) => {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    let target = el.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
};

const hire = document.querySelectorAll(".jsLink");
for (let i = 0; hire.length; i++) {
  hire[i].addEventListener("click", () => {
    showSection(hire[i]);
    updateNav(hire[i]);
  });
}
