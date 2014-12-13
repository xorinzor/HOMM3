<!DOCTYPE HTML>
<html>
	<head>
		<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">

		<title>Heroes 3 browser version</title>
		
		<link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
		<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="apple-touch-icon" href="icons/touch-icon-iphone-60x60.png">
        <link rel="apple-touch-icon" sizes="76x76" href="icons/touch-icon-ipad-76x76.png">
        <link rel="apple-touch-icon" sizes="120x120" href="icons/touch-icon-iphone-retina-120x120.png">
        <link rel="apple-touch-icon" sizes="152x152" href="icons/touch-icon-ipad-retina-152x152.png">
	</head>
	<body>
		<div id="hidden"></div>

		<div id="container">
			<div style="margin: 5px auto 10px auto; width: 190px;">
				<img src="data/img/Logo.jpg" alt="Heroes III of Might and Magic" />
			</div>

			<div id="game">
				<div id="screen"></div>
			</div>
		</div>


		<!-- melonJS Library -->
		<!-- build:js js/app.min.js -->
		<script type="text/javascript" src="lib/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="lib/melonJS-2.0.1.js"></script>

		<!-- Plugin(s) -->
		<script type="text/javascript" src="lib/plugins/debug/debugPanel.js"></script>
		
		<script type="text/javascript" src="js/classes/CustomImageLayer.js"></script>

		<!-- Game Scripts -->
		<script type="text/javascript" src="js/game.js"></script>
		<script type="text/javascript" src="js/resources.js"></script>
		<script type="text/javascript" src="js/sprites.js"></script>
		<script type="text/javascript" src="js/dialog.js"></script>
		<script type="text/javascript" src="js/menu.js"></script>

		<script type="text/javascript" src="js/entities/entities.js"></script>
		<script type="text/javascript" src="js/entities/HUD.js"></script>

		<script type="text/javascript" src="js/screens/CustomLoadingScreen.js"></script>
		<script type="text/javascript" src="js/screens/IntroScreen.js"></script>
		
		<script type="text/javascript" src="js/screens/menu_screens/ServerNewMultiplayerGame.js"></script>
		<script type="text/javascript" src="js/screens/menu_screens/CreateNewMultiplayerGame.js"></script>
		<script type="text/javascript" src="js/screens/MainMenu.js"></script>

		<!-- /build -->
		<!-- Bootstrap & Mobile optimization tricks -->
		<script type="text/javascript">
			window.onReady(function onReady() {
				game.onload();

				// Mobile browser hacks
				if (me.device.isMobile && !navigator.isCocoonJS) {
					// Prevent the webview from moving on a swipe
					window.document.addEventListener("touchmove", function (e) {
						e.preventDefault();
						window.scroll(0, 0);
						return false;
					}, false);

					// Scroll away mobile GUI
					(function () {
						window.scrollTo(0, 1);
						me.video.onresize(null);
					}).defer();

					me.event.subscribe(me.event.WINDOW_ONRESIZE, function (e) {
						window.scrollTo(0, 1);
					});
				}
			});
		</script>
	</body>
</html>
