function Cell(x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
	if (random(1) < 0.5) {
		this.mine = true;
	} else {
		this.mine = false;
	}
	this.revealed = false;
}

Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, this.w, this.w);
	if (this.revealed) {
		if (this.mine) {
			ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
		}
	}
}