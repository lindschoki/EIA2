namespace Aufgabe10 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let snowflakes: Snowflake[] = [];
    let trees: Tree[] = [];
    let childsleds: ChildSled[] = [];
    let childsleds2: ChildSled2[] = [];
    let coordinates: number[] = [];



    let getX: number = 0;
    let getY: number = 0;


    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", getCanvasCoordinates);

        drawSky();
        drawSun();
        drawCloud();

        imgData = crc2.getImageData(0, 0, 600, 420);


        for (let i: number = 0; i < 50; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.x = Math.random() * crc2.canvas.width;
            snowflake.y = Math.random() * crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;
            snowflake.color = "#00ff00";

            snowflakes.push(snowflake);
        }

        for (let i: number = 0; i < 6; i++) {
            let tree: Tree = new Tree();
            tree.x = Math.random() * 300 + 320;
            tree.y = Math.random() * 100 + 200;

            trees.push(tree);
        }

        for (let i: number = 0; i < 5; i++) {
            let childsled: ChildSled = new ChildSled();
            childsled.x = Math.random() * 100 + 200;
            childsled.y = Math.random() * 80 - 240;
            childsled.dx = Math.random() * 2 - 7;
            childsled.dy = Math.random() * 1 + 2;

            childsleds.push(childsled);
        }

        for (let i: number = 0; i < 5; i++) {
            let childsled2: ChildSled2 = new ChildSled2();
            childsled2.x = Math.random() * 100 + 200;
            childsled2.y = 240;
            childsled2.dx = Math.random() * 2 + 4;
            childsled2.dy = Math.random() * 2 - 4;

            childsleds2.push(childsled2);
        }

        update();
        console.log("Canvas start");
    }

    function getCanvasCoordinates(_event: MouseEvent): void {
        let xCoordinate: number = _event.offsetX;
        let yCoordinate: number = _event.offsetY;
        getX = xCoordinate;
        getY = yCoordinate;
        console.log("x: " + getX, "y: " + getY);
        
        coordinates.push(getX, getY);
        console.log(coordinates);
    }
    
   

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.putImageData(imgData, 0, 0);


        for (let i: number = 0; i < 50; i++) {
            let snowflake: Snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }

        for (let i: number = 0; i < 6; i++) {
            let tree: Tree = trees[i];
            tree.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let childsled: ChildSled = childsleds[i];
            childsled.move();
            childsled.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let childsled2: ChildSled2 = childsleds2[i];
            childsled2.move();
            childsled2.draw();
        }

        console.log("update");
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