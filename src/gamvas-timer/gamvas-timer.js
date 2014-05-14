/**
 * @module Gamvas
 * @submodule Gamvas.Timer
 */
YUI.add('gamvas-timer', function (Y) {

    Y.namespace('Gamvas').Timer = (function () {
        var _date = new Date(),
            _timeScale = 1,

            /**
             * Get the seconds since Gamvas was started.
             *
             * @method getSeconds
             * @return {Number} seconds since Gamvas was started
             */
            _getSeconds = function () {
                return _getMilliseconds() / 1000.0;
            },

            /**
             * Get the milliseconds since Gamvas was started.
             *
             * @method getMilliseconds
             * @return {Number} milliseconds since Gamvas was started
             */
            _getMilliseconds = function () {
                var date = new Date();
                return (date.getTime() - _date.getTime()) * _timeScale;
            },

            /**
             * Sets scale the global time.
             *
             * @method setGlobalTimeScale
             * @param scale {Number} time scale >= 0
             */
            _setGlobalTimeScale = function (scale) {
                _timeScale = scale;
            },

            /**
             * Return the global time scale.
             *
             * @method getGlobalTimeScale
             * @return {Number} global time scale
             */
            _getGlobalTimeScale = function () {
                return _timeScale;
            };

        return {
            getSeconds: _getSeconds,
            getMilliseconds: _getMilliseconds,
            setGlobalTImeScale: _setGlobalTimeScale,
            getGlobalTimeScale: _getGlobalTimeScale
        };
    })();

}, '0.8.7', {});
