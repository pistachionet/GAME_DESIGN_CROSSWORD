function startGame() {
  var difficulty = document.getElementById('difficulty').value; // Get the selected difficulty from the dropdown
  // Redirect to the puzzle page with the selected difficulty as a query parameter



  document.getElementById('aniB').onclick = function () {
    window.location.href = `puzzle.html?difficulty=${difficulty}`;
  };
  document.getElementById('gdB').onclick = function () {
    window.location.href = `puzzleB.html?difficulty=${difficulty}`;
  }

  document.getElementById('basB').onclick = function () {
    window.location.href = `puzzleC.html?difficulty=${difficulty}`;
  }
}




