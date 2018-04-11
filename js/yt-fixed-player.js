function initWaypoint() {
    var player = document.getElementById('player-container');

    var waypoint = new Waypoint({
        element: document.getElementById('info'),
        handler: function(direction) {
            if (direction === "up") {
                player.classList.remove("fixed");
            } else {
                 player.classList.add("fixed");
            }
        }
    });
}

document.body.addEventListener("yt-navigate-finish", function(event) {
    initWaypoint();
});

document.body.addEventListener("yt-navigate-start", function(event) {
    var player = document.getElementById('player-container');
    player.classList.remove("fixed");
});
