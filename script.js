let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let sciessor = document.querySelector(".sciessor");
let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
let heading = document.querySelector("h4");

// Addition of the Highlight of picture

rock.addEventListener("mousemove", () => {
  rock.style.outline = "4px solid black";
});
rock.addEventListener("mouseout", () => {
  rock.style.outline = "none";
});

paper.addEventListener("mousemove", () => {
  paper.style.outline = "4px solid black";
});
paper.addEventListener("mouseout", () => {
  paper.style.outline = "none";
});

sciessor.addEventListener("mousemove", () => {
  sciessor.style.outline = "4px solid black";
});
sciessor.addEventListener("mouseout", () => {
  sciessor.style.outline = "none";
});
// ..................................................

let computer;
let me;
let winner;
let you_winner = 0,
  comp_winner = 0,
  draw = 0;

rock.addEventListener("click", () => {
  console.log("I have clicked the Rock");
  computer = Math.floor(Math.random() * 3) + 1;

  me = 1;

  // console.log(me)
  // console.log(computer)
  // console.log(winner)

  if (computer == 1) {
    winner = 0;
    heading.innerText = "Its Draw";
    heading.style.backgroundColor = "gray";
  } else if (computer == 2) {
    winner = 2;
    heading.innerText = "Paper Wraps Rock, You Lose!";
    heading.style.backgroundColor = "red";
  } else if (computer == 3) {
    winner = 1;
    heading.innerText = "Rock Crushes Sciessor, You Win!";
    heading.style.backgroundColor = "green";
  }

  if (winner == 1) {
    you_winner++;
    you.innerHTML = you_winner;
  } else if (winner == 2) {
    comp_winner++;
    comp.innerHTML = comp_winner;
  } else {
    draw++;
  }
});

paper.addEventListener("click", () => {
  console.log("I have clicked the paper");
  computer = Math.floor(Math.random() * 3) + 1;

  me = 2;
  if (computer == 1) {
    winner = 1;
    heading.innerText = "Paper Wraps Rock, You Win!";
    heading.style.backgroundColor = "green";
  } else if (computer == 2) {
    winner = 0;
    heading.innerText = "Its Draw";
    heading.style.backgroundColor = "gray";
  } else if (computer == 3) {
    winner = 2;
    heading.innerText = "Scissors Cut Paper, You Lose!";
    heading.style.backgroundColor = "red";
  }

  if (winner == 1) {
    you_winner++;
    you.innerHTML = you_winner;
  } else if (winner == 2) {
    comp_winner++;
    comp.innerHTML = comp_winner;
  } else {
    draw++;
  }
});
sciessor.addEventListener("click", () => {
  console.log("I have clicked the sciessor");
  computer = Math.floor(Math.random() * 3) + 1;
  me = 3;

  if (computer == 1) {
    winner = 2;
    heading.innerText = "Rock Crushes Sciessor, You Lose!";
    heading.style.backgroundColor = "red";
  } else if (computer == 2) {
    winner = 1;
    heading.innerText = "Scissors Cut Paper, You Win!";
    heading.style.backgroundColor = "green";
  } else if (computer == 3) {
    winner = 0;
    heading.innerText = "Its Draw";
    heading.style.backgroundColor = "gray";
  }

  if (winner == 1) {
    you_winner++;
    you.innerHTML = you_winner;
  } else if (winner == 2) {
    comp_winner++;
    comp.innerHTML = comp_winner;
  } else {
    draw++;
  }
});
