game.Screen.MainMenu = me.ScreenObject.extend({
	onResetEvent : function () {
		// Add the root menu to the game entity manager

		//me.audio.playTrack("mainmenu", 0.7);

		// Create menus
		this.rootMenu           		= new game.Menu({ backgroundimage:"mainmenubg1" });
		var NewGameMenu         		= new game.Menu({ backgroundimage:"mainmenubg1" });
		var LoadGameMenu        		= new game.Menu({ backgroundimage:"mainmenubg1" });

		//Multiplayer menu - New game
		var ServerNewMultiplayerGame 	= new game.Menu({ backgroundimage:"mainmenubg2" }); //create new server or join existing one - screen
		var CreateNewMultiplayerGame	= new game.Menu({ backgroundimage:"mainmenubg2" }); //creating / joining game - screen
 
		/**
		 * Main menu
		 */
		this.rootMenu.addMenuButton({
			spritename: "newgame",
			x : 540,
			y : 10,
			subMenu : NewGameMenu
		});
		this.rootMenu.addMenuButton({
			x : 537,
			y : 130,
			spritename: "loadgame",
			subMenu : LoadGameMenu
		});
		this.rootMenu.addMenuButton({
			spritename : "highscore",
			x : 527,
			y : 260,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		this.rootMenu.addMenuButton({
			spritename : "credits",
			x : 560,
			y : 370,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		this.rootMenu.addMenuButton({
			spritename : "quit",
			x : 589,
			y : 470,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Just close your browser! :D'
				}));
			}
		});
 
		/**
		 * Newgame menu
		 */
		NewGameMenu.addMenuItem({
			image: "newgame_label",
			x: 114,
			y: 312,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		NewGameMenu.addMenuButton({
			spritename: "singlescenario",
			x : 540,
			y : 10,
			callback: function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Multiplayer functionality is only available'
				}));
			}
		});
		NewGameMenu.addMenuButton({
			x : 560,
			y : 130,
			spritename: "multiplayer",
			subMenu : ServerNewMultiplayerGame
		});
		NewGameMenu.addMenuButton({
			spritename : "campaign",
			x : 540,
			y : 245,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		NewGameMenu.addMenuButton({
			spritename : "tutorial",
			x : 545,
			y : 365,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		NewGameMenu.addMenuButton({
			spritename : "back",
			x : 583,
			y : 465,
			callback : NewGameMenu.goBack.bind(NewGameMenu)
		});

		/**
		 * Loadgame menu
		 */
		LoadGameMenu.addMenuItem({
			image: "loadgame_label",
			x: 114,
			y: 312,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		LoadGameMenu.addMenuButton({
			spritename: "singlescenario",
			x : 540,
			y : 10,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		LoadGameMenu.addMenuButton({
			x : 560,
			y : 130,
			spritename: "multiplayer",
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		LoadGameMenu.addMenuButton({
			spritename : "campaign",
			x : 540,
			y : 245,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		LoadGameMenu.addMenuButton({
			spritename : "tutorial",
			x : 545,
			y : 365,
			callback : function() {
				me.game.world.addChild.defer(me.game.world, new game.Dialog({
					text: 'Not functional yet'
				}));
			}
		});
		LoadGameMenu.addMenuButton({
			spritename : "back",
			x : 583,
			y : 465,
			callback : LoadGameMenu.goBack.bind(LoadGameMenu)
		});

		//Add the content for the ServerNewMultiplayerGame container
		game.Screen.ServerNewMultiplayerGame(ServerNewMultiplayerGame);

		//Add the content for the CreateNewMultiplayerGame container
		game.Screen.CreateNewMultiplayerGame(CreateNewMultiplayerGame);


		me.game.world.addChild.defer(me.game.world, this.rootMenu);
		//me.game.world.addChild.defer(me.game.world, ServerNewMultiplayerGame);
	}
});