  $(function () {


    // Load in the required elements
    var turns = 0;
    var noughts = $('#imgO');
    var crosses = $('#imgX');
    var xWins = 0;
    var oWins = 0;



    $('#reset').click(function (event) {
      event.preventDefault();
      reset();

    });

    // When a span element is clicked this will start the game and enter an X first (player X starts )

      $('.box').click(function (event) {

        event.preventDefault();


        if (turns%2 === 0) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');

          } else {

          turns++;
          $(this).addClass('Xmove');
          whosTurn(1);
          theWinnerIs();
          }

        } else {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');

          } else {

          turns++;
          $(this).addClass('Omove');
          whosTurn(2);
          theWinnerIs();

          }

        }

      });

    // Make symbol disappear depending on whos turn it is.
    function whosTurn(t) {

      if (t%2 === 0) {

        crosses.show();
        noughts.hide();

      } else {

        noughts.show();
        crosses.hide();

      }

    }



    // define the win logic

    function theWinnerIs () {
    

      if ($('#box1').hasClass('Xmove') && $('#box2').hasClass('Xmove') && $('#box3').hasClass('Xmove') ||
          $('#box4').hasClass('Xmove') && $('#box5').hasClass('Xmove') && $('#box6').hasClass('Xmove') ||
          $('#box7').hasClass('Xmove') && $('#box8').hasClass('Xmove') && $('#box9').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') && $('#box4').hasClass('Xmove') && $('#box7').hasClass('Xmove') ||
          $('#box3').hasClass('Xmove') && $('#box6').hasClass('Xmove') && $('#box9').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') && $('#box5').hasClass('Xmove') && $('#box8').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') && $('#box6').hasClass('Xmove') && $('#box7').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') && $('#box6').hasClass('Xmove') && $('#box8').hasClass('Xmove') ) {

            alert("Crosses WIN!!!!!!!!");
            xWins++;
            $('#numX').html(xWins);
            reset();

      } else if ($('#box1').hasClass('Omove') && $('#box2').hasClass('Omove') && $('#box3').hasClass('Omove') ||
                $('#box4').hasClass('Omove') && $('#box5').hasClass('Omove') && $('#box6').hasClass('Omove') ||
                $('#box7').hasClass('Omove') && $('#box8').hasClass('Omove') && $('#box9').hasClass('Omove') ||
                $('#box1').hasClass('Omove') && $('#box4').hasClass('Omove') && $('#box7').hasClass('Omove') ||
                $('#box3').hasClass('Omove') && $('#box6').hasClass('Omove') && $('#box9').hasClass('Omove') ||
                $('#box2').hasClass('Omove') && $('#box5').hasClass('Omove') && $('#box8').hasClass('Omove') ||
                $('#box2').hasClass('Omove') && $('#box6').hasClass('Omove') && $('#box7').hasClass('Omove') ||
                $('#box1').hasClass('Omove') && $('#box6').hasClass('Omove') && $('#box8').hasClass('Omove')) {

                  alert("Noughts WIN!!!!!!!!");
                  oWins++;
                  $('#numO').html(oWins);
                  reset();

      } else if (turns === 9){

        alert("It's a Tie.............");

      }

    }

    // reset button function

    function reset() { turns = 0; whosTurn(0); $('.box').removeClass('Xmove'); $('.box').removeClass('Omove'); }

});
