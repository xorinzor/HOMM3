game.Dialog = me.Container.extend({
	init: function(settings) {
		this._super(me.Container, "init", [ 0, 0, me.game.viewport.getWidth(), me.game.viewport.getHeight() ]);
		this.name = "Dialog";
		this.z = Infinity
		this.settings = settings;

		this.font = new me.Font("georgia", 14, "#FFF", "left");
		this.dialog = settings.text;
        this.counter = 0;
        this.textWidth = 250;
        this.textOffset = {
        	x: 40,
        	y: 40
        };
        this.rows = this.getWords(this.dialog);
        this.textHeight = (this.font.height * 1.1) * this.rows.length;

		this.dialogwidth 	= 64 + this.textWidth + this.textOffset.x;
		this.dialogheight 	= 64 + this.textHeight + this.textOffset.y;
		this.padding = {
			x: (me.game.viewport.getWidth() / 2) - (this.dialogwidth / 2),
			y: (me.game.viewport.getHeight() / 2) - (this.dialogheight / 2)
		};

		this.createDialog();
	},

	createDialog: function() {
		//Background
		this.addChild(new me.CustomImageLayer(this.padding.x+0, this.padding.y+0, "dialog_background", this.dialogwidth, this.dialogheight, "default_bg", 2));

		var sprite = game.sprites.dialog.normal;

		//Borders
		this.addChild(new me.CustomImageLayer(this.padding.x+0, 					this.padding.y+0, 						"dialog_leftcenter", 	64, 				this.dialogheight, 	"dialog_leftcenter", 	3));
		this.addChild(new me.CustomImageLayer(this.padding.x+0, 					this.padding.y+0, 						"dialog_topcenter", 	this.dialogwidth, 	64, 				"dialog_topcenter", 	3));
		this.addChild(new me.CustomImageLayer(this.padding.x+this.dialogwidth-64, 	this.padding.y+0, 						"dialog_rightcenter", 	64, 				this.dialogheight, 	"dialog_rightcenter", 	3));
		this.addChild(new me.CustomImageLayer(this.padding.x+0, 					this.padding.y+this.dialogheight-64, 	"dialog_bottomcenter", 	this.dialogwidth, 	64, 				"dialog_bottomcenter", 	3));
		
		//Corners
		this.addChild(new me.CustomImageLayer(this.padding.x+0, 					this.padding.y+0, 						"dialog_topleft", 		64, 64, "dialog_topleft", 		4));
		this.addChild(new me.CustomImageLayer(this.padding.x+this.dialogwidth-64, 	this.padding.y+0, 						"dialog_topright", 		64, 64, "dialog_topright", 		4));
		this.addChild(new me.CustomImageLayer(this.padding.x+0, 					this.padding.y+this.dialogheight-64, 	"dialog_bottomleft", 	64, 64, "dialog_bottomleft", 	4));
		this.addChild(new me.CustomImageLayer(this.padding.x+this.dialogwidth-64, 	this.padding.y+this.dialogheight-64,	"dialog_bottomright", 	64, 64, "dialog_bottomright", 	4));

		var confirm = new game.MenuButton({
            spritename: "check",
            x: this.padding.x - 30 + (this.dialogwidth / 2),
            y : this.padding.y + this.textHeight + 50,
            z: 5,
            parentMenu: this,
            callback : function() {
            	me.game.world.removeChild(this.parentMenu);
            }
        });

        confirm.enableEvents();

		this.addChild(confirm);
	},

	getWords: function(text) {
        var totalSize = 0;
        var wordSize = 0;
        var substrings = [];
        var substringsCounter = 0;
        var counter = 0;
        var words = text.split(" ");
        while (typeof(words[counter]) !== 'undefined') {
            wordSize = this.font.measureText(me.CanvasRenderer.getContext(), words[counter] + " ").width;
            if (counter != 0 && wordSize + totalSize > this.textWidth) {
                totalSize = wordSize;
                substringsCounter++;
                substrings[substringsCounter] = words[counter];
            }
            else {
                totalSize += wordSize;
                if (typeof(substrings[substringsCounter]) === 'undefined') {
                    substrings[substringsCounter] = words[counter];
                }
                else {
                    substrings[substringsCounter] += " " + words[counter];
                }
            }
            counter++;
        }
        return substrings;
    },

	draw : function (renderer, rect) {
		this._super(me.Container, "draw", [renderer, rect]);

        var offset = 0;
        for (var i = 0; i < this.rows.length; i++) {
            this.font.draw(
                renderer.getContext(),
                this.rows[i],
                this.padding.x + this.textOffset.x,
                this.padding.y + this.textOffset.y + offset
            );
            offset += (this.font.height * 1.1);
        }
	}
});