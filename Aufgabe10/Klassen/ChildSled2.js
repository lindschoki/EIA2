var Aufgabe10;
(function (Aufgabe10) {
    class ChildSled2 {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 600) {
                this.x = 80 + 0;
                this.y = 150 + 200;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 95, this.y + 50, 5, 0, 2 * Math.PI);
            Aufgabe10.crc2.lineWidth = 3;
            Aufgabe10.crc2.moveTo(this.x + 95, this.y + 80);
            Aufgabe10.crc2.lineTo(this.x + 95, this.y + 54);
            Aufgabe10.crc2.moveTo(this.x + 85, this.y + 62);
            Aufgabe10.crc2.lineTo(this.x + 95, this.y + 62);
            Aufgabe10.crc2.moveTo(this.x + 89, this.y + 95);
            Aufgabe10.crc2.lineTo(this.x + 95, this.y + 67);
            Aufgabe10.crc2.moveTo(this.x + 99, this.y + 95);
            Aufgabe10.crc2.lineTo(this.x + 95, this.y + 67);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "#000000";
            Aufgabe10.crc2.strokeStyle = "#000000";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "#A0522D";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 50, this.y + 80);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y + 85);
            Aufgabe10.crc2.moveTo(this.x + 32, this.y + 82);
            Aufgabe10.crc2.lineTo(this.x + 32, this.y + 90);
            Aufgabe10.crc2.moveTo(this.x + 41, this.y + 81);
            Aufgabe10.crc2.lineTo(this.x + 41, this.y + 89);
            Aufgabe10.crc2.moveTo(this.x + 55, this.y + 88);
            Aufgabe10.crc2.lineTo(this.x + 15, this.y + 95);
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.ChildSled2 = ChildSled2;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=ChildSled2.js.map