/**
 * @module Gamvas
 * @submodule Gamvas.Vector2D
 */
YUI.add('gamvas-vector2d', function (Y) {

    /**
     * A 2D vector class.
     *
     * @class Vector2D
     * @namespace Gamvas
     * @constructor
     * @param x {Number} The x part of the vector (optional)
     * @param y {Number} The y part of the vector (optional)
     */
    var Vector2D = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };

    /**
     * Return the length of the vector in pixels.
     *
     * @method length
     * @return {Number} length of the vector
     */
    Vector2D.prototype.length = function () {
        return Math.sqrt(this.quickLength());
    };

    /**
     * Return square of length of the vector.
     * 
     * @method quickLength
     * @return {Number} square length of the vector
     */
    Vector2D.prototype.quickLength = function () {
        return this.x * this.x + this.y * this.y;
    };

    /**
     * Returns the normalized vector.
     *
     * @method normalized
     * @return {Gamvas.Vector2D} normalized vector
     */
    Vector2D.prototype.normalized = function () {
        var l = this.length();

        return l == 0 ? this.copy() : new Vector2D(this.x / l, this.y / l);
    };


    /**
     * Returns a new vector with the current vector rotated a certain angle.
     * 
     * @method rotate
     * @param angle {Number} angle in radian
     * @return {Gamvas.Vector2D} new vector
     */
    Vector2D.prototype.rotate = function (angle) {
        var s = Math.sin(angle),
            c = Math.cos(angle);

        return new Vector2D(c * this.x - s * this.y, s * this.x + c * this.y);
    };

    /**
     * Returns a new vector subtracting vector vec from current vector.
     *
     * @method substract
     * @param vec {Vector2D} vector for subtract
     * @return {Vector2D} new vector
     */
    Vector2D.prototype.substract = function (vec) {
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    };

    /**
     * Returns a new vector adding vector vec to the current vector.
     *
     * @method add
     * @param vec {Vector2D} vector for add
     * @return {Vector2D} new vector
     */
    Vector2D.prototype.add = function (vec) {
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    };

    /**
     * Returns a new vector holding the difference between current vector and vector vec.
     *
     * @method difference
     * @param vec {Vector2D} another vector
     */
    Vector2D.prototype.difference = function (vec) {
        return new Vector2D(vec.x - this.x, vec.y - this.y);
    };

    /**
     * Returns a copy of current vector.
     *
     * @method copy
     * @return {Vector2D} copy for current vector
     */
    Vector2D.prototype.copy = function () {
        return new Vector2D(this.x, this.y);
    };

    /**
     * Return the distance between the current vector and vector vec.
     *
     * @method distance
     * @param vec {Vector2D} another vector
     * @return {Number} distance
     */
    Vector2D.prototype.distance = function (vec) {
        var diff  = this.difference(v);

        return diff.length();
    };

    /**
     * Return comparable distance between the current vector and vector vec.
     *
     * @method quickDistance
     * @param vec {Gamvas.Vector2D} another vector
     * @return {Number} square of distance
     */
    Vector2D.prototype.quickDistance = function (vec) {
        var diff = this.difference(vec);

        return diff.quickLength();
    };

    Y.namespace('Gamvas').Vector2D = Vector2D;

}, '0.8.7', {});
