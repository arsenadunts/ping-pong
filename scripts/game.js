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

      

    

    if (ball.x + ball.speed * ball.directionX < paddleA.x2) {
        ball.y + ball.speed * ball.directionY > paddleA.y1 && ball.y + ball.speed * ball.directionY < paddleA.y2
        ball.directionX = 1
    if (ball.y + ball.speed * ball.directionY < paddleA.y2) {
        ball.y + ball.speed * ball.directionY > paddleA.y1 && ball.x + ball.speed * ball.directionY < paddleA.y2
        ball.directionX = -1

    }
    }

      // Update ball position on X and Y axes based on speed and orientation
        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        // Render the updated ball position
        $("#ball").css({ "left": ball.x, "top": ball.y });
    };


}
