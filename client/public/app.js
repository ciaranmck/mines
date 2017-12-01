var Cell = require("./cell.js");

var App = function () {

};

App.prototype.make2DArray = function(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
}

var grid;
var cols = 20;
var rows = 20;
 
function setup() {
	createCanvas(200, 200);
	grid = make2DArray(cols, rows);
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			grid[i][j] = new Cell;
		}
	}

}


module.exports = App;