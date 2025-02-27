const form = document.getElementById("postCodeForm");

form.addEventListener("submit", function(event) {
	event.preventDefault()
	const txtPostCode = document.getElementById('txtPostCode');
	const ddLongitude = document.getElementById('longitude');
	const ddLatitude = document.getElementById('latitude');
	const ddParlimentaryConstituency = document.getElementById('parliamentary_constituency');
	const ddParlimentaryConstituencyCode = document.getElementById('parliamentary_constituency_code');

	fetch(`http://api.postcodes.io/postcodes/${txtPostCode.value}`)
		.then(r => r.json())
		.then(d => {
			ddLongitude.innerText = d.result.longitude;
			ddLatitude.innerText = d.result.latitude;
			ddParlimentaryConstituency.innerText = d.result.parliamentary_constituency;
			ddParlimentaryConstituencyCode.innerText = d.result.codes.parliamentary_constituency;
		});
});
