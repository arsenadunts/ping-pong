function game() {
    var contect = $("<div/>").attr("id", "contect").appendTo("body");
    var game = $("<div/>").attr("id", "game").appendTo("#contect");
    var ball = $("<div/>").attr("id", "ball").appendTo("#game");
    var paddleA = $("<div/>").attr("id", "paddleA").appendTo("#game");
    var paddleB = $("<div/>").attr("id", "paddleB").appendTo("#game");

    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    };

    var paddleA = {
        speed: 3,
        x1: $("#paddleA").position().left,
        x2: $("#paddleA").position().left + $("#paddleA").width(),
        y1: $("#paddleA").position().top,
        y2: $("#paddleA").position().top + $("#paddleA").height(),

    };

    var paddleB = {
        speed: 3,
        x1: $("#paddleB").position().left,
        x2: $("#paddleB").position().left + $("#paddleB").width(),
        y1: $("#paddleB").position().top,
        y2: $("#paddleB").position().top + $("#paddleB").height(),

    };
    console.log(paddleA, paddleB);

    // Set main loop to be called on the desired frame rate
    setInterval(gameLoop, 1000 / 60);

    // Main loop of the game
    function gameLoop() {
        moveBall();
        movepaddle();
    }


    // Control movement of the ball doing collision checking
    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());

        // Check collision to the bottom border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY > (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }

        // Check collision to the top border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }

        // Check collision to the left border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX > (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
        }

        // Check collision to the right border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
        }


        if (ball.x + ball.speed * ball.directionX < paddleA.x2 &&
            ball.y + ball.speed * ball.directionY > paddleA.y1 &&
            ball.y + ball.speed * ball.directionY < paddleA.y2) {
            ball.directionX = 1
        }


        if (ball.x + ball.speed * ball.directionX + $("#ball").width() > paddleB.x2 &&
            ball.y + ball.speed * ball.directionY > paddleB.y1 &&
            ball.y + ball.speed * ball.directionY < paddleB.y2) {
            ball.directionX = -1

        }

        // Update ball position on X and Y axes based on speed and orientation
        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        // Render the updated ball position
        $("#ball").css({ "left": ball.x, "top": ball.y });

    }

    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
        console.log(directions)
    }

    function stop(e) {
        delete directions[e.which];
        console.log(directions)
    }

    var directions = {};

    function movepaddle() {

        var speed = 4;

        function move(e) {
            for (var i in directions) {

                if (paddleA.y1 > 0 && i == 38) {
                    $("paddleA").css("top", (paddleA.y1 - speed) + "px");
                }

                if (paddleA.y1().top < ($("#map").height() - height()) && i == 40) {
                    css("top", (position().top + speed) + "px");
                }
            }
        }
    }
}