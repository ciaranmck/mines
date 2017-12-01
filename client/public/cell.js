function Cell(x, y, w) {
	this.mine = true;
	this.revealed = true;
}

Cell.prototype.show = function() {
	rect(this.x, this.y, this.w);
}

module.exports = Cell;