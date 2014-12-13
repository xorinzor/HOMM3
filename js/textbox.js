game.TextBox = me.Renderable.extend({
	init: function(x, y, width, height) {
		this.font = new me.Font("georgia", 10, "#F2D06F");
		this.text = "";
	},

	setText: function(text) {
		this.text = text;
	},

	draw: function(renderer) {
		this.font.draw(renderer, this.text, this.x, this.y);
	}
});