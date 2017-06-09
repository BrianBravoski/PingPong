// business logic
var output = function(input) {
  if (input % 3 === 0) {
    alert("ping");
  } else if (input % 5 === 0) {
    alert("pong");
  }else if ((input %5===0)&&(input% 3 ===0)) {
    alert("pingpong");
  }else{
    alert(input);
  }
}


// user interface
$(document).ready(function() {
  $(".form").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = output(input);

  });
});
