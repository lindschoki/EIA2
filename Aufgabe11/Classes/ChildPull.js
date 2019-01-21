var Aufgabe11;
(function (Aufgabe11) {
    class ChildPull extends Aufgabe11.ObjectStructure {
        constructor() {
            super();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 600) {
                this.x = 80 + 0;
                this.y = 150 + 200;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x + 95, this.y + 50, 5, 0, 2 * Math.PI);
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.moveTo(this.x + 95, this.y + 80);
            Aufgabe11.crc2.lineTo(this.x + 95, this.y + 54);
            Aufgabe11.crc2.moveTo(this.x + 85, this.y + 62);
            Aufgabe11.crc2.lineTo(this.x + 95, this.y + 62);
            Aufgabe11.crc2.moveTo(this.x + 89, this.y + 95);
            Aufgabe11.crc2.lineTo(this.x + 95, this.y + 67);
            Aufgabe11.crc2.moveTo(this.x + 99, this.y + 95);
            Aufgabe11.crc2.lineTo(this.x + 95, this.y + 67);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "#A0522D";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 50, this.y + 80);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y + 85);
            Aufgabe11.crc2.moveTo(this.x + 32, this.y + 82);
            Aufgabe11.crc2.lineTo(this.x + 32, this.y + 90);
            Aufgabe11.crc2.moveTo(this.x + 41, this.y + 81);
            Aufgabe11.crc2.lineTo(this.x + 41, this.y + 89);
            Aufgabe11.crc2.moveTo(this.x + 55, this.y + 88);
            Aufgabe11.crc2.lineTo(this.x + 15, this.y + 95);
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.ChildPull = ChildPull;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=ChildPull.js.map