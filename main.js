let random = Math.trunc(Math.random() * 20 + 1);
let score = 5;
console.log(random);

function guess() {
  console.log(document.querySelector(".input1").value); 
  if (document.querySelector(".input1").value == random) {
    document.querySelector(".sn").textContent = random;
    document.querySelector("body").style.background = "green";
    document.querySelector("#start").textContent = "🎉 Correct!";
    document.querySelector("#highscore").textContent = `${5 - score}`;
  } else if (document.querySelector(".input1").value > random) {
    document.querySelector("body").style.background = "#1b1b1b";
    document.querySelector("#start").textContent = "📉 Lower";
    score--;
    document.querySelector("#score").textContent = score;
    if (score == 0) {
      document.querySelector("body").style.background = "red";
      // alert("You Losed!");
      document.querySelector("#btn").disabled = true;
      document.querySelector(".input1").disabled = true
      document.querySelector("#start").textContent = "⛔ You Losed";
    }
  } else if (document.querySelector(".input1").value < random) {
    document.querySelector("body").style.background = "#1b1b1b";
    document.querySelector("#start").textContent = "📈 Bigger";
    score--;
    document.querySelector("#score").textContent = score;
    if (score == 0) {
      document.querySelector("body").style.background = "red";
      // alert("You Losed!");
      document.querySelector("#btn").disabled = true;
      document.querySelector("#start").textContent = "⛔ You Losed";
    }
  }
}
