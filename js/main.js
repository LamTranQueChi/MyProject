function showMenu(id){
  let boxes = document.getElementsByClassName("menuBox");
  for(let i = 0; i < boxes.length; i++){
    boxes[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function showSection(id){
  let sections = document.getElementsByClassName("detail");
  for(let i = 0; i < sections.length; i++)
  {
    sections[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}