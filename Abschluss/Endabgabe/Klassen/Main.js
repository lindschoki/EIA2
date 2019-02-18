var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", firstInit);
    let fps = 25;
    let imgData;
    let objects = [];
    let snowballs = [];
    let snowballsToThrow = 20;
    let children = [];
    let gameTime = 50;
    let playerScore = 0;
    let timer;
    let newCanvas = false;
    function firstInit() {
        let button = document.getElementById("StartButton");
        button.addEventListener("click", init);
        let refreshButton = document.getElementById("tryagain");
        refreshButton.addEventListener("click", init);
        let end = document.getElementById("End");
        end.style.display = "none";
    }
    function init(_event) {
        let start = document.getElementById("Start");
        start.style.display = "none";
        let end = document.getElementById("End");
        end.style.display = "none";
        let gamestats = document.getElementById("GameStats");
        gamestats.style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "initial";
        Endabgabe.crc2 = canvas.getContext("2d");
        Endabgabe.crc2.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", getSnowballPosition);
        drawSky();
        drawSun();
        drawCloud();
        setTimer();
        console.log("init");
        newCanvas = false;
        timer = setInterval(setTimer, 100);
        playerScore = 0;
        gameTime = 50;
        children = [];
        snowballs = [];
        snowballsToThrow = 20;
        objects = [];
        newCanvas = false;
        imgData = Endabgabe.crc2.getImageData(0, 0, 600, 500);
        for (let i = 0; i < 50; i++) {
            let snowflake = new Endabgabe.Snowflake();
            snowflake.x = Math.random() * Endabgabe.crc2.canvas.width;
            snowflake.y = Math.random() * Endabgabe.crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;
            objects.push(snowflake);
        }
        for (let i = 0; i < 6; i++) {
            let tree = new Endabgabe.Tree();
            tree.x = Math.random() * 300 + 320;
            tree.y = Math.random() * 100 + 200;
            objects.push(tree);
        }
        for (let i = 0; i < 15; i++) {
            let child = new Endabgabe.Children();
            child.state = "driveDown";
            child.x = Math.random() * 220 - 180;
            child.y = 280 + 100;
            child.speed = Math.random() + 0.7;
            children.push(child);
        }
        update();
    }
    function endGame() {
        newCanvas = true;
        clearInterval(timer);
        let scoreinput = document.getElementById("score");
        scoreinput.value = String(playerScore);
        let end = document.getElementById("End");
        end.style.display = "block";
        let gamestats = document.getElementById("GameStats");
        gamestats.style.display = "none";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "none";
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
        Endabgabe.crc2.arc(20, 20, 100, 0, 2 * Math.PI);
        Endabgabe.crc2.fill();
    }
    function drawSky() {
        Endabgabe.crc2.fillStyle = "#B0E0E6";
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.moveTo(0, 380);
        Endabgabe.crc2.bezierCurveTo(50, 300, 350, 203, 600, 130);
        Endabgabe.crc2.lineTo(600, 0);
        Endabgabe.crc2.lineTo(0, 0);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.lineWidth = 3;
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.fill();
    }
    function getSnowballPosition(_event) {
        if (snowballsToThrow == 0) {
            if (snowballs.length == 0)
                endGame();
            return;
        }
        snowballsToThrow--;
        let snowball = new Endabgabe.Snowball();
        snowball.x = _event.offsetX;
        snowball.y = _event.offsetY;
        snowball.radius = 20;
        snowballs.push(snowball);
    }
    function setTimer() {
        document.getElementById("GameTimer").innerText = "Time: " + gameTime + " s";
        if (gameTime == 0) {
            endGame();
        }
        else {
            gameTime--;
        }
    }
    function update() {
        if (newCanvas == true)
            return;
        window.setTimeout(update, 1000 / fps);
        Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.putImageData(imgData, 0, 0);
        console.log("update");
        for (let i = 0; i < 56; i++) {
            let object = objects[i];
            object.move();
            object.draw();
        }
        for (let i = 0; i < snowballs.length; i++) {
            let snowball = snowballs[i];
            if (snowball.radius < 0) {
                snowballs.splice(i);
                return;
            }
            snowball.move();
            snowball.draw();
        }
        for (let i = 0; i < 15; i++) {
            let child = children[i];
            for (let i = 0; i < snowballs.length; i++) {
                let snowball = snowballs[i];
                if (snowball.isHit(child)) {
                    child.state = "hit";
                    playerScore += Math.round(Math.random() * (40 - 10)) + 40;
                }
            }
            child.move();
            child.draw();
            document.getElementById("PlayerScore").innerText = "Your Score: " + playerScore;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map