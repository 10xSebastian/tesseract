var Star = function(x, y, maxSpeed) {
    this.x = x;
    this.y = y;
    this.slope = y / x; // This only works because our origin is always (0,0)
    this.opacity = 0;
    this.speed = Math.max(Math.random() * maxSpeed, 1);
};

Star.prototype.distanceTo = function(originX, originY) {
    return Math.sqrt(Math.pow(originX - this.x, 2) + Math.pow(originY - this.y, 2));
};

Star.prototype.resetPosition = function(x, y, maxSpeed) {
    Star.apply(this, arguments);
    return this;
};

var BigBang = {

    getRandomStar: function(minX, minY, maxX, maxY, maxSpeed) {
        var coords = BigBang.getRandomPosition(minX, minY, maxX, maxY);
        return new Star(coords.x, coords.y, maxSpeed);
    },

    getRandomPosition: function(minX, minY, maxX, maxY) {
        return {
            x: Math.floor((Math.random() * maxX) + minX),
            y: Math.floor((Math.random() * maxY) + minY)
        };
    }
};

var StarField = function(canvasElem, color) {
    this.canvasElem = canvasElem;
    this.container = canvasElem.parentElement;
    this.canvas = this.canvasElem.getContext('2d');
    this.color = color;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    this.starField = [];
};

StarField.prototype._updateStarField = function() {
    var i, 
        star, 
        randomLoc, 
        increment;

    for (i = 0; i < this.numStars; i++) {
        star = this.starField[i];
        
        increment = Math.min(star.speed, Math.abs(star.speed / star.slope));
        star.x += (star.x > 0) ? increment : -increment;
        star.y = star.slope * star.x;
        
        star.opacity += star.speed / 100;
        
        // Recycle star obj if it goes out of the frame
        if ((Math.abs(star.x) > this.width / 2) || 
            (Math.abs(star.y) > this.height / 2)) {
            //randomLoc = BigBang.getRandomPosition(
            //    -this.width / 2, -this.height / 2, 
            //       this.width, this.height
            //);
            randomLoc = BigBang.getRandomPosition(
                -this.width / 10, -this.height / 10, 
                   this.width / 5, this.height / 5
            );
            star.resetPosition(randomLoc.x, randomLoc.y, this.maxStarSpeed);
        }
    }
};

StarField.prototype._renderStarField = function() {
    var i,
        star;
    // Background
    if (Math.random()>0.9) {
        this.canvas.fillStyle = "rgba("+this.color+", .1)";
        this.canvas.fillRect(0, 0, this.width, this.height);
    }
        
    // Stars
    for (i = 0; i < this.numStars; i++) {
        star = this.starField[i];
        this.canvas.fillStyle = "rgba(255, 255, 255, " + star.opacity + ")";
        this.canvas.fillRect(
            star.x + this.width / 2, 
            star.y + this.height / 2, 
            2, 2);
    }
};

StarField.prototype._renderFrame = function(elapsedTime) {
    var timeSinceLastFrame = elapsedTime - (this.prevFrameTime || 0);
    
    window.requestAnimationFrame(this._renderFrame.bind(this));

    // Skip frames unless at least 30ms have passed since the last one
    // (Cap to ~30fps)
    if (timeSinceLastFrame >= 30 || !this.prevFrameTime) {
        this.prevFrameTime = elapsedTime;
        this._updateStarField();
        this._renderStarField();
    }
};

StarField.prototype._adjustCanvasSize = function(width, height) {
    // Set the canvas size to match the container ID (and cache values)
    this.width = this.canvasElem.width = width || this.container.offsetWidth;
    this.height = this.canvasElem.height = height || this.container.offsetHeight;
};

StarField.prototype._watchCanvasSize = function(elapsedTime) {
    var timeSinceLastCheck = elapsedTime - (this.prevCheckTime || 0),
        width,
        height;

    window.requestAnimationFrame(this._watchCanvasSize.bind(this));

    if (timeSinceLastCheck >= 333 || !this.prevCheckTime) {
        this.prevCheckTime = elapsedTime;
        width = this.container.offsetWidth;
        height = this.container.offsetHeight;
        if (this.oldWidth !== width || this.oldHeight !== height) {
            this.oldWidth = width;
            this.oldHeight = height;
            this._adjustCanvasSize(width, height);
        }
    }
};

StarField.prototype._initScene = function(numStars) {
    var i;
    for (i = 0; i < this.numStars; i++) {
        this.starField.push(
            BigBang.getRandomStar(-this.width / 2, -this.height / 2, this.width, this.height, this.maxStarSpeed)
        );
    }

    // Intervals not stored because I don't plan to detach them later...
    window.requestAnimationFrame(this._renderFrame.bind(this));
    window.requestAnimationFrame(this._watchCanvasSize.bind(this));
};

StarField.prototype.render = function(numStars, maxStarSpeed) {
    this.numStars = numStars || 100;
    this.maxStarSpeed = maxStarSpeed || 3;

    this._initScene(this.numStars);
};

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

jQuery(function(){
    if(BrowserDetection.match([{name: "Chrome"}, {name: "Opera"}])){    
        $('.tesseract').removeClass('display-none');
        $('.tesseract-starfield').each(function(i, el){
          new StarField(el, '180,180,255').render(333, 3);
        });
        $('.tesseract-image').addClass('display-none');
    }

    if(BrowserDetection.match([{name: "Chrome"}, {name: "Firefox"}, {name: "Opera"}])){
      new StarField($('.starfield-canvas')[0], '0,0,0').render(333, 3);
    } else {
        $('.starfield-image').removeClass('display-none');
        $('.starfield-canvas').remove();
    }
});