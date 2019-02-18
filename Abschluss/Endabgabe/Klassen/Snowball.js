var Endabgabe;
(function (Endabgabe) {
    class Snowball extends Endabgabe.ObjectStructure {
        move() {
            this.radius--;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.x, this.y, 11 + (this.radius), 0, 2 * Math.PI);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 1.7;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
        isHit(child) {
            if (this.radius > 0) {
                return;
            }
            if (child.x - 5 < this.x - 7) {
                return false;
            }
            if (child.x - 5 > this.x + 7) {
                return false;
            }
            return true;
        }
    }
    Endabgabe.Snowball = Snowball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Snowball.js.map