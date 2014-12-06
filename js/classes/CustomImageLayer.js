me.CustomImageLayer = me.ImageLayer.extend({
	init: function(x, y, name, width, height, image, z, ratio) {
		this._super(me.ImageLayer, "init", [name, width, height, image, z, ratio]);
		this.x = x;
		this.y = y;
	},

	draw: function(renderer, rect) {

		var context = renderer.getContext();
		context.save(); 
		context.translate(this.x, this.y);
		//context.beginPath();
		//context.rect(0, 0, this.x, this.y);
		//context.clip(); 

		this._super(me.ImageLayer, "draw", [renderer, rect]);

		context.restore();
	}
});