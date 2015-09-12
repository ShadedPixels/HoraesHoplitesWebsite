<!DOCTYPE html>
<html>
<head>
    <title>Example Easel.js page by AK</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href='<g:resource dir="css" file="play_page.css" />' type="text/css" media="all"/>

    <script src="https://code.createjs.com/createjs-2015.05.21.min.js"></script>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.14/peer.min.js"></script>
    <script src="http://code.jquery.com/qunit/qunit-1.19.0.js"></script>



    <script src='<g:resource dir="javascripts" file="bundle.js"/>'></script>


</head>

<body onload="sidescroller_game.run('test');">
    <div id="canvas_container">

        <canvas id="display_canvas"  height="600px">
            If you see this, you browser doesn't support HTML5 canvas element.
        </canvas>

        <canvas id="debug_canvas" height="600px">
            If you see this, you browser doesn't support HTML5 canvas element.
        </canvas>

    </div>
</body>

</html>