//buttonChangeColour

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  //bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}

//projects list

 var projects = [
  {
    name: "A-robot",
    desciption: "Altruistic Robot",
    deadline: 2050,
    budget: '$ 3400 0000 000',
    progress: "33%"
  },
  {
    name: "P-toilet",
    desciption: "Portable Toilet",
    deadline: 2026,
    budget: "$5400 0000",
    progress: "50%"
  },
  {
    name: "T-catcher",
    desciption: "Thoughts Catcher",
    deadline: 2077,
    budget: "$ 10000000000",
    progress: "17%"
  }
]

var i;
var list = function(projects) {
  for (i = 0; i < projects.length; i++) {
    document.getElementById("projects-list").innerHTML += "<li><details><summary>" + projects[i].desciption +
    "</summary><p> name: " + projects[i].name + "</p><p> deadline: " + projects[i].deadline + "</p><p> progress: "+
    projects[i].progress + "</p><p> budget: " + projects[i].budget + "</p></details></li>";

  }
}

list(projects);

//slideimages

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// var text = "";
// var i;
// for (i = 0; i < projects.length; i++) {
//     text += projects[i].name + "<br>";
// }
// document.getElementById("test1").innerHTML = text;
