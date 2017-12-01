function showAbout(){
	var about = document.getElementById("about"),
		menu = document.getElementById("menu");

	about.style.display="block";

	menu.style.display="none";
}

function menu(){
	var about = document.getElementById("about"),
		menu = document.getElementById("menu");

	about.style.display="none";

	menu.style.display="block";
}
