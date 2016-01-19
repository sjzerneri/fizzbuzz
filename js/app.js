 $(document).ready(function () {

     /****************************
     First declare the functions
     ****************************/

     //fizzbuz function is creating the game
     function fizzbuzz(limit) {

         //check the each number and show the results
         function check(i) {

             var msg = "<p>" + i + "</p>";


             if (i % 3 == 0) {
                 msg = "<p>Fizz</p>";
             };
             if (i % 5 == 0) {
                 msg = "<p>Buzz</p>";
             };
             if (i % 15 == 0) {
                 msg = "<p>Fizzbuzz</p>";
             };
             return msg;
         }

         //run through each number and append the number to the html

         for (var counter = 1; counter <= limit; counter++) {
             $('body').append(check(counter));
         }
     }


     //get the upper limit from the user input

     var limit = prompt("Please set the upper limit to play FizzBuzz.");

     fizzbuzz(limit);

 });
