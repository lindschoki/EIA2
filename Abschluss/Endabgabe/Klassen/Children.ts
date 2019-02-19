namespace Endabgabe {

    export class Children extends Movement {

        state: string;
       
        constructor() {
            super();
        }
        
        draw(): void {
            
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

        move(): void {
            
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

        driveDown(): void {

            this.x -= this.geschwindigkeit * 6;
            this.y += this.geschwindigkeit * 2;

            if (this.x < 0) {
                this.state = "moveUp";
            }

        }

        moveUp(): void {

            this.x += this.geschwindigkeit * 6;
            this.y -= this.geschwindigkeit * 2;
            if (this.x > 559) {
                this.state = "driveDown";
            }

        }

        driveOnlySled(): void {

            this.x -= this.geschwindigkeit * 5;
            this.y += this.geschwindigkeit * 3;

        }



        drawUpHill(): void {

            crc2.beginPath();
            crc2.arc(this.x - 0, this.y, 5, 0, 2 * Math.PI);
            crc2.moveTo(this.x - 0, this.y);
            crc2.lineTo(this.x - 0, this.y + 28);
            crc2.moveTo(this.x - 0, this.y + 12);
            crc2.lineTo(this.x - 10, this.y + 13);
            crc2.moveTo(this.x - 0, this.y + 28);
            crc2.lineTo(this.x - 17, this.y + 30);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 11, this.y + 28);
            crc2.lineTo(this.x - 25, this.y + 35);
            crc2.moveTo(this.x - 3, this.y + 28);
            crc2.lineTo(this.x - 3, this.y + 36);
            crc2.moveTo(this.x - 14, this.y + 30);
            crc2.lineTo(this.x - 14, this.y + 38);
            crc2.moveTo(this.x + 13, this.y + 33);
            crc2.lineTo(this.x - 35, this.y + 42);
            crc2.closePath();
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            crc2.stroke();
        }

        drawDownHill(): void {

            crc2.beginPath();
            crc2.arc(this.x - 0, this.y, 5, 0, 2 * Math.PI);
            crc2.moveTo(this.x - 0, this.y);
            crc2.lineTo(this.x - 0, this.y + 28);
            crc2.moveTo(this.x - 0, this.y + 12);
            crc2.lineTo(this.x - 10, this.y + 13);
            crc2.moveTo(this.x - 0, this.y + 28);
            crc2.lineTo(this.x - 17, this.y + 30);
            crc2.closePath();
            crc2.fillStyle = "#6495ED";
            crc2.strokeStyle = "#6495ED";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 11, this.y + 28);
            crc2.lineTo(this.x - 25, this.y + 35);
            crc2.moveTo(this.x - 3, this.y + 28);
            crc2.lineTo(this.x - 3, this.y + 36);
            crc2.moveTo(this.x - 14, this.y + 30);
            crc2.lineTo(this.x - 14, this.y + 38);
            crc2.moveTo(this.x + 13, this.y + 33);
            crc2.lineTo(this.x - 35, this.y + 42);
            crc2.closePath();
            crc2.strokeStyle = "#4B0082";
            crc2.lineWidth = 2;
            crc2.stroke();
        }

        drawHit(): void {

            crc2.beginPath();
            crc2.moveTo(this.x + 11, this.y + 28);
            crc2.lineTo(this.x - 25, this.y + 35);
            crc2.moveTo(this.x - 3, this.y + 28);
            crc2.lineTo(this.x - 3, this.y + 36);
            crc2.moveTo(this.x - 14, this.y + 30);
            crc2.lineTo(this.x - 14, this.y + 38);
            crc2.moveTo(this.x + 13, this.y + 33);
            crc2.lineTo(this.x - 35, this.y + 42);
            crc2.closePath();
            crc2.strokeStyle = "#9d4e15";
            crc2.lineWidth = 2;
            crc2.stroke();
        }
    }
}