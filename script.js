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
    el = document.getElementById("letterform"),
    el2 = document.getElementById("tictactoe"),
    el3 = document.getElementById("x"),
    el4 = document.getElementById("choose-letter"),
    el5 = document.getElementById("o"),
    el6 = document.getElementById("submit"),
    els = document.getElementsByTagName("td");

  function screenify() {
    for (var i = 0; i < ticTT.length; i++) {
      document.getElementsByTagName("td")[i].innerHTML = ticTT[i];
    }
  }

  function dissolveForm() {
    el.style.opacity = "0";
    el.style.visibility = "hidden";
    el.className += "left-to-right";
    el.style.left = "200%";
    el2.style.visibility = "visible";
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
        alert("YOU WON");
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
        alert("YOU LOST SUCKAAA");
     }
  }

  function checkWin() {
      checkWinHuman();
      checkWinComputer();
  }

  function yourTurn() {
    humansTurn = !humansTurn;
  }

  function computersTurn() {
    checkEmpties();
    computerCell = emptyCells[randomNumber];
    els[ computerCell ].innerHTML = computer;
    updateTheArray();
    checkWin();
  }

  function yourTurnMyTurn() {
      this.innerHTML = human;
      updateTheArray();
      checkEmpties();
      computersTurn();
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
  window.addEventListener("keydown", keyboardAccess);
});
