$(document).ready(function() {

  $("#srch_btn").on('click',function(){
    console.log($("#search").val());
    $.getJSON( 
      "http://autocomplete.wunderground.com/aq?query=" + $('#search').val() + '&cb=?'
      ).done(function(returnData){
        // console.log(returnData);
        var result = returnData.RESULTS
        // console.log(result)
        $("#cities").empty();
        $.each(result, function(i, value) {
          $("#cities").append( "<p>"  + value.name + "</p>");
        })
      }); 
  });

});
