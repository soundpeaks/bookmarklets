/*
 * Sorts all videos at the channel's page by views, 
 * creates a playlist and opens it in current tab.
 */

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
document.body.appendChild(script);

function loadAfter$() {
    var str = 'https://www.youtube.com/watch_videos?feature=c4-overview&type=0&video_ids=';
	var videos = new Array();
	var elements = new Array();
	elements = $('ytd-grid-video-renderer').each(function(){
	  var url = $(this).find('[id=\'thumbnail\'][rel=\'null\']').attr('href').replace('/watch?v=', '').replace('/shorts/', '').split('&')[0];
	  var views = $(this).find('span[class=\'style-scope ytd-grid-video-renderer\']').first().text();
	  
	  views = views.replace(' views', '');

	  if (views.includes('K')) {views = parseFloat(views) * 1000}  else if 
	  (views.includes('M')) {views = parseFloat(views) * 1000000} else if
	  (views.includes('B')) {views = parseFloat(views) * 1000000000};

	  //if (typeof(views) === 'string') views = parseFloat(views.match(/[+-]?\d+(\.\d+)?/g)[0]);
	  
	  //console.log(views)
	  videos.push({u: url, v: views});
	});
	videos.sort((a, b) => (a.v > b.v) ? -1 : 1);
	for (var i in videos) {
		//console.log(videos[i]['u']);
		//console.log(videos[i]['v']);
		str = str + videos[i]['u'] + ',';
	}
	alert(str);
	window.location = str;
}

const t = setTimeout(loadAfter$, 1000);


