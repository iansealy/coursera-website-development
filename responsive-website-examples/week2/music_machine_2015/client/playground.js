//playground.js

maxim = [];
for (var i = 0; i < 8; i++) {
    maxim[i] = new Maxim();
}
player = [];
player[0] = maxim[0].loadFile("drums1.wav");
player[1] = maxim[1].loadFile("bassline.wav");
player[2] = maxim[2].loadFile("arp.wav");
player[3] = maxim[3].loadFile("cymbal1.wav");
player[4] = maxim[4].loadFile("hihat2.wav");
player[5] = maxim[5].loadFile("snaredrum1.wav");
player[6] = maxim[6].loadFile("bassdrum1.wav");
player[7] = maxim[7].loadFile("riff.wav");
for (var i = 0; i < 8; i++) {
    player[i].setLooping(true);
}

playOne = function(i) {
    player[i].volume(1);
}

stopOne = function(i) {
    player[i].volume(0);
}

playAll = function() {
    for (var i = 0; i < 8; i++) {
        player[i].play();
    }
}

stopAll = function() {
    for (var i = 0; i < 8; i++) {
        player[i].stop();
    }
}

setSpeed = function(i, speed) {
    player[i].speed(speed);
}

setVolume = function(i, volume) {
    player[i].volume(volume);
}
