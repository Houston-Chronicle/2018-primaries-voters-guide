//Display races after selecting party
$('.party').change(function() {
	if($('.party').val() == 'dem') {
		$('#races').show();
		$('.dem').show();
		$('.both').show();
		$('.gop').hide();
	};
});
$('.party').change(function() {
	if($('.party').val() == 'gop') {
		$('#races').show();
		$('.gop').show();
		$('.both').show();
		$('.dem').hide();
	};
});
$('.party').change(function() {
	if($('.party').val() == 'party') {
		$('#races').show();
		$('.dem').show();
		$('.gop').show();
		$('.both').show();
	};
});
//Display candidates after selecting race
$('#races span').click(function() {
	$('#guidefilter').show();
	$('.clearraces').show();
	$('#intro').hide();
	$('#races').hide();
	$('.partyfilters').hide();
	$('.indices').hide();
});
$('.clear').click(function() {
	$('#guidefilter').hide();
	$('.clearraces').hide();
	$('#intro').show();
	$('.partyfilters').show();
	$('.indices').show();
	$('#races').show();
});
//Facebook popup window
function openWindow(url,height,width) {
  window.open(url,"_blank","height="+height+",width="+width);
  return false;
}
function share(type) {
  var url = escape(window.location.href);
  var site = 'HoustonChronicle.com';
  var title = escape(document.title);
  if ( type == 'facebook' ) {
    openWindow('http://www.facebook.com/sharer.php?u=' + url,400,750);
  }
  return false;
}