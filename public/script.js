const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
var tasklist = document.getElementById("tasklist");

var covey_button = document.getElementById("covey_button");
var pomodoro_button = document.getElementById("pomodoro_button");
var dictionary_button = document.getElementById("dictionary_button");

button.addEventListener("click", function(event){
  event.preventDefault();
  let taskIn = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionInput = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(taskIn,dueDate,priorityRating,completionInput,estimatedTime,"half");
  //console.log(dueDate);
  if (taskIn.length == 0 || dueDate.length == 0) {
    alert("Your Task Is Not Filled In")
  }
});

//Declare tasklist array to store the task info
var taskList = [];

// Create function to update taskList array
function addTask(nam,due,prior,dueTime,estdtime,stat) {
  let task = {
   name:nam,
   duedate:  due,
   priority:prior,
   dueTime: dueTime,
   estimatedtime: estdtime,
   status: stat,
  };
 taskList.push(task)
 renderTask(task);  
}

//Create function to update the DOM
function renderTask(task){
//Create elements
 let item = document.createElement("li");
 //item.innerHTML = "<div class=testDiv>" "</div>";
 var month;

 switch (task.duedate.slice(5,7)) {
   case '01':
     month = "January";
     break;
   case '02':
     month = "February"
     break;
   case '03':
    month = "March"
    break;
   case '04':
    month = 'April'
   break;
   case '05':
     month = "May";
     break;
   case '06':
     month = "June"
     break;
   case '07':
    month = "July"
    break;
   case '08':
    month = 'August'
   break;
   case '09':
    month = "September";
    break;
  case '10':
    month = "October"
    break;
  case '11':
   month = "November"
   break;
  case '12':
   month = 'December'
  break;
 }

 item.innerHTML = "<div class=testDiv>" + "<p>" + "<h2>" + task.name + "</h2>" + "<br>" + "Due on the " + task.duedate.slice(8,10) + " of " +  month + " at " + task.dueTime + "<br>" + "Priority: " + task.priority + "<br>" + "Will take " + task.estimatedtime + " mins to complete" + "<br>" + "</p>" + "</div>";
 
console.log(month);

 tasklist.appendChild(item);

  //extra task elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete Task");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  //event listeners for elements
 delButton.addEventListener("click", function(event) {
  event.preventDefault();
  item.remove();
})
  //clear input form
form.reset();
}

/* Stopwatch Timer */
var hr = 0, min = 0, sec = 0;
var timer;

var stopWatch = document.getElementById("stopwatch");
var startButton = document.getElementById("Start");
var stopButton = document.getElementById("Stop");
var resetButton = document.getElementById("Reset");

/* Listener for start button */
startButton.addEventListener("click", start);

/* Create function to run update second */
function start() {
  console.log("its running");
  if (!timer) {
    timer = setInterval(run,1000);
  }
}

/* Create function to display the elapsed time */
function run() {
  stopWatch.innerHTML = (hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  sec++;
  /* Create conditionals to */
  if(sec == 60) {
    sec = 0;
    min++;
  } 
  if(min == 60) {
    min = 0;
    hr++;
  }
}

/* Listener for stop button */
stopButton.addEventListener("click", stop);
/* Create function to stop timer*/
function stop() {
  clearInterval(timer);
  timer = false;
}

/* Listener for reset button */
resetButton.addEventListener("click", reset);
/* Create function to reset values*/
function reset() {
  clearInterval(timer);
  timer = false;

  sec = 0;
  min = 0;
  hr = 0;

  stopWatch.innerHTML = (hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}



/* Pomodoro Timer */
var pHr = 0, pMin = 0, pSec = 0;
var pTimer;

var pomodoro = document.getElementById("pomodoro");
var startPom = document.getElementById("pom_start");
var stopPom = document.getElementById("pom_stop");
var resetPom = document.getElementById("pom_reset");

startPom.addEventListener("click", pomStart);

function pomStart() {
  if (!pTimer) {
    pTimer = setInterval(runPom,1000);
  }
}

function runPom() {
  pomodoro.innerHTML =  (pMin < 10 ? "0" + pMin : pMin) + ":" + (pSec < 10 ? "0" + pSec : pSec);
  pSec++;
  /* Create conditionals to */
  if(pSec == 60) {
    pSec = 0;
    pMin++;
  } 
  if(pMin == 60) {
    pMin = 0;
    pHr++;
  }
}

stopPom.addEventListener("click", pomStop);
/* Create function to stop timer*/
function pomStop() {
  clearInterval(pTimer);
  pTimer = false;
}

resetPom.addEventListener("click", pomReset);
/* Create function to reset values*/
function pomReset() {
  clearInterval(pTimer);
  pTimer = false;

  pSec = 0;
  pMin = 0;
 
  pomodoro.innerHTML = (pMin < 10 ? "0" + pMin : pMin) + ":" + (pSec < 10 ? "0" + pSec : pSec);
}

/* Covey Quadrants */

