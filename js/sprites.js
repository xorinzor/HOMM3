game.sprites = {
	button: {
		/*
		<spritename>: {
			image: <image_name_from_resources.js>,
			spritewidth: <the_width_of_a_frame_in_the_sprite>,
			spriteheight: <the_height_of_a_frame_in_the_sprite>,
			state: {
				<state_of_the_sprite>: {
					x: <the_x_offset_within_the_sprite_for_this_state>,
					x: <the_y_offset_within_the_sprite_for_this_state>,
				}
			}
		}
		*/

		newgame: {
			image: "mainmenu_buttons", spritewidth: 207, spriteheight: 121,
			state: {
				normal: { x: 0,		y: 0 },
				hover: 	{ x: 207,	y: 0 },
				active: { x: 414,	y: 0 }
			}
		},

		loadgame: {
			image: "mainmenu_buttons", spritewidth: 224, spriteheight: 120,
			state: {
				normal: { x: 0,		y: 121 },
				hover: 	{ x: 224,	y: 121 },
				active: { x: 448,	y: 121 }
			}
		},

		highscore: {
			image: "mainmenu_buttons", spritewidth: 237, spriteheight: 106,
			state: {
				normal: { x: 0,		y: 241 },
				hover: 	{ x: 237,	y: 241 },
				active: { x: 474,	y: 241 }
			}
		},
		
		credits: {
			image: "mainmenu_buttons", spritewidth: 172, spriteheight: 110,
			state: {
				normal: { x: 0,		y: 347 },
				hover: 	{ x: 172,	y: 347 },
				active: { x: 344,	y: 347 }
			}
		},
		
		quit: {
			image: "mainmenu_buttons", spritewidth: 109, spriteheight: 101,
			state: {
				normal: { x: 0,		y: 457 },
				hover: 	{ x: 109,	y: 457 },
				active: { x: 218,	y: 457 }
			}
		},
		
		singlescenario: {
			image: "mainmenu_buttons", spritewidth: 202, spriteheight: 123,
			state: {
				normal: { x: 0,		y: 558 },
				hover: 	{ x: 202,	y: 558 },
				active: { x: 404,	y: 558 }
			}
		},

		multiplayer: {
			image: "mainmenu_buttons", spritewidth: 158, spriteheight: 120,
			state: {
				normal: { x: 0,		y: 681 },
				hover: 	{ x: 158,	y: 681 },
				active: { x: 316,	y: 681 }
			}
		},

		campaign: {
			image: "mainmenu_buttons", spritewidth: 204, spriteheight: 131,
			state: {
				normal: { x: 0,		y: 801 },
				hover: 	{ x: 204,	y: 801 },
				active: { x: 408,	y: 801 }
			}
		},

		tutorial: {
			image: "mainmenu_buttons", spritewidth: 205, spriteheight: 108,
			state: {
				normal: { x: 0,		y: 932 },
				hover: 	{ x: 205,	y: 932 },
				active: { x: 410,	y: 932 }
			}
		},

		back: {
			image: "mainmenu_buttons", spritewidth: 127, spriteheight: 107,
			state: {
				normal: { x: 0,		y: 1040 },
				hover: 	{ x: 127,	y: 1040 },
				active: { x: 254,	y: 1040 }
			}
		},

		check: {
			image: "check_button", spritewidth: 63, spriteheight: 30,
			state: {
				normal: { x: 0, 	y: 0 },
				active: { x: 63, 	y: 0 }
			}
		},

		/**
		 *
		 * menu buttons
		 *
		 **/

		begingame: {
			image: "menu_buttons_sprite", spritewidth: 166, spriteheight: 40,
			state: {
				normal: 	{ x: 0, 	y: 0 },
				active: 	{ x: 166,	y: 0 },
				inactive: 	{ x: 332,	y: 0 }
			}
		},

		back_gold: {
			image: "menu_buttons_sprite", spritewidth: 166, spriteheight: 40,
			state: {
				normal: 	{ x: 0, 	y: 40 },
				active: 	{ x: 166, 	y: 40 }
			}
		},

		load_gold: {
			image: "menu_buttons_sprite", spritewidth: 260, spriteheight: 40,
			state: {
				normal: 	{ x: 0, 	y: 80 },
				active: 	{ x: 260, 	y: 80 }
			}
		},

		cancel_gold: {
			image: "menu_buttons_sprite", spritewidth: 260, spriteheight: 40,
			state: {
				normal: 	{ x: 0, 	y: 120 },
				active: 	{ x: 260, 	y: 120 }
			}
		},

		smallbutton: {
			image: "menu_buttons_sprite", spritewidth: 128, spriteheight: 20,
			state: {
				normal: 	{ x: 0, 	y: 160 },
				active: 	{ x: 128, 	y: 160 }
			}
		},

		largebutton: {
			image: "menu_buttons_sprite", spritewidth: 200, spriteheight: 20,
			state: {
				normal: 	{ x: 0, 	y: 180 },
				active: 	{ x: 200, 	y: 180 },
				inactive: 	{ x: 400, 	y: 180 }
			}
		},

		chess_pawn: {
			image: "menu_buttons_sprite", spritewidth: 30, spriteheight: 46,
			state: {
				normal: 	{ x: 0, 	y: 200 },
				hover: 		{ x: 30, 	y: 200 },
				active: 	{ x: 60, 	y: 200 },
				inactive: 	{ x: 90, 	y: 200 }
			}
		},

		chess_horse: {
			image: "menu_buttons_sprite", spritewidth: 30, spriteheight: 46,
			state: {
				normal: 	{ x: 120, 	y: 200 },
				hover: 		{ x: 150, 	y: 200 },
				active: 	{ x: 180, 	y: 200 },
				inactive: 	{ x: 210, 	y: 200 }
			}
		},

		chess_tower: {
			image: "menu_buttons_sprite", spritewidth: 30, spriteheight: 46,
			state: {
				normal: 	{ x: 240, 	y: 200 },
				hover: 		{ x: 270, 	y: 200 },
				active: 	{ x: 300, 	y: 200 },
				inactive: 	{ x: 330, 	y: 200 }
			}
		},

		chess_queen: {
			image: "menu_buttons_sprite", spritewidth: 30, spriteheight: 46,
			state: {
				normal: 	{ x: 360, 	y: 200 },
				hover: 		{ x: 390, 	y: 200 },
				active: 	{ x: 420, 	y: 200 },
				inactive: 	{ x: 450, 	y: 200 }
			}
		},

		chess_king: {
			image: "menu_buttons_sprite", spritewidth: 30, spriteheight: 46,
			state: {
				normal: 	{ x: 480, 	y: 200 },
				hover: 		{ x: 510, 	y: 200 },
				active: 	{ x: 540, 	y: 200 },
				inactive: 	{ x: 570, 	y: 200 }
			}
		},

		gold_check: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 32,
			state: {
				normal: 	{ x: 0, 	y: 246 },
				hover: 		{ x: 64, 	y: 246 },
				active: 	{ x: 128, 	y: 246 },
				inactive: 	{ x: 192, 	y: 246 }
			}
		},

		gold_cancel: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 32,
			state: {
				normal: 	{ x: 0, 	y: 278 },
				hover: 		{ x: 64, 	y: 278 },
				active: 	{ x: 128, 	y: 278 },
				inactive: 	{ x: 192, 	y: 278 }
			}
		},

		gold_exit: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 32,
			state: {
				normal: 	{ x: 0, 	y: 310 },
				hover: 		{ x: 64, 	y: 310 },
				active: 	{ x: 128, 	y: 310 },
				inactive: 	{ x: 192, 	y: 310 }
			}
		},

		/**
		 * Multiplayer server select buttons
		 */
		gold_mp_host: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 48,
			state: {
				normal: 	{ x: 0, 	y: 342 },
				hover: 		{ x: 64, 	y: 342 },
				active: 	{ x: 128, 	y: 342 },
				inactive: 	{ x: 192, 	y: 342 }
			}
		},

		gold_mp_join: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 48,
			state: {
				normal: 	{ x: 0, 	y: 390 },
				hover: 		{ x: 64, 	y: 390 },
				active: 	{ x: 128, 	y: 390 },
				inactive: 	{ x: 192, 	y: 390 }
			}
		},

		gold_mp_search: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 48,
			state: {
				normal: 	{ x: 0, 	y: 438 },
				hover: 		{ x: 64, 	y: 438 },
				active: 	{ x: 128, 	y: 438 },
				inactive: 	{ x: 192, 	y: 438 }
			}
		},

		gold_mp_direct: {
			image: "menu_buttons_sprite", spritewidth: 64, spriteheight: 48,
			state: {
				normal: 	{ x: 0, 	y: 486 },
				hover: 		{ x: 64, 	y: 486 },
				active: 	{ x: 128, 	y: 486 },
				inactive: 	{ x: 192, 	y: 486 }
			}
		}
	},

	server_status: {
		available: 	{ x: 0, y: 0 },
		closed: 	{ x: 23, y: 0 },
		password: 	{ x: 46, y: 0 }
	},

	dialog: {
		normal: {
			topleft: 		{ x: 0, 	y: 0, spritewidth: 64, spriteheight: 64 },
			bottomleft: 	{ x: 64, 	y: 0, spritewidth: 64, spriteheight: 64 },
			topright: 		{ x: 128, 	y: 0, spritewidth: 64, spriteheight: 64 },
			bottomright: 	{ x: 192, 	y: 0, spritewidth: 64, spriteheight: 64 },
			topcenter: 		{ x: 256, 	y: 0, spritewidth: 64, spriteheight: 64 },
			bottomcenter: 	{ x: 320, 	y: 0, spritewidth: 64, spriteheight: 64 },
			leftcenter: 	{ x: 384, 	y: 0, spritewidth: 64, spriteheight: 64 },
			rightcenter: 	{ x: 448, 	y: 0, spritewidth: 64, spriteheight: 64 },
		}
	}
};