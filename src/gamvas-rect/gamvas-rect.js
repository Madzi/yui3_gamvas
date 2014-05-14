/**
 * @module Gamvas
 * @submodule Gamvas.Rect
 */
YUI.add('gamvas-rect', function (Y) {

    /**
     * The rectangle object.
     *
     * @class Rect
     * @namespace Gamvas
     * @constructor
     * @param x {Number} x coord of top left upper corner (optional)
     * @param y {Number} y coord of top left upper corner (optional)
     * @param w {Number} width of the rectangle (optional)
     * @param h {Number} height of the rectangle (optional)
     */
    var Rect = function (x, y, w, h) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 0;
        this.h = h || 0;
    }

    Y.namespace('Gamvas').Rect = Rect;

}, '0.8.7', {});
