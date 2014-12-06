game.MenuButton = me.GUI_Object.extend({
	init: function(settings) {
		settings = $.extend({}, game.sprites.button[settings.spritename], settings);

		this._super(me.GUI_Object, "init", [settings.x, settings.y, settings]);
		this.parentMenu = settings.parentMenu;
		this.subMenu = settings.subMenu;
		this.callback = settings.callback;
		this.name = settings.spritename;
		this.z = settings.z;
		this.offset.x = settings.state.normal.x || 0;
		this.offset.y = settings.state.normal.y || 0;
		this.hover = false;
		this.isClicked = false;
		this.isSelected = false; //Wheter or not to keep the button active, in a "selected" state
		this.settings = settings;

		if(typeof settings.canBeSelected !== "boolean") {
			this.canBeSelected = false;
		} else {
			this.setSelected(settings.isSelected);
		}

		if(typeof settings.isDisabled !== "boolean") {
			this.isDisabled = false;
		} else {
			this.setDisabled(settings.isDisabled);
		}

		this.disableEvents();
	},

	/**
     * mousemove function
     */
    onHover: function (event) {
    	//Make sure we can actually hover over the object and our mouse is within the rectangle of the object's x/y coords
        this.hover = this.inViewport && this.getBounds().containsPoint(event.gameX, event.gameY);

        if(this.isClicked === false && this.isSelected === false && this.isDisabled === false) {
        	this.updated = true;

        	if(this.hover === true && typeof(this.settings.state.hover) !== "undefined") {
        		this.offset.x = this.settings.state.hover.x || this.settings.state.normal.x || 0;
				this.offset.y = this.settings.state.hover.y || this.settings.state.normal.y || 0;
			} else {
				this.offset.x = this.settings.state.normal.x || 0;
				this.offset.y = this.settings.state.normal.y || 0;
			}
        }
    },

	onClick: function(e) {
		// Only do stuff when our container is in the world.
		if (!this.parentMenu.ancestor || this.isDisabled === true) {
			return;
		}

		this.isClicked = true;
		this.updated = true;

		me.audio.play("button");

		if(this.canBeSelected === true) {
			this.setSelected((this.isSelected === true) ? false : true);
		}

		if(typeof(this.settings.state.active) !== "undefined" || this.isSelected === true) {
			this.offset.x = this.settings.state.active.x || this.settings.state.normal.x || 0;
			this.offset.y = this.settings.state.active.y || this.settings.state.normal.y || 0;
		} else {
			this.offset.x = this.settings.state.normal.x || 0;
			this.offset.y = this.settings.state.normal.y || 0;
		}
	},

	onRelease: function(e) {
		// Only do stuff when our container is in the world.
		if (!this.parentMenu.ancestor || this.isDisabled === true) {
			return;
		}

		this.isClicked = false;
		this.updated = true;

		if(typeof(this.settings.state.hover) !== "undefined" && this.isSelected !== true) {
			this.offset.x = this.settings.state.hover.x || this.settings.state.normal.x || 0;
			this.offset.y = this.settings.state.hover.y || this.settings.state.normal.y || 0;
		} else {
			this.offset.x = this.settings.state.normal.x || 0;
			this.offset.y = this.settings.state.normal.y || 0;
		}

		//In case a submenu is activated, run this
		if (this.subMenu) {
			// Remove my parent menu
			if (this.parentMenu) {
				me.game.world.removeChild(this.parentMenu, true);
			}
 
			// Add the new submenu
			this.subMenu.parentMenu = this.parentMenu;
			me.game.world.addChild.defer(me.game.world, this.subMenu);
		}
 
		//In case a callback is set, run this
		if (this.callback) {
			this.callback(this);
		}	
	},

	setSelected: function(state) {
		if(this.canBeSelected === true) {
			if(typeof state === "boolean") {
				this.isSelected = state;
				if(state === true) {
					this.offset.x = this.settings.state.active.x || this.settings.state.normal.x || 0;
					this.offset.y = this.settings.state.active.y || this.settings.state.normal.y || 0;
				} else {
					this.offset.x = this.settings.state.normal.x || 0;
					this.offset.y = this.settings.state.normal.y || 0;
				}
			} else {
				console.error("Invalid variable-type passed for 'type'");
			}

			this.updated = true;
		}
	},

	setDisabled: function(state) {
		if(typeof state === "boolean") {
			this.isDisabled = state;
			if(state === true) {
				this.offset.x = this.settings.state.inactive.x || this.settings.state.normal.x || 0;
				this.offset.y = this.settings.state.inactive.y || this.settings.state.normal.y || 0;
			} else {
				this.offset.x = this.settings.state.normal.x || 0;
				this.offset.y = this.settings.state.normal.y || 0;
			}
		} else {
			console.error("Invalid variable-type passed for 'type'");
			this.isDisabled = false;
		}

		this.updated = true;
	},

	enableEvents: function() {
		me.input.registerPointerEvent("pointermove", me.game.world, this.onHover.bind(this));
		me.input.registerPointerEvent("pointerdown", this, this.clicked.bind(this));
        me.input.registerPointerEvent("pointerup", this, this.release.bind(this));
	},

	disableEvents: function () {
		me.input.releasePointerEvent("pointerup", this);
		me.input.releasePointerEvent("pointerdown", this);
		me.input.releasePointerEvent("pointermove", this);
	}
});


