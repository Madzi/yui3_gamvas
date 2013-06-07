YUI.add('gamvas-vector2d', function (Y) {

    Vector2D = function (x, y) {
        this.x = (x) ? x : 0;
        this.y = (y) ? y : 0;
    };

    Vector2D.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    Vector2D.prototype.quickLength = function () {
        return this.x * this.x + this.y * this.y;
    };

    Vector2D.prototype.normalized = function () {
        var l = this.length();

        return new Vector2D(this.x / l, this.y / l);
    };

    Vector2D.prototype.rotate = function (angle) {
        var sin = Math.sin(angle),
            cos = Math.cos(angle);

        return new Vector2D(
            cos * this.x - sin * this.y,
            sin * this.x + cos * this.y
        );
    };

    Vector2D.prototype.subtract = function (vec) {
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    };

    Vector2D.prototype.add = function (vec) {
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    }

    Vector2D.prototype.difference = function (vec) {
        return new Vector2D(vec.x - this.x, vec.y - this.y);
    };

    Vector2D.prototype.copy = function () {
        return new Vector2D(this.x, this.y);
    };

    Vector2D.prototype.distance = function (vec) {
        return (this.difference(vec)).length();
    };

    Vector2D.prototype.quickDistance = function (vec) {
        return (this.difference(vec)).quickLength();
    };

    Y.namespace('Gamvas').Vector2D = Vector2D;

}, '0.1', {});
