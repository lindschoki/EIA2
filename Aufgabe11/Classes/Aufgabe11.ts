namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let objects: ObjectStructure[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawSky();
        drawSun();
        drawCloud();


        imgData = crc2.getImageData(0, 0, 600, 420);


        for (let i: number = 0; i < 50; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;

            objects.push(snowflake);
        }

        for (let i: number = 0; i < 6; i++) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 300 + 320;
            tree.y = Math.random() * 100 + 200;

            objects.push(tree);
        }

//        for (let i: number = 0; i < 5; i++) {
//            let childDrive: ChildDrive = new ChildDrive();
//            childDrive.x = Math.random() * 100 + 200;
//            childDrive.y = Math.random() * 80 - 240;
//            childDrive.dx = Math.random() * 2 - 7;
//            childDrive.dy = Math.random() * 1 + 2;
//
//            objects.push(childDrive);
//        }
//
//        for (let i: number = 0; i < 5; i++) {
//            let childPull: ChildPull = new ChildPull();
//            childPull.x = Math.random() * 100 + 200;
//            childPull.y = 240;
//            childPull.dx = Math.random() * 2 + 4;
//            childPull.dy = Math.random() * 2 - 4;
//
//            objects.push(childPull);
//        }

        update();
    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.putImageData(imgData, 0, 0);


        for (let i: number = 0; i < 50; i++) {
            let snowflake: Snowflake = objects[i];
            snowflake.move();
            snowflake.draw();
        }

        for (let i: number = 0; i < 6; i++) {
            let tree: Tree = objects[i];
            tree.draw();
        }

//        for (let i: number = 0; i < 5; i++) {
//            let childDrive: ChildDrive = objects[i];
//            childDrive.move();
//            childDrive.draw();
//        }
//
//        for (let i: number = 0; i < 5; i++) {
//            let childPull: ChildPull = objects[i];
//            childPull.move();
//            childPull.draw();
//        }
    }
    function drawCloud(): void {
        crc2.beginPath();
        crc2.arc(365, 90, 20, 0, 2 * Math.PI);
        crc2.arc(395, 90, 20, 0, 2 * Math.PI);
        crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        crc2.arc(385, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
    }

    function drawSun(): void {
        crc2.fillStyle = "#FFD700";
        crc2.beginPath();
        crc2.arc(10, 10, 100, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawSky(): void {

        crc2.fillStyle = "#B0E0E6";
        crc2.beginPath();
        crc2.moveTo(0, 430);
        crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        crc2.lineTo(600, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();
    }
}