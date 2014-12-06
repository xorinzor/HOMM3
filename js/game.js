var STATE_INTRO = me.state.USER + 0;

me.sys.pauseOnBlur = false;

/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0
    },

    //Object to contain all the screens
    Screen: {},

    // Run on page load.
    "onload" : function () {
    // Initialize the video.
    if (!me.video.init("screen",  me.video.CANVAS, 800, 600, true, 0)) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // add "#debug" to the URL to enable the debug Panel
    if (document.location.hash === "#debug") {
        window.onReady(function () {
            me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
        });
    }

    // Initialize the audio.
    me.audio.init("mp3,ogg");

    // Set a callback to run when loading is complete.
    me.loader.onload = this.loaded.bind(this);

    me.loader.load({ name: "loadingscreen", type:"image", src:"data/img/bg/loadscreen.jpg" },
    function() {
        // Load the resources.
        me.loader.preload(game.resources.ui);

        // Initialize melonJS and display a loading screen.
        me.state.set(me.state.LOADING, new game.Screen.CustomLoadingScreen());
        me.state.change(me.state.LOADING);
    });
},

    // Run on game resources loaded.
    "loaded" : function () {
        //me.state.set(STATE_INTRO, new game.Screen.IntroScreen());
        //me.state.change(STATE_INTRO);
        me.state.set(me.state.MENU, new game.Screen.MainMenu());
        me.state.change(me.state.MENU);
    }
};
