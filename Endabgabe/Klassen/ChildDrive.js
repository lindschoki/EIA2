var Endabgabe;
(function (Endabgabe) {
    class ChildDrive extends Endabgabe.ObjectStructure {
        constructor() {
            super();
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
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x + 300, this.y + 370, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.moveTo(this.x + 300, this.y + 395);
            Endabgabe.crc2.lineTo(this.x + 300, this.y + 372);
            Endabgabe.crc2.moveTo(this.x + 300, this.y + 382);
            Endabgabe.crc2.lineTo(this.x + 290, this.y + 382);
            Endabgabe.crc2.moveTo(this.x + 300, this.y + 395);
            Endabgabe.crc2.lineTo(this.x + 290, this.y + 400);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "#000000";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.strokeStyle = "#9d4e15";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 310, this.y + 395);
            Endabgabe.crc2.lineTo(this.x + 280, this.y + 405);
            Endabgabe.crc2.moveTo(this.x + 290, this.y + 400);
            Endabgabe.crc2.lineTo(this.x + 290, this.y + 409);
            Endabgabe.crc2.moveTo(this.x + 302, this.y + 398);
            Endabgabe.crc2.lineTo(this.x + 302, this.y + 406);
            Endabgabe.crc2.moveTo(this.x + 313, this.y + 402);
            Endabgabe.crc2.lineTo(this.x + 270, this.y + 415);
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.ChildDrive = ChildDrive;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ChildDrive.js.map