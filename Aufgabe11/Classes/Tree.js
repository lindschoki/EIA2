var Aufgabe11;
(function (Aufgabe11) {
    class Tree extends Aufgabe11.ObjectStructure {
        constructor() {
            super();
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "#8B4513";
            Aufgabe11.crc2.strokeStyle = "#8B4513";
            Aufgabe11.crc2.lineWidth = 2;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.lineTo(this.x + 5, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x + 5, this.y - 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#006400";
            Aufgabe11.crc2.strokeStyle = "#008000";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.lineTo(this.x - 20, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x, this.y - 55);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y - 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#006400";
            Aufgabe11.crc2.strokeStyle = "#008000";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.lineTo(this.x - 17, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x, this.y - 65);
            Aufgabe11.crc2.lineTo(this.x + 17, this.y - 25);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#006400";
            Aufgabe11.crc2.strokeStyle = "#008000";
            Aufgabe11.crc2.lineWidth = 1;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.lineTo(this.x - 14, this.y - 42);
            Aufgabe11.crc2.lineTo(this.x, this.y - 75);
            Aufgabe11.crc2.lineTo(this.x + 14, this.y - 42);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Tree = Tree;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Tree.js.map