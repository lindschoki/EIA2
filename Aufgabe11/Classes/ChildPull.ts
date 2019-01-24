namespace Aufgabe11 {

    export class ChildPull extends ObjectStructure{
       
        constructor() {
        super();    
        
        }

        move(): void {

            this.x += this.dx;
            this.y += this.dy;

            if (this.x > 600) {
                this.x = 80 + 0;
                this.y = 150 + 200;
            }
        }


        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 95, this.y + 50, 5, 0, 2 * Math.PI);
            crc2.lineWidth = 3;
            crc2.moveTo(this.x + 95, this.y + 80);
            crc2.lineTo(this.x + 95, this.y + 54);
            crc2.moveTo(this.x + 85, this.y + 62);
            crc2.lineTo(this.x + 95, this.y + 62);
            crc2.moveTo(this.x + 89, this.y + 95);
            crc2.lineTo(this.x + 95, this.y + 67);
            crc2.moveTo(this.x + 99, this.y + 95);
            crc2.lineTo(this.x + 95, this.y + 67);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();

            crc2.strokeStyle = "#A0522D";
            crc2.lineWidth = 2;
            crc2.beginPath();
            crc2.moveTo(this.x + 50, this.y + 80);
            crc2.lineTo(this.x + 25, this.y + 85);
            crc2.moveTo(this.x + 32, this.y + 82);
            crc2.lineTo(this.x + 32, this.y + 90);
            crc2.moveTo(this.x + 41, this.y + 81);
            crc2.lineTo(this.x + 41, this.y + 89);
            crc2.moveTo(this.x + 55, this.y + 88);
            crc2.lineTo(this.x + 15, this.y + 95);
            crc2.stroke();
        }
    }
}