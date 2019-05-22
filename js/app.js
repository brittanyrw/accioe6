var themes = ["lion", "snake", "bird", "badger"];

document.getElementById('theme-change').onclick = function() {
	var randomNum = Math.floor(Math.random() * (3 - -1));
	console.log(randomNum);
	document.getElementById('body').className = "";
	document.getElementById('body').classList.add(themes[randomNum]);
};


