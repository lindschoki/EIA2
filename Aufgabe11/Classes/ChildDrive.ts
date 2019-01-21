namespace Aufgabe11 {

    export class ChildDrive extends ObjectStructure {

        constructor() {
            super();
            this.color = "black";
        }

        move(): void {

            this.x += this.dx;
            this.y += this.dy;

            if (this.y > 0) {
                this.x = 100 + 200;
                this.y = 80 - 240;
            }
        }


        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 300, this.y + 370, 5, 0, 2 * Math.PI);
            crc2.lineWidth = 3;
            crc2.moveTo(this.x + 300, this.y + 395);
            crc2.lineTo(this.x + 300, this.y + 372);
            crc2.moveTo(this.x + 300, this.y + 382);
            crc2.lineTo(this.x + 290, this.y + 382);
            crc2.moveTo(this.x + 300, this.y + 395);
            crc2.lineTo(this.x + 290, this.y + 400);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();

            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 310, this.y + 395);
            crc2.lineTo(this.x + 280, this.y + 405);
            crc2.moveTo(this.x + 290, this.y + 400);
            crc2.lineTo(this.x + 290, this.y + 409);
            crc2.moveTo(this.x + 302, this.y + 398);
            crc2.lineTo(this.x + 302, this.y + 406);
            crc2.moveTo(this.x + 313, this.y + 402);
            crc2.lineTo(this.x + 270, this.y + 415);
            crc2.stroke();
        }
    }
}