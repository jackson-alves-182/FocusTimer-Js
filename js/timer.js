import Controls from "./controls.js"
import{
  buttonPlay,
  buttonPause
} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause
})

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  TimerAlarm,
}){

  let minute = Number(minutesDisplay.textContent);
  let timerTimeOut;

  function countdown(){
    timerTimeOut = setTimeout(function(){

      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      if((minutes <= 0)&&(seconds <= 0)){
        TimerAlarm();
        resetTimer();
        controls.pauseHide();
        return
      }

      if(minutes => 0){
       
        if((seconds == 0)&&(minutes > 0)){
          seconds = 60;
          minutes = minutes - 1;
         
        }
        seconds = seconds - 1;
        updateDisplay(minutes, seconds);
       
      }
      countdown();
      
    },1000)

  }

  function stopCountdown(){
    clearInterval(timerTimeOut);
  }

  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,"0");
    secondsDisplay.textContent = String(seconds).padStart(2,"0");
  }

  function addTime(){
    minute = Number(minute) + 5;
    updateDisplay(minute, Number(secondsDisplay.textContent));
  }

  function removeTime(){
    if((Number(minute) - 5) > 0){
      minute = Number(minute) - 5;
      updateDisplay(minute, Number(secondsDisplay.textContent));
    }
    else{
      alert("Minutos deve ser maior que ZERO");
    }
    
  }

  function resetTimer(){
    updateDisplay(minute, 0);
  }

  return{
    countdown,
    stopCountdown,
    addTime,
    removeTime,
    resetTimer
  }
}