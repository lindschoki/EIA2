namespace Endabgabe {

    export class Snowflake extends ObjectStructure {

        constructor() {
            super();
            this.color = "#00ff00";

        }

        move(): void {

            this.y += this.dy;

            if (this.y > crc2.canvas.height + 3) {
                this.y = -3;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 1, 2 * Math.PI);
            crc2.strokeStyle = "grey";
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.fill();
        }
    }
}