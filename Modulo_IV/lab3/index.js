var Car = (function () {
    function Car() {
    }
    Car.prototype.getWhell = function () {
        return this.wheel;
    };
    Car.prototype.getFuel = function () {
        return this.fuel;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    ;
    Car.prototype.setWhell = function (wheel) {
        this.wheel = wheel;
    };
    Car.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    return Car;
}());
var vehicle = new Car();
vehicle.setWhell(4);
vehicle.setFuel("gas");
vehicle.setColor("red");
console.log(vehicle);
