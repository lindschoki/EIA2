var Endabgabe;
(function (Endabgabe) {
    class ChildPull extends Endabgabe.ObjectStructure {
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
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x + 95, this.y + 50, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.moveTo(this.x + 95, this.y + 80);
            Endabgabe.crc2.lineTo(this.x + 95, this.y + 54);
            Endabgabe.crc2.moveTo(this.x + 85, this.y + 62);
            Endabgabe.crc2.lineTo(this.x + 95, this.y + 62);
            Endabgabe.crc2.moveTo(this.x + 89, this.y + 95);
            Endabgabe.crc2.lineTo(this.x + 95, this.y + 67);
            Endabgabe.crc2.moveTo(this.x + 99, this.y + 95);
            Endabgabe.crc2.lineTo(this.x + 95, this.y + 67);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "#000000";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.strokeStyle = "#A0522D";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 50, this.y + 80);
            Endabgabe.crc2.lineTo(this.x + 25, this.y + 85);
            Endabgabe.crc2.moveTo(this.x + 32, this.y + 82);
            Endabgabe.crc2.lineTo(this.x + 32, this.y + 90);
            Endabgabe.crc2.moveTo(this.x + 41, this.y + 81);
            Endabgabe.crc2.lineTo(this.x + 41, this.y + 89);
            Endabgabe.crc2.moveTo(this.x + 55, this.y + 88);
            Endabgabe.crc2.lineTo(this.x + 15, this.y + 95);
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.ChildPull = ChildPull;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ChildPull.js.map