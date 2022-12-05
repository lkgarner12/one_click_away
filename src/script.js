import './style.css'
import * as THREE from 'three'

/**
 * States
 */
const States = {
    intro: 0,
    game: 1
};
let state = States.intro;

/**
 * Screen Size
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

/**
 * Base for Game State
 */
const game = document.getElementById("game");
if (!game && state == States.intro) {
    state = States.game;
}

// Texture Loader
const textureLoader = new THREE.TextureLoader();

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */

/**
 * Lights 
 */

/**
 * Audio
 */

/*Background Music*/
// Performer: Simone Renzi
// Song: Reverie
// Composer: Claude Debussy
// License: The song is permitted for non-commercial use under license 
// "Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)"

/*Rain Sound Effects*/
// Created by: idomusics
// Title: Rain.wav
// From: freesounds.org

// Background Music w/SFX
var bgm = new Audio("sound/music_with_sfx.mp3");
bgm.muted = false;
bgm.loop = true;

// Sound Button
const soundBtn = new Image();
soundBtn.src = 'textures/sound.png';
soundBtn.sizes = "max-width: 16x; max-height: 16px"
soundBtn.alt = "icon indicating that sound is playing";

// Sound Button Sizes
const default_width = soundBtn.width;

soundBtn.onclick = function() {
    if (bgm.muted) {
        soundBtn.src = 'textures/sound.png';
        soundBtn.alt = "icon indicating that sound is playing";
        bgm.muted = false;
    } else {
        soundBtn.src = 'textures/muted.png';
        soundBtn.alt = "icon indicating that sound is muted";
        bgm.muted = true;
        bgm.autoplay = false;
    } 
}


/**
 * Event Listeners
 */

 window.addEventListener('resize', () => {
    // Update sound button size
    var interval = soundBtn.width < 1 ? soundBtn.width + 1 : soundBtn.width;
    var aspect_ratio = soundBtn.width / soundBtn.height;
    var newWidth = (soundBtn.width + 1) * (window.innerWidth / sizes.width);
    soundBtn.width = newWidth > default_width ? default_width : newWidth;

    // Update sizes 
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;


});

// Boolean value for if audio has started
let isStarted = false;
const tick = () => {
    document.getElementById("sounds").appendChild(soundBtn);
    if (!isStarted) {
        bgm.muted = false;
        // isStarted = true;
        bgm.play();
    }
}

tick();



