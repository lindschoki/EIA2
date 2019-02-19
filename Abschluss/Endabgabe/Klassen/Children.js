var Endabgabe;
(function (Endabgabe) {
    class Children extends Endabgabe.Movement {
        constructor() {
            super();
        }
        draw() {
            if (this.state == "driveDown") {
                this.drawDownHill();
            }
            if (this.state == "hit") {
                this.drawHit();
            }
            if (this.state == "moveUp") {
                this.drawUpHill();
            }
        }
        move() {
            if (this.state == "driveDown") {
                this.driveDown();
            }
            else if (this.state == "moveUp") {
                this.moveUp();
            }
            else {
                this.driveOnlySled();
            }
        }
        driveDown() {
            this.x -= this.geschwindigkeit * 6;
            this.y += this.geschwindigkeit * 2;
            if (this.x < 0) {
                this.state = "moveUp";
            }
        }
        moveUp() {
            this.x += this.geschwindigkeit * 6;
            this.y -= this.geschwindigkeit * 2;
            if (this.x > 559) {
                this.state = "driveDown";
            }
        }
        driveOnlySled() {
            this.x -= this.geschwindigkeit * 5;
            this.y += this.geschwindigkeit * 3;
        }
        drawUpHill() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x - 0, this.y, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.moveTo(this.x - 0, this.y);
            Endabgabe.crc2.lineTo(this.x - 0, this.y + 28);
            Endabgabe.crc2.moveTo(this.x - 0, this.y + 12);
            Endabgabe.crc2.lineTo(this.x - 10, this.y + 13);
            Endabgabe.crc2.moveTo(this.x - 0, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 17, this.y + 30);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "#000000";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 11, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 25, this.y + 35);
            Endabgabe.crc2.moveTo(this.x - 3, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 3, this.y + 36);
            Endabgabe.crc2.moveTo(this.x - 14, this.y + 30);
            Endabgabe.crc2.lineTo(this.x - 14, this.y + 38);
            Endabgabe.crc2.moveTo(this.x + 13, this.y + 33);
            Endabgabe.crc2.lineTo(this.x - 35, this.y + 42);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.strokeStyle = "#9d4e15";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
        }
        drawDownHill() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x - 0, this.y, 5, 0, 2 * Math.PI);
            Endabgabe.crc2.moveTo(this.x - 0, this.y);
            Endabgabe.crc2.lineTo(this.x - 0, this.y + 28);
            Endabgabe.crc2.moveTo(this.x - 0, this.y + 12);
            Endabgabe.crc2.lineTo(this.x - 10, this.y + 13);
            Endabgabe.crc2.moveTo(this.x - 0, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 17, this.y + 30);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "#6495ED";
            Endabgabe.crc2.strokeStyle = "#6495ED";
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 11, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 25, this.y + 35);
            Endabgabe.crc2.moveTo(this.x - 3, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 3, this.y + 36);
            Endabgabe.crc2.moveTo(this.x - 14, this.y + 30);
            Endabgabe.crc2.lineTo(this.x - 14, this.y + 38);
            Endabgabe.crc2.moveTo(this.x + 13, this.y + 33);
            Endabgabe.crc2.lineTo(this.x - 35, this.y + 42);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.strokeStyle = "#4B0082";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
        }
        drawHit() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.moveTo(this.x + 11, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 25, this.y + 35);
            Endabgabe.crc2.moveTo(this.x - 3, this.y + 28);
            Endabgabe.crc2.lineTo(this.x - 3, this.y + 36);
            Endabgabe.crc2.moveTo(this.x - 14, this.y + 30);
            Endabgabe.crc2.lineTo(this.x - 14, this.y + 38);
            Endabgabe.crc2.moveTo(this.x + 13, this.y + 33);
            Endabgabe.crc2.lineTo(this.x - 35, this.y + 42);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.strokeStyle = "#9d4e15";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Children = Children;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Children.js.map