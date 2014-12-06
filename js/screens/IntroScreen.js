 /** 
	* a default loading screen
	* @memberOf me
	* @ignore
	* @constructor
	*/
game.Screen.IntroScreen = me.ScreenObject.extend({
	// call when the loader is resetted
	onResetEvent : function () {
		me.game.reset();

		//Main background
		me.game.world.addChild(new me.ImageLayer("introscreenbackground", 800, 600, "introscreenbg", 1));

		$("#hidden").append('<video id="introvid1"><source autoplay="false" src="data/vid/3DOLOGO.ogv" type="video/ogg"></video>');
		$("#hidden").append('<video id="introvid2"><source autoplay="false" src="data/vid/NWCLOGO.ogv" type="video/ogg"></video>');
		$("#hidden").append('<video id="introvid3"><source autoplay="false" src="data/vid/H3INTRO.ogv" type="video/ogg"></video>');

		var video = document.getElementById("introvid1");
		video.removeAttribute("controls");
		video = document.getElementById("introvid2");
		video.removeAttribute("controls");
		video = document.getElementById("introvid3");
		video.removeAttribute("controls");

	    var ctx = me.CanvasRenderer.getContext();

	    playVideo(ctx, 1);
	},

	// destroy object at end of loading
	onDestroyEvent : function () {
		$("#introvid1, #introvid2, #introvid3").remove();
	}
});

function playVideo(ctx, i) {
	v = document.getElementById('introvid'+i);
	v.play();

	me.input.registerPointerEvent("pointerdown", new me.Rect(76,183,648,367), function(){
		v.pause();
	});

    draw(v, ctx);

	v.onended = v.onpause = function(e) {
		if(i+1 > 3) {
			me.state.set(me.state.MENU, new game.Screen.MainMenu());
   			me.state.change(me.state.MENU);
		} else {
			playVideo(ctx, i+1);
		}

		return;
	};

	return;
}

function draw(v,c) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,76,183,648,367);
    setTimeout(draw,20,v,c);
}