game.MenuItem = me.GUI_Object.extend({
	init : function (settings) {
		// super constructor
		this._super(me.GUI_Object, "init", [settings.x, settings.y, settings]);

		//this.pos = new me.Vector2d(settings.x, settings.y);
		//this.image = me.loader.getImage(settings.image);
		this.parentMenu = settings.parentMenu;
		this.subMenu = settings.subMenu;
		this.callback = settings.callback;
		this.z = settings.z;
 
		this.name = "MenuItem";

		//game.MenuItem objects are pure for the looks, they have no events
		this.disableEvents();
	},
 
	onClick : function (e) {
		// Only do stuff when our container is in the world.
		if (!this.parentMenu.ancestor) {
			return;
		}
 
		//In case a submenu is activated, run this
		if (this.subMenu) {

			// Remove my parent menu
			if (this.parentMenu) {
				me.game.world.removeChild(this.parentMenu, true);
			}
 
			// Add the new submenu
			this.subMenu.parentMenu = this.parentMenu;
			me.game.world.addChild.defer(me.game.world, this.subMenu);
		}
 
		//In case a callback is set, run this
		if (this.callback) {
			this.callback(this);
		}
	},

	disableEvents: function () {
		this._super(me.GUI_Object, "onDestroyEvent");
	}
});
 
game.Menu = me.Container.extend({
	init : function (settings) {
		this._super(me.Container, "init", [ 500, 0, me.game.viewport.getWidth(), me.game.viewport.getHeight() ]);

		this.parentMenu = null;
		this.name = "Menu";

		this.addChild.defer(me.game.world, new me.ImageLayer("mainmenubackground", me.game.viewport.getWidth(), me.game.viewport.getHeight(), settings.backgroundimage, 2));
	},
 
	addMenuItem : function (settings) {
		settings.parentMenu = this;
		var menuItem = new game.MenuItem(settings);
		this.addChild.defer(this, new game.MenuItem(settings));

		return menuItem;
	},

	addMenuButton : function (settings) {
		settings.parentMenu = this;
		var menuButton = new game.MenuButton(settings);
		this.addChild.defer(this, new game.MenuButton(settings));

		return menuButton;
	},
 
	goBack : function () {
		if (this.parentMenu) {
			me.game.world.removeChild(this, true);
			me.game.world.addChild.defer(me.game.world, this.parentMenu);
		}
	},

	onActivateEvent : function() {
        for(var i = 0; i<this.children.length; i++) {
            if(typeof this.children[i].enableEvents === "function") {
                this.children[i].enableEvents();
            }
        }
	},

	onDeactivateEvent : function() {
		for(var i = 0; i<this.children.length; i++) {
			if(typeof this.children[i].disableEvents === "function") {
				this.children[i].disableEvents();
			}
		}
	}
});