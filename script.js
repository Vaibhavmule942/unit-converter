function convert() {
	var km = parseFloat(document.getElementById("km-input").value);
	var meters = km * 1000;
	document.getElementById("result").innerHTML = km + " kilometers = " + meters + " meters.";
}
