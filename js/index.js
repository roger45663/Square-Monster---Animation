var percent = 0;

function greet() {
  $('.greet').html("You!!!<br>Play With Us!!!");
}

var timer = setInterval(function() {
  $('.bar').css("width",percent+"%");
  percent+=1;
  if(percent > 100) {
    clearInterval(timer);
    $('.loadingPage').addClass('changeScene');
    setTimeout(greet,3000);
  }
},30)