var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let objects = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        imgData = Aufgabe11.crc2.getImageData(0, 0, 600, 420);
        for (let i = 0; i < 50; i++) {
            let snowflake = new Aufgabe11.Snowflake();
            snowflake.x = Math.random() * Aufgabe11.crc2.canvas.width;
            snowflake.y = Math.random() * Aufgabe11.crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;
            objects.push(snowflake);
        }
        for (let i = 0; i < 6; i++) {
            let tree = new Aufgabe11.Tree();
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 50; i++) {
            let snowflake = objects[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 6; i++) {
            let tree = objects[i];
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
    function drawCloud() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(365, 90, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(395, 90, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.arc(385, 80, 20, 0, 2 * Math.PI);
        Aufgabe11.crc2.fillStyle = "white";
        Aufgabe11.crc2.fill();
    }
    function drawSun() {
        Aufgabe11.crc2.fillStyle = "#FFD700";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(10, 10, 100, 0, 2 * Math.PI);
        Aufgabe11.crc2.fill();
    }
    function drawSky() {
        Aufgabe11.crc2.fillStyle = "#B0E0E6";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 430);
        Aufgabe11.crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        Aufgabe11.crc2.lineTo(600, 0);
        Aufgabe11.crc2.lineTo(0, 0);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.lineWidth = 3;
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map