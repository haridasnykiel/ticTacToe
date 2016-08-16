  $(function () {
    var turns = 0;
    var wins = { "X": 0, "O": 0 };
    var moves = { "X": [], "O": [] };
    var player;
    var allWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                  [1, 4, 7], [2, 5, 8], [3, 6, 9],
                  [3, 5, 7], [1, 5, 9] ];

    $('#reset').click(function (event) {
      event.preventDefault();
      reset();
    });

    $('.box').click(function (event) {
      event.preventDefault();
      player = (turns%2===0) ? "X" : "O";
      if ($(this).hasClass('Xmoves') || $(this).hasClass('Omoves')) return alert('Please click an empty box');
      if (player === "X") {$(this).addClass('Xmoves');} else {$(this).addClass('Omoves');}
      moves[player].push(parseInt($(this).attr('value')));
      whosTurn(turns);
      var winner = theWinnerIs();

      if(winner) {

          alert("You WIN!!!!!!!!");
          wins[player]++;
          $('#num' + player).html(wins[player]);
          reset();

      } else if (turns === 8) {
         alert("It's a Tie.............");
         return false;
      }

      turns++;
    });

    function whosTurn(t) {

      if (t%2===0) {
        $('#imgO').hide();
        $('#imgX').show();
      } else {
        $('#imgX').hide();
        $('#imgO').show();
      }
    }

    function theWinnerIs () {


      // console.log(turns);
      var count = 0;
      if (moves[player].length < 3) return;
      for(j=0;j<allWins.length; j++) {

        var winningCombination = allWins[j];
          console.log(player);
          if(
            moves[player].indexOf(winningCombination[0]) !== -1 &&
            moves[player].indexOf(winningCombination[1]) !== -1 &&
            moves[player].indexOf(winningCombination[2]) !== -1
          ) return player;

        // for (i=0; i < moves[player].length; i++) {
        //   if (allWins[j].indexOf(moves[player][i]) !== -1) count++;
        // }
      }

      return false;


    }

    function reset() {
      turns = 0; whosTurn(0);
      $('.box').removeClass('Xmoves');
      $('.box').removeClass('Omoves');
      moves = { "X": [], "O": [] };
    }
  });
