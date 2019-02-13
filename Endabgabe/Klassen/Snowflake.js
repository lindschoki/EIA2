var Endabgabe;
(function (Endabgabe) {
    class Snowflake extends Endabgabe.ObjectStructure {
        constructor() {
            super();
            this.color = "#00ff00";
        }
        move() {
            this.y += this.dy;
            if (this.y > Endabgabe.crc2.canvas.height + 3) {
                this.y = -3;
            }
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x, this.y, 3, 1, 2 * Math.PI);
            Endabgabe.crc2.strokeStyle = "grey";
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
        }
    }
    Endabgabe.Snowflake = Snowflake;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snowflake.js.map