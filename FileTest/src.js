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

function changeColor(){
  if (document.getElementById("01").checked){
    document.getElementById("Button").style.background="#ff0000";
  } else if (document.getElementById("02").checked){
    document.getElementById("Button").style.background="#008000";
  } else if (document.getElementById("03").checked){
    document.getElementById("Button").style.background="#0000ff";
  }
}

function getColor(){
  var text = "None";
  if (document.getElementById("01").checked){
    text = document.getElementById("01").value;
  } else if (document.getElementById("02").checked){
    text = document.getElementById("02").value;
  } else if (document.getElementById("03").checked){
    text = document.getElementById("03").value;
  }
  return text;
}

const downloadFile = () => {
  const link = document.createElement("a");
  const content = getColor();
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "FileTest_" + content + ".txt";
  link.click();
  URL.revokeObjectURL(link.href);
};
