$(function() {
  $('img').attr('src', JSON.parse(BL.getContentItem()).url);
})