$(document).ready(function(){


var limite = $('.limite');
$(document).mousemove(function(){
    $('.pupila').css("left", event.clientX/32);
    $('.pupila').css("top", event.clientY/28);
    
})

$(document).mousemove(function(){
    $('.pupila-dos').css("left", event.clientX/32);
    $('.pupila-dos').css("top", event.clientY/28);
})
   
});