$(function() {
  var content = BL.getContentForPreview().content;
  
  for(var i in content){
    var imgDiv = $('<img src="' + JSON.parse(content[i].data).url + '"></img>');
    $('#all').append(imgDiv);
    
    (function(id){
      imgDiv.click(function(e){
        BL.showContent(id)
      });
    })(content[i].id);
    
    imgDiv.on('load', function(){BL.previewReady()});
  }
  
  BL.previewReady();
})