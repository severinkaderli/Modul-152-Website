$(window).on("load", function() {
	// Add exif data about camera settings to each image
	$("img").each(function() {
		var el = $(this).get(0);
		EXIF.getData(el, function() {
			var iso = EXIF.getTag(this, "ISOSpeedRatings");
			var FNumber = EXIF.getTag(this, "FNumber");
			var exposure = EXIF.getTag(this, "ExposureTime");
			$(this).parent().find(".iso").html(iso);
			if(exposure) {
				$(this).parent().find(".exposure").html(`${exposure.numerator}/${exposure.denominator}`);
			}
			
			if(FNumber) {
				$(this).parent().find(".aperture").html("ƒ/" + FNumber);
			}
		});
	});
});