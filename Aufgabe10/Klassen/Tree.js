var Aufgabe10;
(function (Aufgabe10) {
    class Tree {
        draw() {
            Aufgabe10.crc2.fillStyle = "#8B4513";
            Aufgabe10.crc2.strokeStyle = "#8B4513";
            Aufgabe10.crc2.lineWidth = 2;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.lineTo(this.x + 5, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 10);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x + 5, this.y - 10);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#006400";
            Aufgabe10.crc2.strokeStyle = "#008000";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.lineTo(this.x - 20, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y - 55);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y - 10);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#006400";
            Aufgabe10.crc2.strokeStyle = "#008000";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.lineTo(this.x - 17, this.y - 25);
            Aufgabe10.crc2.lineTo(this.x, this.y - 65);
            Aufgabe10.crc2.lineTo(this.x + 17, this.y - 25);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fillStyle = "#006400";
            Aufgabe10.crc2.strokeStyle = "#008000";
            Aufgabe10.crc2.lineWidth = 1;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.lineTo(this.x - 14, this.y - 42);
            Aufgabe10.crc2.lineTo(this.x, this.y - 75);
            Aufgabe10.crc2.lineTo(this.x + 14, this.y - 42);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Tree = Tree;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Tree.js.map