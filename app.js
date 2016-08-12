if ($('#crosses').click()) {

  $(function () {


    // Load in the required elements
    var turns = 0;
    var noughts = $('#imgO');
    var crosses = $('#imgX');
    var xWins = 0;
    var oWins = 0;


    $('.boxes, #reset').click(function (event) {
      event.preventDefault();
    });

    $('#reset').click(function () {
      reset();

    });

    // When a span element is clicked this will start the game and enter an X first (player X starts )


      // crosses.css("display", "block");
      // noughts.css("display", "none");

      $('.boxes').click(function () {

        if (turns === 0) {

          turns++;
          $(this).html($('#X1').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          whosTurn(1);

        } else if (turns === 1) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#O1').clone().css("display", "inline"));
            $(this).addClass('Omove');
            whosTurn(2);

          }

        } else if (turns === 2) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#X2').clone().css("display", "inline"));
            $(this).addClass('Xmove');
            whosTurn(3);
            theWinnerIs();
          }

        } else if (turns === 3) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#O2').clone().css("display", "inline"));
            $(this).addClass('Omove');
            whosTurn(4);
            theWinnerIs();
          }

        } else if (turns === 4) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#X3').clone().css("display", "inline"));
            $(this).addClass('Xmove');
            whosTurn(5);
            theWinnerIs();
          }

        } else if (turns === 5) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#O3').clone().css("display", "inline"));
            $(this).addClass('Omove');
            whosTurn(6);
            theWinnerIs();
          }


        } else if (turns === 6) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#X4').clone().css("display", "inline"));
            $(this).addClass('Xmove');
            whosTurn(7);
            theWinnerIs();
          }

        } else if (turns === 7) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#O4').clone().css("display", "inline"));
            $(this).addClass('Omove');
            whosTurn(8);
            theWinnerIs();
          }

        } else if (turns === 8) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            turns++;
            $(this).html($('#X5').clone().css("display", "inline"));
            $(this).addClass('Xmove');
            whosTurn(9);
            theWinnerIs();
          }

        } else if (turns === 9) {

          if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

            alert('Please click an empty box');


          } else {

            $(this).html($('#O5').clone().css("display", "inline"));
            $(this).addClass('Omove');
            theWinnerIs();

          }

        }

      });





    // Make symbol disappear depending on whos turn it is.

        function whosTurn(t) {

          if (t === 0) {

            crosses.css("display", "block");
            noughts.css("display", "none");

          } else if (t === 1) {

            noughts.css("display", "block");
            crosses.css("display", "none");

          } else if (t === 2) {

            crosses.css("display", "block");
            noughts.css("display", "none");

          } else if (t === 3) {

            noughts.css("display", "block");
            crosses.css("display", "none");

          } else if (t === 4) {

            crosses.css("display", "block");
            noughts.css("display", "none");

          }  else if (t === 5) {

            noughts.css("display", "block");
            crosses.css("display", "none");

          } else if (t === 6) {

            crosses.css("display", "block");
            noughts.css("display", "none");

          } else if (t === 7) {

            noughts.css("display", "block");
            crosses.css("display", "none");

          } else if (t === 8) {

            crosses.css("display", "block");
            noughts.css("display", "none");

          } else if (t === 9) {

            noughts.css("display", "block");
            crosses.css("display", "none");

          }
        }


    // define the win logic

    function theWinnerIs () {

      if ($('#box1').hasClass('Xmove') &&
          $('#box2').hasClass('Xmove') &&
          $('#box3').hasClass('Xmove') ||
          $('#box4').hasClass('Xmove') &&
          $('#box5').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') ||
          $('#box7').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') &&
          $('#box9').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') &&
          $('#box4').hasClass('Xmove') &&
          $('#box7').hasClass('Xmove') ||
          $('#box3').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box9').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') &&
          $('#box5').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box7').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') ) {

            alert("Crosses WIN!!!!!!!!");
            xWins++;
            $('#numX').html(xWins);
            reset();

      } else if ($('#box1').hasClass('Omove') &&
                $('#box2').hasClass('Omove') &&
                $('#box3').hasClass('Omove') ||
                $('#box4').hasClass('Omove') &&
                $('#box5').hasClass('Omove') &&
                $('#box6').hasClass('Omove') ||
                $('#box7').hasClass('Omove') &&
                $('#box8').hasClass('Omove') &&
                $('#box9').hasClass('Omove') ||
                $('#box1').hasClass('Omove') &&
                $('#box4').hasClass('Omove') &&
                $('#box7').hasClass('Omove') ||
                $('#box3').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box9').hasClass('Omove') ||
                $('#box2').hasClass('Omove') &&
                $('#box5').hasClass('Omove') &&
                $('#box8').hasClass('Omove') ||
                $('#box2').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box7').hasClass('Omove') ||
                $('#box1').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box8').hasClass('Omove')) {

                  alert("Noughts WIN!!!!!!!!");
                  oWins++;
                  $('#numO').html(oWins);
                  reset();

      } else if (turns === 9){

        alert("It's a Tie.............");
        reset();
      }

    }

    // reset button function

    function reset() {

      turns = 0;
      whosTurn(0);
      $('.boxes').html('+');
      $('.boxes').removeClass('Xmove');
      $('.boxes').removeClass('Omove');

    }





});

} else if ($('#noughts').click()) {

  $(function () {

    // Load in the required elements
    var turns = 0;
    var noughts = $('#imgO');
    var crosses = $('#imgX');
    var xWins = 0;
    var oWins = 0;


    $('.boxes, #reset').click(function (event) {
      event.preventDefault();
    });

    $('#reset').click(function () {
      reset();
    });

    // When a span element is clicked this will start the game and enter an X first (player X starts )

    noughts.css("display", "block");
    crosses.css("display", "none");

    $('.boxes').click(function () {

      if (turns === 0) {

        turns++;
        $(this).html($('#O1').clone().css("display", "inline"));
        $(this).addClass('Omove');
        whosTurnO(1);

      } else if (turns === 1) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#X1').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          whosTurnO(2);

        }

      } else if (turns === 2) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#O2').clone().css("display", "inline"));
          $(this).addClass('Omove');
          whosTurnO(3);
          theWinnerIs();
        }

      } else if (turns === 3) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#X2').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          whosTurnO(4);
          theWinnerIs();
        }

      } else if (turns === 4) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#O3').clone().css("display", "inline"));
          $(this).addClass('Omove');
          whosTurnO(5);
          theWinnerIs();
        }

      } else if (turns === 5) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#X3').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          whosTurnO(6);
          theWinnerIs();
        }


      } else if (turns === 6) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#O4').clone().css("display", "inline"));
          $(this).addClass('Omove');
          whosTurnO(7);
          theWinnerIs();
        }

      } else if (turns === 7) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#X4').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          whosTurnO(8);
          theWinnerIs();
        }

      } else if (turns === 8) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          turns++;
          $(this).html($('#O5').clone().css("display", "inline"));
          $(this).addClass('Omove');
          whosTurnO(9);
          theWinnerIs();
        }

      } else if (turns === 9) {

        if ($(this).hasClass('Xmove') || $(this).hasClass('Omove')) {

          alert('Please click an empty box');


        } else {

          $(this).html($('#X5').clone().css("display", "inline"));
          $(this).addClass('Xmove');
          theWinnerIs();

        }

      }

    });




    // Make symbol disappear depending on whos turn it is.

      function whosTurnO(t) {


        if (t === 0) {

          noughts.css("display", "block");
          crosses.css("display", "none");

        } else if (t === 1) {

          crosses.css("display", "block");
          noughts.css("display", "none");

        } else if (t === 2) {

          noughts.css("display", "block");
          crosses.css("display", "none");

        } else if (t === 3) {

          crosses.css("display", "block");
          noughts.css("display", "none");

        } else if (t === 4) {

          noughts.css("display", "block");
          crosses.css("display", "none");

        }  else if (t === 5) {

          crosses.css("display", "block");
          noughts.css("display", "none");

        } else if (t === 6) {

          noughts.css("display", "block");
          crosses.css("display", "none");

        } else if (t === 7) {

          crosses.css("display", "block");
          noughts.css("display", "none");

        } else if (t === 8) {

          noughts.css("display", "block");
          crosses.css("display", "none");

        } else if (t === 9) {

          crosses.css("display", "block");
          noughts.css("display", "none");

        }
      }



    // define the win logic

    function theWinnerIs () {

      if ($('#box1').hasClass('Xmove') &&
          $('#box2').hasClass('Xmove') &&
          $('#box3').hasClass('Xmove') ||
          $('#box4').hasClass('Xmove') &&
          $('#box5').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') ||
          $('#box7').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') &&
          $('#box9').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') &&
          $('#box4').hasClass('Xmove') &&
          $('#box7').hasClass('Xmove') ||
          $('#box3').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box9').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') &&
          $('#box5').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') ||
          $('#box2').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box7').hasClass('Xmove') ||
          $('#box1').hasClass('Xmove') &&
          $('#box6').hasClass('Xmove') &&
          $('#box8').hasClass('Xmove') ) {

            alert("Crosses WIN!!!!!!!!");
            xWins++;
            $('#numX').html(xWins);
            reset();

      } else if ($('#box1').hasClass('Omove') &&
                $('#box2').hasClass('Omove') &&
                $('#box3').hasClass('Omove') ||
                $('#box4').hasClass('Omove') &&
                $('#box5').hasClass('Omove') &&
                $('#box6').hasClass('Omove') ||
                $('#box7').hasClass('Omove') &&
                $('#box8').hasClass('Omove') &&
                $('#box9').hasClass('Omove') ||
                $('#box1').hasClass('Omove') &&
                $('#box4').hasClass('Omove') &&
                $('#box7').hasClass('Omove') ||
                $('#box3').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box9').hasClass('Omove') ||
                $('#box2').hasClass('Omove') &&
                $('#box5').hasClass('Omove') &&
                $('#box8').hasClass('Omove') ||
                $('#box2').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box7').hasClass('Omove') ||
                $('#box1').hasClass('Omove') &&
                $('#box6').hasClass('Omove') &&
                $('#box8').hasClass('Omove')) {

                  alert("Noughts WIN!!!!!!!!");
                  oWins++;
                  $('#numO').html(oWins);
                  reset();

      } else if (turns === 9){

        alert("It's a Tie.............");
        reset();
      }

    }

    // reset button function

    function reset() {

      turns = 0;
      whosTurn(0);
      $('.boxes').html('+');
      $('.boxes').removeClass('Xmove');
      $('.boxes').removeClass('Omove');



    }

  });

}
