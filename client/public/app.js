var Cell = require("./cell.js");

var App = function () {
	var grid;
	var cols = 20;
	var rows = 20;
	var w = 20;
};

App.prototype.make2DArray = function(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}


 
App.prototype.setup = function() {
	createCanvas(200, 200);
	cols = floor(width / w);
	rows = floor(height / w);
	grid = make2DArray(cols, rows);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i * w, j * w);
		}
	}
}

App.prototype.draw = function() {
	background(0);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j].show();
		}
	}
}


module.exports = App;