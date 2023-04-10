function myFunction() {
  const defImg = document.getElementById("default");
  const btn = document.getElementById("btn");
  btn.style.display = 'none';
  const game = document.createElement("iframe");
  game.src = "https://rickbi.github.io/Pyweek35/";
  game.width = "900";
  game.height = "500";
  game.title = "TAS";
  
  defImg.replaceWith(game);
}
