var idx = 0;
var ply1win = 0;
var ply2win = 0;
var draw = 0;

var btn = document.querySelector("button");
btn.addEventListener("click", updateBtn);

/* 버튼 */
/* Demo purposes only */
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
/* */

function updateBtn() {
  if (btn.click) {
    var randNum1 = Math.floor(Math.random() * 6) + 1;
    var randNum2 = Math.floor(Math.random() * 6) + 1;

    var randomDice1 = "images/dice" + randNum1 + ".png";
    var randomDice2 = "images/dice" + randNum2 + ".png";

    var player1 = document.querySelectorAll("img")[0];
    var player2 = document.querySelectorAll("img")[1];

    player1.setAttribute("src", randomDice1);
    player2.setAttribute("src", randomDice2);

    if (randNum1 > randNum2) {
      document.querySelector("h1").innerText = "player1 win!!";
      ply1win++;
      idx++;
      document.querySelectorAll("div.result");
    } else if (randNum1 < randNum2) {
      document.querySelector("h1").innerText = "player2 win!!";
      ply2win++;
      idx++;
    } else if (randNum1 == randNum2) {
      document.querySelector("h1").innerText = "Draw!!";
      draw++;
      idx++;
    }

    var playerCount = "count : " + idx;
    var playerWin =
      "player1 win :" + ply1win + " / " + "player2 win : " + ply2win;
    var playerDraw = "draw : " + draw;

    document.querySelector("p.count").innerText = playerCount;
    document.querySelector("p.player").innerText = playerWin;
    document.querySelector("p.draw").innerText = playerDraw;
  }
}
