//step 1. set global variables:
let nestedDiv = document.getElementById("progressDiv"); //gets inner div which will contain progress bar.
//nestedDiv is the width px that increases and decreases for actual animation.
let progress = 0; //integers that get assigned to new width of nestedDiv every 400miliseconds.
nestedDiv.style.width = progress + "px"; //make width equal to 0px.
let timerId; //stores the setInterval() call every 400ms.

//step 2. create an event listener for the html element that registers user movement:
let buttonElement = document.getElementById("startButton"); //store html element in variable.
let buttonEventListener = buttonElement.addEventListener("click", initiateDownload); //stores event listener in var.
//when button is "clicked," initiateDownload function will be called.


//step 3. create the function that gets called when "click" event is registered:
function initiateDownload()
{
  timerId = setInterval(updateInnerDiv, 400); 
  //setInterval is like a loop that interates every 400milisec and to stop loop we call clearInterval with timerId as argument.
  //when button is clicked, this function gets called every 400 miliseconds. call stored in timerId.
} //close initiateDownload() function.


//step 4. create function that inc the inner div width every 400 milisecs until reaches width of outer div:
function updateInnerDiv()
{
  if(progress !== 500)
    {
      //1st call: x = 0 + 10;
      //2nd call: x = 10 + 10;
      //3rd call: x = 20 + 10;
      //4th call: x = 30 + 10;
      progress = progress + 10;
      nestedDiv.style.width = progress + "px"; //assign new width of 10px to nestedDiv
    }
  else //once width of innerDiv reaches outerDiv width(500px).
    {
      clearInterval(timerId); //stop calling updateInnerDiv every 400 milisec.
    }
} //close updateInnerDiv() function.


/*
notes:
1. animations need to have an eventListener to initiate said animation.
2. setTimeout executes the code only once after the specified delay.
3. setInterval executes the code repeatedly at the specified interval.
*/
