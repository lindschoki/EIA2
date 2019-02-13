var Endabgabe;
(function (Endabgabe) {
    class Tree extends Endabgabe.ObjectStructure {
        constructor() {
            super();
        }
        draw() {
            Endabgabe.crc2.fillStyle = "#8B4513";
            Endabgabe.crc2.strokeStyle = "#8B4513";
            Endabgabe.crc2.lineWidth = 2;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.lineTo(this.x + 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y + 10);
            Endabgabe.crc2.lineTo(this.x - 5, this.y - 10);
            Endabgabe.crc2.lineTo(this.x + 5, this.y - 10);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "#006400";
            Endabgabe.crc2.strokeStyle = "#008000";
            Endabgabe.crc2.lineWidth = 1;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.lineTo(this.x - 20, this.y - 10);
            Endabgabe.crc2.lineTo(this.x, this.y - 55);
            Endabgabe.crc2.lineTo(this.x + 20, this.y - 10);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "#006400";
            Endabgabe.crc2.strokeStyle = "#008000";
            Endabgabe.crc2.lineWidth = 1;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.lineTo(this.x - 17, this.y - 25);
            Endabgabe.crc2.lineTo(this.x, this.y - 65);
            Endabgabe.crc2.lineTo(this.x + 17, this.y - 25);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fillStyle = "#006400";
            Endabgabe.crc2.strokeStyle = "#008000";
            Endabgabe.crc2.lineWidth = 1;
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.lineTo(this.x - 14, this.y - 42);
            Endabgabe.crc2.lineTo(this.x, this.y - 75);
            Endabgabe.crc2.lineTo(this.x + 14, this.y - 42);
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.Tree = Tree;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Tree.js.map