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
    desciption: "thought_catcher",
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


// var text = "";
// var i;
// for (i = 0; i < projects.length; i++) {
//     text += projects[i].name + "<br>";
// }
// document.getElementById("test1").innerHTML = text;
