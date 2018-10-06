//projects list

 var projects = [
  {
    name: "A-robot",
    desciption: "altruistic_robot",
    deadline: 2050
  },
  {
    name: "P-toilet",
    desciption: "portable_toilet",
    deadline: 2026
  },
  {
    name: "T-catcher",
    desciption: "thoughts_catcher",
    deadline: 2077
  }
]

var i;
var list = function(projects) {
  for (i = 0; i < projects.length; i++) {
    document.getElementById("projects-list").innerHTML += "<li><details><summary>" + projects[i].desciption + "</summary><p>" + projects[i].name + "</p><p>" + projects[i].deadline + "</p></details></li>";

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
