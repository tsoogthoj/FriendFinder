
$('#submitButton').on('click', function(event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $('#userName').val().trim(),
        scores:[
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };
    console.log('userInput = ' + JSON.stringify(userInput));

    $.post('/api/friends', userInput)
      .done(function(data) {
        $("#userMatchImage").attr("src", data.matchImage);
        $("#pokeModal").fadeIn();
      });
});