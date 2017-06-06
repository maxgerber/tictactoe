window.addEventListener("DOMContentLoaded", function() {

  var ticTT = ["", "", "", "", "", "", "", "", ""],
      emptyCells = [],
      td = document.getElementsByTagName("td"),
      human = "",
      computer = "",
      computerCell,
      humansTurn = true,
      emptyLength = 0,
      randomNumber = 0,
      humanScore = 0,
      computerScore = 0,
      lastWinner = "",
      el = document.getElementById("letterform"),
      el2 = document.getElementById("tictactoe"),
      el3 = document.getElementById("x"),
      el4 = document.getElementById("choose-letter"),
      el5 = document.getElementById("o"),
      el6 = document.getElementById("submit"),
      el7 = document.getElementById("human"),
      el8 = document.getElementById("human-score"),
      el9 = document.getElementById("computer"),
      el10 = document.getElementById("computer-score"),
      el11 = document.getElementById("noughts"),
      el12 = document.getElementById("crosses"),
      el13 = document.getElementById("gameover"),
      el14 = document.getElementById("y"),
      el15 = document.getElementById("n"),
      el16 = document.getElementById("thanks"),
      el17 = document.getElementById("body"),
      els = document.getElementsByTagName("td"),
      els2 = document.getElementsByClassName("scoreboard");


  function dissolveForm() {
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    el.className += " left-to-right";
    el.style.left = "200%";
    el2.style.visibility = "visible";
    el6.style.color = "white";
    showScoreBoard();
  }

  function showNewGameForm() {
    el13.style.opacity = "1";
    el13.style.visibility = "visible";
    els2[0].style.visibility = "hidden";
    els2[0].style.left = "15%";
    els2[1].style.right = "15%";
    els2[1].style.visibility = "hidden";
    el2.style.visibility = "hidden";
    el13.style.left = "0";
    el13.className += " left-right-enter";
    el14.checked = false;
    el15.checked = false;
  }

  function thanksForPlaying() {
    el13.style.opacity = "0";
    el13.style.visibility = "hidden";
    el13.className += " left-to-right";
    el13.style.left = "200%";
    el16.style.opacity = "1";
    el16.style.visibility = "visible";
    el16.style.left = "0";
    el16.className += " left-right-enter";
    document.body.style.backgroundColor = "black";
  }

  function newGame() {
    el13.style.opacity = "0";
    el13.style.visibility = "hidden";
    els2[0].style.visibility = "visible";
    els2[0].style.left = "4%";
    els2[1].style.right = "4%";
    els2[1].style.visibility = "visible";
    el2.style.visibility = "visible";
    el13.style.left = "200%";
    el13.className += " left-to-right";

    els[0].addEventListener("click", yourTurnMyTurn);
    els[1].addEventListener("click", yourTurnMyTurn);
    els[2].addEventListener("click", yourTurnMyTurn);
    els[3].addEventListener("click", yourTurnMyTurn);
    els[4].addEventListener("click", yourTurnMyTurn);
    els[5].addEventListener("click", yourTurnMyTurn);
    els[6].addEventListener("click", yourTurnMyTurn);
    els[7].addEventListener("click", yourTurnMyTurn);
    els[8].addEventListener("click", yourTurnMyTurn);
  }

  function showScoreBoard() {
    if ( human === "X" ) {
      els2[0].style.backgroundColor = "#AAFDE6";
      els2[1].style.backgroundColor = "#FFA07A";
    } else {
      els2[0].style.backgroundColor = "#FFA07A";
      els2[1].style.backgroundColor = "#AAFDE6";
    }

    el7.innerHTML = human;
    el8.innerHTML = humanScore;
    el9.innerHTML = computer;
    el10.innerHTML = computerScore;
    els2[0].style.visibility = "visible";
    els2[1].style.visibility = "visible";
  }

  function submitLetter( submit ) {
    submit.preventDefault();
    if ( el3.checked ) {
      human = "X";
      computer = "O";
    } else {
      human = "O";
      computer = "X";
    }

    dissolveForm();
  }

  function updateTheArray() {
    for (var i = 0; i < els.length; i++) {
      ticTT[i] = els[i].innerHTML;
    }
  }

  function updateTheTable() {
    for (var i = 0; i < ticTT.length; i++) {
      els[i].innerHTML = ticTT[i];
    }
  }

  function checkEmpties() {
    emptyCells = [];
    for ( var i = 0; i < ticTT.length; i++ ) {
      if ( ticTT[i] === "" ) {
        emptyCells.push(i);
      }
    }
    emptyLength = emptyCells.length;
    randomNumber = Math.floor( Math.random() * emptyLength );
  }

  function checkWinHuman() {
    if (
        ticTT[0] === human && ticTT[1] === human && ticTT[2] === human ||
        ticTT[3] === human && ticTT[4] === human && ticTT[5] === human ||
        ticTT[6] === human && ticTT[7] === human && ticTT[8] === human ||
        ticTT[0] === human && ticTT[3] === human && ticTT[6] === human ||
        ticTT[1] === human && ticTT[4] === human && ticTT[7] === human ||
        ticTT[2] === human && ticTT[5] === human && ticTT[8] === human ||
        ticTT[2] === human && ticTT[4] === human && ticTT[6] === human ||
        ticTT[0] === human && ticTT[4] === human && ticTT[8] === human
         ) {
        lastWinner = "human";
        alert("YOU WON");

        gameOver();
        return true;
     } else {
       return false;
     }
  }

  function checkWinComputer() {
    if (
        ticTT[0] === computer && ticTT[1] === computer && ticTT[2] === computer ||
        ticTT[3] === computer && ticTT[4] === computer && ticTT[5] === computer ||
        ticTT[6] === computer && ticTT[7] === computer && ticTT[8] === computer ||
        ticTT[0] === computer && ticTT[3] === computer && ticTT[6] === computer ||
        ticTT[1] === computer && ticTT[4] === computer && ticTT[7] === computer ||
        ticTT[2] === computer && ticTT[5] === computer && ticTT[8] === computer ||
        ticTT[2] === computer && ticTT[4] === computer && ticTT[6] === computer ||
        ticTT[0] === computer && ticTT[4] === computer && ticTT[8] === computer
         ) {
        lastWinner = "computer";
        alert("YOU LOST SUCKAAA");
        gameOver();
        return true;
     } else {
       return false;
     }
  }

  function computersTurn() {
    checkEmpties();
    computerCell = emptyCells[randomNumber];
    els[ computerCell ].innerHTML = computer;
    els[ computerCell ].removeEventListener("click", yourTurnMyTurn);
    updateTheArray();
    checkWinComputer();
  }

  function yourTurnMyTurn() {
      removeEventListeners();
      this.innerHTML = human;
      this.removeEventListener("click", yourTurnMyTurn);
      updateTheArray();

      if ( checkWinHuman() ) {
        return;
      } else {
      setTimeout( computersTurn, 500 );
      }
      addEventListeners();
  }

  function keyboardAccess ( event ) {
    if ( event.keyCode === 88 ) {
      el3.checked = true;
    } if ( event.keyCode === 79 ) {
      el5.checked = true;
    } if ( event.keyCode === 32 ) {
        if ( el3.checked ) {
          human = "X";
          computer = "O";
        } else {
          human = "O";
          computer = "X";
        }
        el6.style.color = "white";
        dissolveForm();
    }
    if ( el13.style.visibility === "visible" ) {
      if ( event.keyCode === 89 ) {
        el14.checked = true;
        newGame();
      }

      if ( event.keyCode === 78 ) {
        el15.checked = true;
        thanksForPlaying();
      }
    }
  }

  function removeEventListeners() {
    els[0].removeEventListener("click", yourTurnMyTurn);
    els[1].removeEventListener("click", yourTurnMyTurn);
    els[2].removeEventListener("click", yourTurnMyTurn);
    els[3].removeEventListener("click", yourTurnMyTurn);
    els[4].removeEventListener("click", yourTurnMyTurn);
    els[5].removeEventListener("click", yourTurnMyTurn);
    els[6].removeEventListener("click", yourTurnMyTurn);
    els[7].removeEventListener("click", yourTurnMyTurn);
    els[8].removeEventListener("click", yourTurnMyTurn);
  }

  function addEventListeners() {
    els[0].addEventListener("click", yourTurnMyTurn);
    els[1].addEventListener("click", yourTurnMyTurn);
    els[2].addEventListener("click", yourTurnMyTurn);
    els[3].addEventListener("click", yourTurnMyTurn);
    els[4].addEventListener("click", yourTurnMyTurn);
    els[5].addEventListener("click", yourTurnMyTurn);
    els[6].addEventListener("click", yourTurnMyTurn);
    els[7].addEventListener("click", yourTurnMyTurn);
    els[8].addEventListener("click", yourTurnMyTurn);
  }

  function gameOver() {
    if ( lastWinner === "human" ) {
      humanScore++;
      el8.innerHTML = humanScore;
    } else {
      computerScore++;
      el10.innerHTML = computerScore;
      }

      removeEventListeners();

    ticTT = ["", "", "", "", "", "", "", "", ""];
    updateTheTable();
    showNewGameForm();
  }

  el4.addEventListener("submit", submitLetter);
  els[0].addEventListener("click", yourTurnMyTurn);
  els[1].addEventListener("click", yourTurnMyTurn);
  els[2].addEventListener("click", yourTurnMyTurn);
  els[3].addEventListener("click", yourTurnMyTurn);
  els[4].addEventListener("click", yourTurnMyTurn);
  els[5].addEventListener("click", yourTurnMyTurn);
  els[6].addEventListener("click", yourTurnMyTurn);
  els[7].addEventListener("click", yourTurnMyTurn);
  els[8].addEventListener("click", yourTurnMyTurn);

  el14.addEventListener("click", newGame);
  el15.addEventListener("click", thanksForPlaying);
  window.addEventListener("keydown", keyboardAccess);
});
