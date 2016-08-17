$(function() {
  var game = new Game();
  console.log(game);
});

var Game = function() {
  this.turns = 0;
  this.wins = { "X": 0, "O": 0 };
  this.moves = { "X": [], "O": [] };
  this.player = "";
  this.allWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                [1, 4, 7], [2, 5, 8], [3, 6, 9],
                [3, 5, 7], [1, 5, 9] ];
  this.addEventListeners();
};

Game.prototype.addEventListeners = function() {
  $('.box').click(function(event) {
    event.preventDefault();
    this.play();
  }.bind(this));

  $('#reset').click(function (event) {
    event.preventDefault();
    this.reset();
  }.bind(this));
};

Game.prototype.play = function () {
  this.player = (this.turns%2===0) ? "X" : "O";
  if ($(event.target).hasClass('Xmoves') || $(event.target).hasClass('Omoves')) return alert('Please click an empty box');
  if (this.player === "X") {$(event.target).addClass('Xmoves');} else {$(event.target).addClass('Omoves');}
  this.moves[this.player].push(parseInt($(event.target).attr('value')));
  console.log(this.moves[this.player]);
  this.whosTurn(this.turns);
  var winner = this.winner();

  if(winner) {
      alert("You WIN!!!!!!!!");
      this.wins[this.player]++;
      $('#num' + this.player).html(this.wins[this.player]);
      this.reset();
  } else if (this.turns === 8) {
     alert("It's a Tie.............");
     return false;
  }
  this.turns++;
};

Game.prototype.whosTurn = function (t) {
  if (t%2===0) {
    $('#imgO').hide();
    $('#imgX').show();
  } else {
    $('#imgX').hide();
    $('#imgO').show();
  }
};

Game.prototype.winner = function () {
  var count = 0;
  if (this.moves[this.player].length < 3) return;
  for(j=0;j<this.allWins.length; j++) {
    var winningCombination = this.allWins[j];
      if(
        this.moves[this.player].indexOf(winningCombination[0]) !== -1 &&
        this.moves[this.player].indexOf(winningCombination[1]) !== -1 &&
        this.moves[this.player].indexOf(winningCombination[2]) !== -1
      ) return this.player;
  }
  return false;
};

Game.prototype.reset = function() {
  this.turns = 0; this.whosTurn(0);
  $('.box').removeClass('Xmoves');
  $('.box').removeClass('Omoves');
  this.moves = { "X": [], "O": [] };
};
