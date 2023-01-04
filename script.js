//<![CDATA[
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
    var transformProperty = getSupportedPropertyName(transforms);
    var snowflakes = [];
    var browserWidth;
    var browserHeight;
    var resetPosition = false;
    function setup() {
        window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
        window.addEventListener("resize", setResetFlag, false)
    }
    setup();
    function getSupportedPropertyName(b) {
        for (var a = 0; a < b.length; a++) {
            if (typeof document.body.style[b[a]] != "undefined") {
                return b[a]
            }
        }
        return null
    }


    function setTranslate3DTransform(a, c, b) {
        var d = "translate3d(" + c + "px, " + b + "px, 0)";
        a.style[transformProperty] = d
    }
    function generateSnowflakes() {
        var b = document.querySelector(".snowflake");
        var h = b.parentNode;
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;
        for (var d = 0; d < numberOfSnowflakes; d++) {
            var j = b.cloneNode(true);
            h.appendChild(j);
            var e = getPosition(50, browserWidth);
            var a = getPosition(50, browserHeight);
            var c = _speed + Math.random() * 40;
            var g = 4 + Math.random() * 10;
            var f = new Snowflake(j,g,c,e,a);
            snowflakes.push(f)
        }
        h.removeChild(b);
        moveSnowflakes()
    }
    function moveSnowflakes() {
        for (var b = 0; b < snowflakes.length; b++) {
            var a = snowflakes[b];
            a.update()
        }
        if (resetPosition) {
            browserWidth = document.documentElement.clientWidth;
            browserHeight = document.documentElement.clientHeight;
            for (var b = 0; b < snowflakes.length; b++) {
                var a = snowflakes[b];
                a.xPos = getPosition(50, browserWidth);
                a.yPos = getPosition(50, browserHeight)
            }
            resetPosition = false
        }
        requestAnimationFrame(moveSnowflakes)
    }
    function getPosition(b, a) {
        return Math.round(-1 * b + Math.random() * (a + 2 * b))
    }
    function setResetFlag(a) {
        resetPosition = true
    }
    ;
    
