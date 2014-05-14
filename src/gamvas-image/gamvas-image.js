/**
 * @module Gamvas
 * @submodule Gamvas.Image
 */
YUI.add('gamvas-image', function (Y) {

    /**
     * A plain image with methods to move, rotate and zoom.
     *
     * @class Image
     * @namespace Gamvas
     * @constructor
     * @param file {String} URI
     * @param x {Number} the x coord of the left upper corner (optional)
     * @param y {Number} the y coord of the left upper corner (optional)
     * @param cx {Number} the x coord of the center of rotation (optional)
     * @param cy {Number} the y coord of the center of rotation (optional)
     */
    var GImage = function (file, x, y, cx, cy) {
        this.image = file;
        this.position = new Y.Gamvas.Vector2D(x, y);
        this.center = new Y.Gamvas.Vector2D(cx, cy);
        this.rotation = 0;
        this.scaleFactor = 1;
        this.scaleFactor2 = 1;
        this.clipRect = null;
    };

    /**
     * Set certain rotation of the image in radians.
     *
     * @method setRotation
     * @param angle {Number} an angle in radians
     */
    GImage.prototype.setRotation = function (angle) {
        this.rotation = angle;
    };

    /**
     * Rotate the image.
     *
     * @method rotate
     * @param angle {Number} an angle in radians
     */
    GImage.prototype.rotate = function (angle) {
        this.roatation += angle;
    };

    /**
     * Set the position of a image.
     *
     * @method setPositon
     * @param x {Number} the x coord of left top corner
     * @param y {Number} the y coord of left top corner
     */
    GImage.prototype.setPosition = function (x, y) {
        this.position.x = x;
        this.position.y = y;
    };

    /**
     * Move the image.
     *
     * @method move
     * @param x {Number} distance to move x coord
     * @param y {Number} distance to move y coord
     */
    GImage.prototype.move = function (x, y) {
        this.position.x += x;
        this.position.y += y;
    };

    /**
     * Set a certain scale factor.
     *
     * @method setScale
     * @param coeff {Number} scale factor
     */
    GImage.prototype.setScale = function (coeff) {
        this.scaleFactor = coeff;
        this.scaleFactor2 = coeff;
    };

    /**
     * Scale image.
     *
     * @method scale
     * @param coeff {Number} scale factor
     */
    GImage.prototype.scale = function (coeff) {
        this.scaleFactor += coeff;
        this.scaleFactor2 += coeff;
    };

    /**
     * Set different scale for x and y axis.
     *
     * @method setScaleXY
     * @param x {Number} the scale coeff for x axis
     * @param y {Number} the scale coeff for y axis
     */
    GImage.prototype.setScaleXY = function (x, y) {
        this.scaleFactor = x;
        this.scaleFactor2 = y;
    };

    /**
     * Sets the center for an Image.
     * 
     * @method setCenter
     * @param x {Number} x coord
     * @param y {Number} y coord
     */
    GImage.prototype.setCenter = function (x, y) {
        this.center.x = x;
        this.center.y = y;
    };

    /**
     * Sets the image.
     *
     * @method setFile
     * @param file {Image} a JavaScript Image object
     */
    GImage.prototype.setFile = function (file) {
        this.image = file;
    };

    /**
     * Draws the image, using its position, rotation and scale information.
     *
     * @method draw
     */
    GImage.prototype.draw = function () {
        var rect = this.getClipRect(),
            pos = this.position;
        if ((rect.x >= 0)  && (rect.x < this.image.width)
            && (rect.y >= 0) && (rect.y < this.image.height)) {
            this.c.save();
            this.c.translate(pos.x, pos.y);
            this.c.rotation(this.rotation);
            this.c.scale(this.scaleFactor, this.scaleFactor2);
            this.c.drawImage(this.image, rect.x, rect.y, rect.width, rect.height);
            this.c.restore();
        } else {
            Y.error('not drawing because of clip rect: ' + rect);
        }
    };

    /**
     * Sets the clipping rectangle of a image.
     *
     * @method setClipRect
     * @param rx {GamvasRect|Number} the clip rect or x coord
     * @param y {Number} y coord
     * @param w {Number} rectangle width
     * @param h {Number} rectangle height
     */
    GImage.prototype.setClipRect = function (rx, y, w, h) {
        if (rx instanceof Y.Gamvas.Rect) {
            this.clipRect = rx;
        } else {
            this.clipRect = new Y.Gamvas.Rect(rx, y, w, h);
        }
    };

    /**
     * Gets the clipping rectangle of a image.
     *
     * @method getClipRect
     * @return {Gamvas.Rect}
     */
    GImage.prototype.getClipRect = function () {
        return this.clipRect || new Y.Gamvas.Rect(0, 0, this.image.width, this.image.height);
    };

    Y.namespace('Gamvas').Image = GImage;

}, '0.8.7', {
    requires: [
        'gamvas-vector2d',
        'gamvas-rect'
    ]
});
