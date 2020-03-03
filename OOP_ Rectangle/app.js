let Rectangle = function (length, width) {
    this.length = length;
    this.width = width;

    this.getLength = function () {
        return this.length;
    };
    this.getWidth = function () {
        return this.width;
    };

    this.setDistance = function (length, width) {
        this.length = length;
        this.width = width;
    };

    this.area = function () {
        return this.length * this.width;
    };
    this.perimeter = function () {
        return (this.length + this.width) * 2;
    };
    this.draw = function () {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let a = this.length;
        let b = this.width;
        ctx.moveTo(0, 0);
        ctx.lineTo(a, 0);
        ctx.stroke();

        ctx.moveTo(a, 0);
        ctx.lineTo(a, b);
        ctx.stroke();

        ctx.moveTo(a, b);
        ctx.lineTo(0, b);
        ctx.stroke();

        ctx.moveTo(0, 0);
        ctx.lineTo(0, b);
        ctx.stroke();
    }
};

let rectangle = new Rectangle(800, 400);
rectangle.draw();
document.getElementById("result").innerHTML = "Chu vi là: " + rectangle.perimeter()
    + " Diện tích là: " + rectangle.area();

rectangle.setDistance(500, 250);
rectangle.getWidth();
rectangle.getLength();
rectangle.draw();
document.getElementById("result").innerHTML = "Chu vi là: " + rectangle.perimeter()
    + " Diện tích là: " + rectangle.area();
