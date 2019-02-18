namespace Endabgabe {

    window.addEventListener("load", firstInit);

    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let imgData: ImageData;
    let objects: ObjectStructure[] = [];
    let snowballs: Snowball[] = [];
    let snowballsToThrow: number = 20;
    let children: Children[] = [];
    let gameTime: number = 50;
    let playerScore: number = 0;
    let timer: NodeJS.Timer;
    let newCanvas: boolean = false;

    function firstInit(): void {

        let button: HTMLElement = document.getElementById("StartButton");
        button.addEventListener("click", init);
        let refreshButton: HTMLElement = document.getElementById("tryagain");
        refreshButton.addEventListener("click", init);
        let end: HTMLElement = document.getElementById("End");
        end.style.display = "none";
    }

    function init(_event: Event): void {

        let start: HTMLElement = document.getElementById("Start");
        start.style.display = "none";
        let end: HTMLElement = document.getElementById("End");
        end.style.display = "none";
        let gamestats: HTMLElement = document.getElementById("GameStats");
        gamestats.style.display = "initial";

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "initial";
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener("click", getSnowballPosition);

        drawSky();
        drawSun();
        drawCloud();
        setTimer();
        console.log("init");
        
        newCanvas = false;
        timer = setInterval(setTimer, 1100);
        playerScore = 0;
        gameTime = 50;
        children = [];
        snowballs = [];
        snowballsToThrow = 20;
        objects = [];
        newCanvas = false;

        imgData = crc2.getImageData(0, 0, 600, 500);

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

        for (let i: number = 0; i < 15; i++) {
            let child: Children = new Children();
            child.state = "driveDown";
            child.x = Math.random() * 220 - 180;
            child.y = 280 + 100;
            child.speed = Math.random() + 0.7;
            children.push(child);
        }
        update();
    }

    function endGame(): void {
        newCanvas = true;
        clearInterval(timer);
        let scoreinput: HTMLInputElement = document.getElementById("score") as HTMLInputElement;
        scoreinput.value = String(playerScore);
        let end: HTMLElement = document.getElementById("End");
        end.style.display = "block";
        let gamestats: HTMLElement = document.getElementById("GameStats");
        gamestats.style.display = "none";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.style.display = "none";

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
        crc2.arc(20, 20, 100, 0, 2 * Math.PI);
        crc2.fill();
    }

    function drawSky(): void {

        crc2.fillStyle = "#B0E0E6";
        crc2.beginPath();
        crc2.moveTo(0, 380);
        crc2.bezierCurveTo(50, 300, 350, 203, 600, 130);
        crc2.lineTo(600, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();
    }

    function getSnowballPosition(_event: MouseEvent): void {

        if (snowballsToThrow == 0) {
            if (snowballs.length == 0)
                endGame();
            return;
        }
        snowballsToThrow--;

        let snowball: Snowball = new Snowball();
        snowball.x = _event.offsetX;
        snowball.y = _event.offsetY;
        snowball.radius = 20;
        snowballs.push(snowball);
    }
    
    function setTimer(): void {
        document.getElementById("GameTimer").innerText = "Time: " + gameTime + " s";
        if (gameTime == 0) {
            endGame();
        }
        else {
            gameTime--;
        }
    }

    function update(): void {

        if (newCanvas == true)
            return;
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);



        console.log("update");

        for (let i: number = 0; i < 56; i++) {
            let object: ObjectStructure = objects[i];
            object.move();
            object.draw();
        }

        for (let i: number = 0; i < snowballs.length; i++) {
            let snowball: Snowball = snowballs[i];
            if (snowball.radius < 0) {
                snowballs.splice(i);
                return;
            }
            snowball.move();
            snowball.draw();
        }

        for (let i: number = 0; i < 15; i++) {
            let child: Children = children[i];
            for (let i: number = 0; i < snowballs.length; i++) {
                let snowball: Snowball = snowballs[i];
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
}
