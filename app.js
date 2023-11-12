const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1display"),
};
const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2display"),
};

const resetbutton = document.querySelector("#reset");
const winningscoreselect = document.querySelector("#select");
let winningscore = 5;
let isgameover = false;

function updateScores(player, opponent) {
    if (!isgameover) {
        player.score += 1;
        if (player.score === winningscore) {
            isgameover = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function() {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", function() {
    updateScores(p2, p1);
});

winningscoreselect.addEventListener("change", function() {
    winningscore = parseInt(this.value);
    reset();
});

resetbutton.addEventListener("click", reset);

function reset() {
    const player = [p1, p2];
    player.forEach((player1) => {
        isgameover = 0;
        player1.score = 0;
        player1.display.textContent = 0;
        player1.display.classList.remove("winner", "loser");
        player1.button.disabled = false;
    });
    //   isgameover = false;
    //   p1.score = 0;
    //   p2.score = 0;
    //   p1.display.textContent = 0;
    //   p2.display.textContent = 0;
    //
    //   p2.display.classList.remove("winner", "loser");
    //   p1.button.disabled = false;
    //   p2.button.disabled = false;
}