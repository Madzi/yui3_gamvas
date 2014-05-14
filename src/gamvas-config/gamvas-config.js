/**
 * @module Gamvas
 * @submodule Gamvas.Config
 */
YUI.add('gamvas-config', function (Y) {

    /**
     * System config holder.
     *
     * @class Config
     * @namespace Gamvas
     * @static
     */
    Y.namespace('Gamvas').Config = {
        /**
         * Capture the whole documents key events ?
         *
         * @property preventKeyEvents
         * @type Boolean
         * @default false
         */
        preventKeyEvents: false,

        /**
         * Capture the whole documents mouse events ?
         *
         * @property preventMouseEvents
         * @type Boolean
         * @default false
         */
        preventMouseEvents: false,

        /**
         * Use own physics world per game state.
         *
         * @property worldPerState
         * @type Boolean
         * @default true
         */
        worldPerState: true,

        /**
         * Reverse layer sorting.
         *
         * @property reversyLayerOrder
         * @type Boolean
         * @default false
         */
        reverseLayerOrder: false
    };

}, '0.8.7', {});
