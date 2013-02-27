$(function(){
  $('button').click(function(e){
    BL.createContent(JSON.stringify({url: $('input').val()}));
  });
});