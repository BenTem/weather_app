// $(document).ready(function() {

//   $("#srch_btn").on('click',function(){
//     console.log($("#search").val());
//     $.getJSON( 
//       "http://autocomplete.wunderground.com/aq?query=" + $('#search').val() + '&cb=?'
//       ).done(function(returnData){
//         var result = returnData.RESULTS
//         $("#cities").empty();
//         $.each(result, function(i, value) {
//           $("#cities").append( "<p>"  + value.name + "</p>");
//         })
//       }); 
//   });

// });

// $(document).ready(function() {

//   $( "#srch_btn" ).autocomplete({
//     source: function( request, response ) {
//     $.getJSON( 
//       "http://autocomplete.wunderground.com/aq?query=" + $('#search').val() + '&cb=?'
//       ).done(function( data ) {
//         response( data );
//       });
//     }
//   });
// });

// $(function() {
//   var availableTags = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell",
//     "Java",
//     "JavaScript",
//     "Lisp",
//     "Perl",
//     "PHP",
//     "Python",
//     "Ruby",
//     "Scala",
//     "Scheme"
//   ];
//   $( "#search" ).autocomplete({
//     source: availableTags
//   });
// });
