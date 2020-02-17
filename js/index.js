// Your code goes here

//Bus pic event
const busPic = document.querySelector(".intro img");
// console.log(busPic);
busPic.addEventListener("mouseenter", () => {
  busPic.style.transform = "scale(1.1)";
  busPic.style.transition = "all 0.3s";
});
busPic.addEventListener("mouseleave", () => {
  busPic.style.transform = "scale(1)";
});

const headlineSwap = document.querySelectorAll("h2");
headlineSwap.forEach(title => {
  title.addEventListener("mouseenter", () => {
    title.textContent = "Psych!";
  });
});

//Logo color event
const title = document.querySelector(".logo-heading");
// console.log(title);
title.addEventListener("click", () => {
  if (title.style.color === "blue") {
    title.style.color = "black";
  } else {
    title.style.color = "blue";
  }
});

//p background color event
const parChange = document.querySelectorAll("p");
// console.log(parChange);
parChange.forEach(par => {
  par.addEventListener("dblclick", () => {
    if (par.style.backgroundColor === "yellow") {
      par.style.backgroundColor = "blue";
    } else {
      par.style.backgroundColor = "yellow";
    }
    e.stopPropagation();
  });
});

//return <p> bg to white
const pReset = document.querySelectorAll("p");
pReset.forEach(par => {
  par.addEventListener("keydown", () => {
    par.style.backgroundColor = "white";
  });
});

//stop nav refresh
const stopRefresh = document.querySelector(".nav a");
stopRefresh.addEventListener("click", e => {
  e.preventDefault();
});
