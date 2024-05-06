function startGame() {
  var difficulty = document.getElementById('difficulty').value; // Get the selected difficulty from the dropdown
  // Redirect to the puzzle page with the selected difficulty as a query parameter
  window.location.href = `puzzle.html?difficulty=${difficulty}`;
}




