var wins = 0;
var loss = 0;
var points = 0;


    $(document).ready(function() {
      $("#button").on("click", function() {
        var random = Math.floor(Math.random() * 100) + 1;
        $("#random").text(random);
        console.log(random);

      });

    });