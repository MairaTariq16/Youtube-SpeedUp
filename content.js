//this file runs for current tab as set in manifest.json
console.log("YT speedup running")
var speed = 1

//maintain same playback speed during and after ads
var vid = document.getElementsByTagName('video')[0]
vid.onloadstart = function() { //detect ads
    vid.playbackRate = speed
};

chrome.runtime.onMessage.addListener(function(request) { //message received from popup.js
    speed = parseFloat(request)
    console.log("speed value", speed)
    var vid = document.getElementsByTagName('video')[0]
    vid.playbackRate = speed
})