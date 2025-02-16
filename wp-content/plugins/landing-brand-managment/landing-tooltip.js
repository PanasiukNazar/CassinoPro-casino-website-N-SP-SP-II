jQuery(document).ready(function($) {
  $('.pie_progress').asPieProgress({
	namespace: 'pie_progress',
	barcolor: '#1ed760',
	barsize: '20',
	 trackcolor: '#ebeef1',
	fillcolor: 'none',		 
  });
	$('.pie_progress').asPieProgress('start');
});
