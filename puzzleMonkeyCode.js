class PuzzleMonkey {
    constructor() {
        this.puzzleHelper = new PuzzleHelper();
    }
}
class PuzzleHelper {
    isPuzzlePage() {
        return /\/puzzlegraj.\d\.php/.test(this.url);
    }
    constructor() {
        this.url = window.location.href;
        if (this.isPuzzlePage) {
            this.addListener();
        }
    }
    addListener() {
        this.largeImage = document.createElement('img');
        this.largeImage.id = 'PuzzleMonkeyLarge';
        this.largeImage.src = document.querySelector('img[style*="visibility: hidden"').src;
        this.largeImage.style='position: absolute; top: 0px; left: 0px; z-index: 9999; visibility: hidden; border: 24px solid blue;'
        this.largeImage.visibility = 'hidden';
        document.body.appendChild(this.largeImage);
        document.onkeypress = function (e) {
            if(e.keyCode === 126) {
                e = e || window.event;
                document.getElementById('PuzzleMonkeyLarge').style.width = document.getElementById('play').width * 0.5;
                document.getElementById('PuzzleMonkeyLarge').style.height = document.getElementById('play').height * 0.5;
                document.getElementById('PuzzleMonkeyLarge').style.visibility = document.getElementById('PuzzleMonkeyLarge').style.visibility == 'hidden' ? 'visible' : 'hidden';
            }
        };
    }
}
(function() {
    'use strict';
    let pm = new PuzzleMonkey();
})();