// business logic
var output=[];
var number = function(input){
  for(var i=1; i<= input; i++){
    if ((i%3 === 0)&&(i% 5=== 0)){
      output.push("pingpong");
    } else if (i% 5 === 0){
      output.push("pong");
    }else if(i% 3 === 0)
    output.push("ping");
  }else {
    output.push(i);
  }
};
};

// user interface
$(document).ready(function() {
  $(".form").submit(function(event){
    event.preventDefault();

    var input = parseInt($("#input").val());
    var result = number(input);

    $(".result").text(output);
  });
});
