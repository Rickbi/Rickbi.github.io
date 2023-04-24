function getA01Data(){
  var text = "None";
  if (document.getElementById("q01a01").checked){
    text = document.getElementById("q01a01").value;
  } else if (document.getElementById("q01a02").checked){
    text = document.getElementById("q01a02").value;
  } else if (document.getElementById("q01a03").checked){
    text = document.getElementById("q01a03").value;
  }
  return text;
}

function getA02Data(){
  var text = "";
  if (document.getElementById("q02a01").checked){
    text += document.getElementById("q02a01").value + ", ";
  }
  if (document.getElementById("q02a02").checked){
    text += document.getElementById("q02a02").value + ", ";
  }
  if (document.getElementById("q02a03").checked){
    text += document.getElementById("q02a03").value + ", ";
  }
  if (document.getElementById("q02a04").checked){
    text += document.getElementById("q02a04").value + ", ";
  }
  if (!text){
    text = "None";
  } else{
    text = text.slice(0, -2);
  }
  return text;
}

function getA03Data(){
  var text1 = document.getElementById("q03a01").value;
  var text2 = document.getElementById("q03a02").value;
  return text1 + "\n<TextArea>\n" + text2 + "\n<TextArea>"
}

function getData(){
  a01 = getA01Data();
  a02 = getA02Data();
  a03 = getA03Data();
  return "Q01: " + a01 + "\nQ02: " + a02 + "\nQ03: " + a03;
}

const downloadFile = () => {
  const link = document.createElement("a");
  const content = getData();
  const file = new Blob([content], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = "AnswersTest.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function changeText(newText){
  var text = document.getElementById("areaText");
  text.value = newText;
}

const uploadFile = () =>{
  var element = document.getElementById("upfile");
  element.onchange = async function (event) {
    var blob = new Blob([event.target.files[0]], { type: "text/plain" });
    const text = await new Response(blob).text()
    changeText(text)
 };
}
