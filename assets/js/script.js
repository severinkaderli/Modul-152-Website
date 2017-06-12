$(window).on("load", function() {
	// Add exif data about camera settings to each image
	$("img").each(function() {
		var image = $(this).get(0);

		var output = "";
		output += `
			<h5>Bildinformation</h5>
			<table class="card-text">
		`;

		EXIF.getData(image, function() {
			var iso = EXIF.getTag(this, "ISOSpeedRatings");
			var FNumber = EXIF.getTag(this, "FNumber");
			var exposure = EXIF.getTag(this, "ExposureTime");
			console.log(iso);
			if(FNumber) {
				output += `
					<tr>
						<th>Blende:</th>
						<td>ƒ/${FNumber}</td>
					</tr>
				`;
			}

			if(iso) {
				output += `
					<tr>
						<th>ISO:</th>
						<td>${iso}</td>
					</tr>
				`;
			}

			if(exposure) {
				output += `
					<tr>
						<th>Belichtungszeit:</th>
						<td>${exposure.numerator}/${exposure.denominator}</td>
					</tr>
				`;
			}
			
			output += `
				</table>
			`;

			$(this).parent().append(output);
		});
	});
});
