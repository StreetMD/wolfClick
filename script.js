//Спойлер - id в боксе
function go (id) {
	if (id.style.display== "none") {
		id.style.display = "";
	} else {
		id.style.display = "none";
	}
};

menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}