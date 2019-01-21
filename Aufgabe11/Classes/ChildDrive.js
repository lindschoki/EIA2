var Aufgabe11;
(function (Aufgabe11) {
    class ChildDrive extends Aufgabe11.ObjectStructure {
        constructor() {
            super();
            this.color = "black";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 0) {
                this.x = 100 + 200;
                this.y = 80 - 240;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x + 300, this.y + 370, 5, 0, 2 * Math.PI);
            Aufgabe11.crc2.lineWidth = 3;
            Aufgabe11.crc2.moveTo(this.x + 300, this.y + 395);
            Aufgabe11.crc2.lineTo(this.x + 300, this.y + 372);
            Aufgabe11.crc2.moveTo(this.x + 300, this.y + 382);
            Aufgabe11.crc2.lineTo(this.x + 290, this.y + 382);
            Aufgabe11.crc2.moveTo(this.x + 300, this.y + 395);
            Aufgabe11.crc2.lineTo(this.x + 290, this.y + 400);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = "#000000";
            Aufgabe11.crc2.strokeStyle = "#000000";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "#9d4e15";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x + 310, this.y + 395);
            Aufgabe11.crc2.lineTo(this.x + 280, this.y + 405);
            Aufgabe11.crc2.moveTo(this.x + 290, this.y + 400);
            Aufgabe11.crc2.lineTo(this.x + 290, this.y + 409);
            Aufgabe11.crc2.moveTo(this.x + 302, this.y + 398);
            Aufgabe11.crc2.lineTo(this.x + 302, this.y + 406);
            Aufgabe11.crc2.moveTo(this.x + 313, this.y + 402);
            Aufgabe11.crc2.lineTo(this.x + 270, this.y + 415);
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.ChildDrive = ChildDrive;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=ChildDrive.js.map