game.resources = {};

game.resources.ui = [
	/* Graphics.
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	{ name: "loadscreen",           type: "image",          src: "data/img/bg/loadscreen.jpg" },
	{ name: "mainmenubg1",          type: "image",          src: "data/img/bg/mainmenubg1.png" },
	{ name: "mainmenubg2",          type: "image",          src: "data/img/bg/mainmenubg2.png" },
	{ name: "introscreenbg",        type: "image",          src: "data/img/bg/introscreen.jpg" },
	{ name: "default_bg",        	type: "image",          src: "data/img/bg/default_bg.jpg" },
	{ name: "default_bg_rougher",   type: "image",          src: "data/img/bg/default_bg_rougher.jpg" },

	{ name: "mainmenu_buttons",     type: "image",          src: "data/img/ui/buttons/mainmenu_buttons_sprite.png" },
	{ name: "check_button",     	type: "image",          src: "data/img/ui/buttons/check_button_sprite.png" },
	{ name: "menu_buttons_sprite",  type: "image",          src: "data/img/ui/buttons/menu_buttons_sprite.png" },

	{ name: "newgame_label",     	type: "image",          src: "data/img/ui/labels/newgame_label.jpg" },
	{ name: "loadgame_label",     	type: "image",          src: "data/img/ui/labels/loadgame_label.jpg" },

	{ name: "dialog_topleft",     	type: "image",          src: "data/img/ui/dialog/topleft.png" },	
	{ name: "dialog_bottomleft",    type: "image",          src: "data/img/ui/dialog/bottomleft.png" },	
	{ name: "dialog_topright",     	type: "image",          src: "data/img/ui/dialog/topright.png" },	
	{ name: "dialog_bottomright",   type: "image",          src: "data/img/ui/dialog/bottomright.png" },	
	{ name: "dialog_topcenter",     type: "image",          src: "data/img/ui/dialog/topcenter.png" },	
	{ name: "dialog_bottomcenter",  type: "image",          src: "data/img/ui/dialog/bottomcenter.png" },	
	{ name: "dialog_leftcenter",    type: "image",          src: "data/img/ui/dialog/leftcenter.png" },	
	{ name: "dialog_rightcenter",   type: "image",          src: "data/img/ui/dialog/rightcenter.png" },	

	/* Interface elements
	 */
	{ name: "ScenarioSelectRightMultiplayerOverlay", 	type: "image", 			src: "data/img/ui/interface_elements/ScenarioSelectRightMultiplayerOverlay.png" },
	{ name: "MultiplayerGameSelection", 				type: "image", 			src: "data/img/ui/interface_elements/MultiplayerGameSelection.png" },
	{ name: "ScenarioSelectLeft", 						type: "image", 			src: "data/img/ui/interface_elements/ScenarioSelectLeft.png" },
	{ name: "ScenarioSelectRight", 						type: "image", 			src: "data/img/ui/interface_elements/ScenarioSelectRight.png" },
	{ name: "AdvOptionsLeft", 							type: "image", 			src: "data/img/ui/interface_elements/AdvOptionsLeft.png" },

	/* Texture Atlases
	 * @example
	 * {name: "texture", type: "json", src: "data/img/example_tps.json"},
	 */

	/* Maps.
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
	  */

	/* Background music.
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */
	{ name: "mainmenu", type: "audio", src: "data/bgm/" },

	/* Sound effects.
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
	{name: "button", type: "audio", src: "data/sfx/"}
];
