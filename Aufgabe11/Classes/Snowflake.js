var Aufgabe11;
(function (Aufgabe11) {
    class Snowflake extends Aufgabe11.ObjectStructure {
        constructor() {
            super();
            this.color = "#00ff00";
        }
        move() {
            this.y += this.dy;
            if (this.y > Aufgabe11.crc2.canvas.height + 3) {
                this.y = -3;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 3, 1, 2 * Math.PI);
            Aufgabe11.crc2.strokeStyle = "grey";
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Snowflake = Snowflake;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Snowflake.js.map