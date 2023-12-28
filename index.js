var index = 0;

function list(){
  var colors = ["red", "Blue" , "Yellow" , "Green" , "Purple" , "Gray"];

  document.getElementsByTagName("body") [0].
  style.background = colors[index++];


  if (index > colors.length - 1) {

  index = 0;
  }
}
list();