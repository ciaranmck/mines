var App = function () {
	var grid;
	var cols = 20;
	var rows = 20;
}

App.prototype = {

	make2DArray(cols, rows) {
		var arr = new Array(cols);
		for (var i = 0; i < arr.length; i++) {
			arr[i] = new Array(rows);
		}
	}

	Cell() {
		this.mine = true;
		this.revealed = true;
	}

	setup() {
		createCanvas(200, 200);
		grid = make2DArray(20, 20);
	}


}

console.log("This is app.js");

module.exports = App;