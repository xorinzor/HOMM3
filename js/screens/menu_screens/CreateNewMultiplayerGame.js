game.Screen.CreateNewMultiplayerGame = function(container) {
	/*
	 * Parameters
	 */
	this.menuOpened = false;
	this.levelListOpened = false;
	this.advancedOptionsOpened = false;
	this.levelList = null;
	this.advancedOptions = null;

	/* 
	 * functions 
	 */

	this.openLevelList = function() {
		if(this.menuOpened) {
			this.closeLevelList();
			this.closeAdvancedOptions();
		}

		if(typeof this.levelList !== "object") {
			this.levelList = container.addMenuItem({
				image: "ScenarioSelectLeft",
				x: 22,
				y: 10,
				z: 2,
				callback : function() {
					return;
				}
			});
		} else {
			me.game.world.addChild.defer(me.game.world, this.levelList);
		}
	};

	this.closeLevelList = function() {
		if(this.levelListOpened === true) {
			me.game.world.removeChild(this.levelList, true);
		}
	};

	this.openAdvancedOptions = function() {
		if(this.menuOpened) {
			this.closeLevelList();
			this.closeAdvancedOptions();
		}
		if(typeof this.advancedOptions !== "object") {
			this.advancedOptions = container.addMenuItem({
				image: "AdvOptionsLeft",
				x: 22,
				y: 10,
				z: 2,
				callback : function() {
					return;
				}
			});
		} else {
			me.game.world.addChild.defer(me.game.world, this.levelList);
		}
	};

	this.closeAdvancedOptions = function() {
		if(this.advancedOptionsOpened === true) {
			me.game.world.removeChild(this.advancedOptions, true);
		}
	};

	/*
	 * Init() code
	 */

	//Right part
	container.addMenuItem({
		image: "ScenarioSelectRight",
		x: 415,
		y: 10,
		z: 1,
		callback : function() {
			return;
		}
	});

	var startButton = container.addMenuButton({
		spritename: "begingame",
		x: 433,
		y: 527,
		z: 2,
		isDisabled: true,
		callback : function() {
			return;
		}
	});

	container.addMenuButton({
		spritename: "back_gold",
		x: 603,
		y: 527,
		z: 2,
		callback : container.goBack.bind(container)
	});
}