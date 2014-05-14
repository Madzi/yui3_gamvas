/**
 * @module Gamvas
 * @module Gamvas.Sound
 */
YUI.add('gamvas-sound', function (Y) {

    /**
     * A class for sound and music files.
     *
     * @class Sound
     * @namespace Gamvas
     * @constructor
     * @param file {Object} a JavaScript Audio class
     */
    var GSound = function (file) {
        this._file = file;
    };

    /**
     * Play the sound once, restarts the sound automatically.
     *
     * @method play
     */
    GSound.prototype.play = function () {
        if (this.isReady()) {
            this._file.currentTime = 0;
            this._file.play();
        }
    };

    /**
     * Play the sound looping.
     *
     * @method loop
     */
    GSound.prototype.loop = function () {
        if (this.isReady()) {
            this._file.currentTime = 0;
            this._file.loop = true;
            this._file.play();
        }
    };

    /**
     * Stops a playing sound.
     *
     * @method stop
     */
    GSound.prototype.stop = function () {
        if (this.isReady()) {
            this._file.pause();
        }
    };

    /**
     * Resumes a stopped sound, without rewinding it.
     *
     * @method resume
     */
    GSound.prototype.resume = function () {
        if (this.isReady()) {
            this._file.play();
        }
    };

    /**
     * Set the playback speed of the sound.
     *
     * @method setRate
     * @param rate {Number} playback speed (1 = normal)
     */
    GSound.prototype.setRate = function (rate) {
        this._file.playbackRate = rate;
    };

    /**
     * Set the volume of the sound.
     *
     * @method setVolume
     * @param volume {Number} the volume value between 0 and 1
     */
    GSound.prototype.setVolume = function (volume) {
        this._file.volume = volume;
    };

    /**
     * Mute the sound.
     *
     * @method mute
     */
    GSound.prototype.mute = function () {
        this._file.muted = true;
    };

    /**
     * Unmute the sound.
     *
     * @method unmute
     */
    GSound.prototype.unmute = function () {
        this._file.muted = false;
    };

    /**
     * Test is the sound is ready to play.
     *
     * @method isReady
     * @return {Boolean} sound status
     */
    GSound.prototype.isReady = function () {
        switch (this._file.readyState) {
            case HTMLMediaElement.HAVE_CURRENT_DATA:
            case HTMLMediaElement.HAVE_FUTURE_DATA:
            case HTMLMediaElement.HAVE_ENOUGH_DATA:
                return true;
                break;
            default:
                return false;
        }
    };

    Y.namespace('Gamvas').Sound = GSound;

}, '0.8.7', {});
