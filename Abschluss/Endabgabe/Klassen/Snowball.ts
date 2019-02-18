namespace Endabgabe {

    export class Snowball extends ObjectStructure {

        radius: number;
           
        move(): void {
            
            this.radius--;
        }

        draw(): void {
          
            crc2.beginPath();
            crc2.arc(this.x, this.y, 11 + (this.radius), 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 1.7;
            crc2.fill();
            crc2.stroke();
        }
        
         isHit(child: ObjectStructure): boolean {
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
}