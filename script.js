//buttonChangeColour

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998', 'pink', 'blue'];

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
    description: "Altruistic Robot",
    deadline: 2050,
    budget: '$ 3400 0000 000',
    progress: "33%"
  },
  {
    name: "P-toilet",
    description: "Portable Toilet",
    deadline: 2026,
    budget: "$5400 0000",
    progress: "50%"
  },
  {
    name: "T-catcher",
    description: "Thoughts Catcher",
    deadline: 2077,
    budget: "$ 10000000000",
    progress: "17%"
  }
]

var i;
var list = function(projects) {
  for (i = 0; i < projects.length; i++) {
    document.getElementById("projects-list").innerHTML += "<li><details><summary>" + projects[i].name +
    "</summary><p> name: " + projects[i].description + "</p><p> deadline: " + projects[i].deadline + "</p><p> progress: "+
    projects[i].progress + "</p><p> budget: " + projects[i].budget + "</p></details></li>";

  }
}

list(projects);

//slideimages

var mySlidesPictures = ['robot.png', 'robot2.png', 'robot3.png', 'robot2.png'];

var i;
for (i=0; i < mySlidesPictures.length; i++) {
  document.getElementById("mySlidesContainer").innerHTML +=
  "<img class=\"mySlides\" src=\"" + mySlidesPictures[i] + "\"style=\"width:100%\">";
}

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

var text = "";
var i;
for (i = 0; i < projects.length; i++) {
    text += projects[i].name + "<br>";
}
// document.getElementById("test1").innerHTML = text;


//tip calculator

function calculateTip(amount, tip){

  let percent = (tip/100); //0.05

  let tipAmount = amount * percent;
  let totalAmount = amount + tipAmount;
if(tip<=5){
  console.log('you could better than' + tipAmount); 
} else if(tip>=20){
  console.log('oh that tip is very generous');
} else{
  console.log('that tip is alright I assume'); 
}
 

}

calculateTip(100,15);

//todo

let toDOList = [];

// function addItem(arr, item){
//   arr.push(item);
// }

// addItem(toDOList,"walk the dog");
// addItem(toDOList,"make coffee");

// console.log(toDOList);

//taking the user input and putting it into lowercase and trim from empty space etc
function addItem(arr){
  let answer = prompt("what would you like to add to your todo list?");
  let correct = answer.toLowerCase().trim();
  if(checkDuplicate(arr, correct)){
    arr.push(answer); 
  }
  else {
    alert('item already exists')
  }
  
}

function checkDuplicate(arr,item){
  let exists = false;
  let index = arr.indexOf(item);
  if(index!=-1){
    exists = false;
  }
  else {
    exists = true;
  }
  return exists;
}

addItem(toDOList);
addItem(toDOList);
addItem(toDOList);

console.log(toDOList);
