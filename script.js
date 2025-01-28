const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const startEl = document.getElementById('start')
const pauseEl = document.getElementById('pause');
const stopEl = document.getElementById('stop');

let handler = 0 
 let remainingSec = 0;
let second;

function getTwoDigitNumber(value) {
    return value > 9 ? value : '0' + value;
}

function timeLeft(second)
{
    let hrs = getTwoDigitNumber(Math.floor(second / 3600));
    let mins = getTwoDigitNumber(Math.floor((second % 3600) / 60));
    let secs = getTwoDigitNumber(second % 60);

   
  
   
    hourEl.value = hrs;
    minuteEl.value = mins;
    secondEl.value = secs;
}



function updateTimer(){
    if(handler != 0)
    {
     
        remainingSec--;
        if(remainingSec == 0)
        {
            clearInterval(handler);
        }
        timeLeft(remainingSec);
    }
  
    
}


function startTimer(second){
    if(handler!= 0)
    {
        clearInterval(handler)
    }

    remainingSec = second;
   

   handler  = setInterval(updateTimer, 1000)
}



function convertIntoSeconds(){
    

    const h = Number(hourEl.value) || 0;
    const m = Number(minuteEl.value) || 0;
    const s = Number(secondEl.value) || 0;
    const totalSec = h * 3600 + m * 60 + s;
    
    if(totalSec <= 0) // if no seconds are present 
    {
        alert("Enter a Valid Input")
        return;
        
    }
  
    // hour convert into sconds
     second = hour * 60 * 60 ;

   
    console.log(second);
  
    startTimer(totalSec);
   


}
function stopTimer(){
   
    clearInterval(handler);
    remainingSec = 0;
    hourEl.value = "00";
    minuteEl.value = "00";
    secondEl.value = "00";
}



startEl.addEventListener('click', convertIntoSeconds)
stopEl.addEventListener('click', stopTimer);


