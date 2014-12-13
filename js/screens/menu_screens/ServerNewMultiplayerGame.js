game.Screen.ServerNewMultiplayerGame = function(container) {
	/*
	 * Parameters
	 */

	/*
	 * Init() code
	 */
	var centerX = (me.game.viewport.getWidth() / 2) - 227;
	var centerY = (me.game.viewport.getHeight() / 2) - 245;

	container.addMenuItem({
		image: "MultiplayerGameSelection",
		x: centerX,
		y: centerY,
		z: 2,
		callback: function() {

		}
	});

	container.addChild.defer(container, new me.CustomImageLayer(centerX + 17, centerY + 80, "default_bg_blue_dark", 336, 331, "default_bg_blue_dark", 3));

	container.addMenuButton({
		spritename: "gold_mp_host",
		x: centerX + 373,
		y: centerY + 80,
		z: 4,
		callback: function() {

		}
	});

	container.addMenuButton({
		spritename: "gold_mp_join",
		x: centerX + 373,
		y: centerY + 135,
		z: 4,
		isDisabled: true,
		callback: function() {

		}
	});

	container.addMenuButton({
		spritename: "gold_mp_search",
		x: centerX + 373,
		y: centerY + 190,
		z: 4,
		callback: function() {

		}
	});

	container.addMenuButton({
		spritename: "gold_mp_direct",
		x: centerX + 373,
		y: centerY + 245,
		z: 4,
		callback: function() {

		}
	});

	container.addMenuButton({
		spritename: "gold_cancel",
		x: centerX + 373,
		y: centerY + 424,
		z: 4,
		callback : container.goBack.bind(container)
	});
	
}