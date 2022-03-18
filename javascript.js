/**Select and Expand Form**/
$(document).ready(function(){
	
	/**Admission**/
	$('#hsc').click(function(){
		$('.assc').show();
		$('.ahsc').hide();
		$('.ahon').hide();
	});
	$('#edunone').click(function(){
		$('.assc').hide();
		$('.ahsc').hide();
		$('.ahon').hide();
	});
	$('#honours').click(function(){
		$('.assc').show();
		$('.ahsc').show();
		$('.ahon').hide();
	});
	$('#masters').click(function(){
		$('.assc').show();
		$('.ahsc').show();
		$('.ahon').show();
	});

	/**Result Part**/
	$('#rnone').click(function(){
		$('.iframe-hsc').hide();
		$('.iframe-hon-mas').hide();
		$('.iframe-masters').hide();
		$('.iframe-admission').hide();
	});
	$('#rhsc').click(function(){
		$('.iframe-hsc').show();
		$('.iframe-hon-mas').hide();
		$('.iframe-admission').hide();
	});
	$('#rhon-mas').click(function(){
		$('.iframe-hsc').hide();
		$('.iframe-hon-mas').show();
		$('.iframe-admission').hide();
	});
	$('#radm').click(function(){
		$('.iframe-hsc').hide();
		$('.iframe-hon-mas').hide();
		$('.iframe-admission').show();
	});
	$('#rinc').click(function(){
		$('.iframe-hsc').hide();
		$('.iframe-hon-mas').hide();
		$('.iframe-admission').hide();
	});
				
});