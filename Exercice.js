var scoreIndex = 0;

function init() {
  $('#score').text(function() {
    return scoreIndex;
  });
}

$('#incremButton').click(function() {
  scoreIndex++
  init();
});

$('#decremButton').click(function() {
  scoreIndex--
  init();
});
