$('form').on('submit', function (e) {
  e.preventDefault();
  var imgSrc = $('#image-src').val();
  var attrURL = $('#attribase-url').val();
  var gameTitle = $('#title').val();
  var gameGenre = $('#genre').val();
  var devName = $('#developer').val();
  var devURL = $('#developer-url').val();
  var pubDate = $('#pub-date').val();
  var newName = $('form').find('input[type="text"]').val();
  $('<div/>').text('<li><div><div class="col-md-1 col-sm-2 hidden-xs game-thumbnail vcenter no-padding"><img src="' + imgSrc + '" alt="' + gameTitle + '"></div><!--  --><div class="col-md-4 col-sm-4 col-xs-5 game-name vcenter"><span class="cell-text"><a href="' + attrURL + '">' + gameTitle + '</a></span></div><!-- --><div class="col-md-3 col-sm-3 col-xs-4 game-name vcenter"><span class="cell-text">' + gameGenre + '</span></div><!--  --><div class="col-md-2 col-sm-3 col-xs-4 game-name vcenter"><span class="cell-text"><a href="' + devURL + '">' + devName + '</a></span></div><!-- --><div class="col-md-2 col-sm-3 col-xs-3 game-name vcenter"><span class="cell-text">' + pubDate + '</span></div></div></li>').appendTo('#output');
});
