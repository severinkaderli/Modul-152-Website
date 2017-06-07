$(window).on("load", function() {
	// Add exif data about camera settings to each image
	$("img").each(function() {
		var image = $(this).get(0);

		$(this).parent().append(`
			<h5>Bildinformation</h5>
			<table class="card-text">
				<tr>
					<th>Blende:</th>
					<td class="aperture"></td>
				</tr>
				<tr>
					<th>Belichtung:</th>
					<td class="exposure"></td>
				</tr>
				<tr>
					<th>ISO:</th>
					<td class="iso"></td>
				</tr>
			</table>
		`);
		
		EXIF.getData(image, function() {
			var iso = EXIF.getTag(this, "ISOSpeedRatings");
			var FNumber = EXIF.getTag(this, "FNumber");
			var exposure = EXIF.getTag(this, "ExposureTime");
			$(this).parent().find(".iso").html(iso);

			if(iso) {

			}

			if(exposure) {
				$(this).parent().find(".exposure").html(`${exposure.numerator}/${exposure.denominator}`);
			}
			
			if(FNumber) {
				$(this).parent().find(".aperture").html("ƒ/" + FNumber);
			}
		});
	});
});