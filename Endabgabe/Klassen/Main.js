var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let objects = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Endabgabe.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        console.log("init");
        imgData = Endabgabe.crc2.getImageData(0, 0, 600, 420);
        for (let i = 0; i < 50; i++) {
            let snowflake = new Endabgabe.Snowflake();
            snowflake.x = Math.random() * Endabgabe.crc2.canvas.width;
            snowflake.y = Math.random() * Endabgabe.crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;
            objects.push(snowflake);
            console.log("snowballs");
        }
        for (let i = 0; i < 6; i++) {
            let tree = new Endabgabe.Tree();
            tree.x = Math.random() * 397;
            tree.y = Math.random() * 290;
            objects.push(tree);
            console.log("trees");
        }
        for (let i = 0; i < 5; i++) {
            let childDrive = new Endabgabe.ChildDrive();
            childDrive.x = Math.random() * 100 + 200;
            childDrive.y = Math.random() * 80 - 240;
            childDrive.dx = Math.random() * 2 - 7;
            childDrive.dy = Math.random() * 1 + 2;
            objects.push(childDrive);
        }
        for (let i = 0; i < 5; i++) {
            let childPull = new Endabgabe.ChildPull();
            childPull.x = Math.random() * 100 + 200;
            childPull.y = 240;
            childPull.dx = Math.random() * 2 + 4;
            childPull.dy = Math.random() * 2 - 4;
            objects.push(childPull);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.putImageData(imgData, 0, 0);
        console.log("update");
        for (let i = 0; i < 50; i++) {
            let snowflake = objects[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 6; i++) {
            let tree = objects[i];
            tree.draw();
        }
        for (let i = 0; i < 5; i++) {
            let childDrive = objects[i];
            childDrive.move();
            childDrive.draw();
        }
        for (let i = 0; i < 5; i++) {
            let childPull = objects[i];
            childPull.move();
            childPull.draw();
        }
    }
    function drawCloud() {
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(365, 90, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(395, 90, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.arc(385, 80, 20, 0, 2 * Math.PI);
        Endabgabe.crc2.fillStyle = "white";
        Endabgabe.crc2.fill();
    }
    function drawSun() {
        Endabgabe.crc2.fillStyle = "#FFD700";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(10, 10, 100, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
    }
    function drawSky() {
        Endabgabe.crc2.fillStyle = "#B0E0E6";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(0, 430);
        Endabgabe.crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        Endabgabe.crc2.lineTo(600, 0);
        Endabgabe.crc2.lineTo(0, 0);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.lineWidth = 3;
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.fill();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map