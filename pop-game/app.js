let main = document.getElementById("main");
let rand = Math.floor(Math.random() * 55);
let counter = 0;
for (let i = 0; i < 55; i++) {
  if (i === rand) {
    main.innerHTML += `<div class="try" onmouseover="pop(this,true)"><div/>`;
  } else {
    main.innerHTML += `<div class="try" onmouseover="pop(this,false)"><div/>`;
  }
}

const pop = (e, flag) => {
  e.style.backgroundColor = "white";
  e.innerHTML = "POP";
  if (flag) {
    alert("You Won!");
    location.reload();
  } else if (counter === 10) {
    alert("You Lost!");
    location.reload();
  }
  counter++;
};
