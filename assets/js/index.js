let tictactoe = [
  ["c", "v", "z"],
  ["x", "c", "w"],
  ["m", "l", "p"],
];

let turnCounter = 0;
let noWinnerCounter = 0;

const clickHandler = (boxName) => {
  noWinnerCounter++;
  const setOX = (value) => {
    if (boxName === "box1") {
      tictactoe[0][0] = value;
    } else if (boxName === "box2") {
      tictactoe[0][1] = value;
    } else if (boxName === "box3") {
      tictactoe[0][2] = value;
    } else if (boxName === "box4") {
      tictactoe[1][0] = value;
    } else if (boxName === "box5") {
      tictactoe[1][1] = value;
    } else if (boxName === "box6") {
      tictactoe[1][2] = value;
    } else if (boxName === "box7") {
      tictactoe[2][0] = value;
    } else if (boxName === "box8") {
      tictactoe[2][1] = value;
    } else if (boxName === "box9") {
      tictactoe[2][2] = value;
    }
  };

  if (!turnCounter) {
    document.getElementById(boxName).innerHTML = "X";
    turnCounter = !turnCounter;
    setOX("X");
    winCondition("X");
    document.getElementById(boxName).removeAttribute("onclick");
  } else {
    document.getElementById(boxName).innerHTML = "O";
    turnCounter = !turnCounter;
    setOX("O");
    winCondition("O");
    console.log(tictactoe);
    document.getElementById(boxName).removeAttribute("onclick");
  }
};
const noClickAfterWin = () => {
  console.log("here");
  const boxes = document.querySelectorAll("div");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute("onclick");
  }
};
const winCondition = (element) => {
  const messageElement = document.querySelector("p");
  if (
    tictactoe[0][0] === tictactoe[0][1] &&
    tictactoe[0][1] == tictactoe[0][2]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[1][0] === tictactoe[1][1] &&
    tictactoe[1][1] == tictactoe[1][2]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[2][0] === tictactoe[2][1] &&
    tictactoe[2][1] == tictactoe[2][2]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[0][0] === tictactoe[1][0] &&
    tictactoe[1][0] == tictactoe[2][0]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[0][1] === tictactoe[1][1] &&
    tictactoe[1][1] == tictactoe[2][1]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[0][2] === tictactoe[1][2] &&
    tictactoe[1][2] == tictactoe[2][2]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[0][0] === tictactoe[1][1] &&
    tictactoe[1][1] == tictactoe[2][2]
  ) {
    messageElement.innerHTML = `${element} is the winner <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (
    tictactoe[0][2] === tictactoe[1][1] &&
    tictactoe[1][1] == tictactoe[2][0]
  ) {
    messageElement.innerHTML = `${element} is the winner. <button onclick="restart()">Restart</button>`;
    noClickAfterWin();
  } else if (noWinnerCounter === 9) {
    messageElement.innerHTML = `Its a draw. <button onclick="restart()">Restart</button>`;
  }
};

const restart = () => {
  window.location.reload();
};
