export default function Controls({
  buttonPlay,
  buttonPause,
  timer,
  clickSound
}){

  
  function play(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

    timer.countdown();
    clickSound();
  }

  function pauseHide(){
    buttonPause.classList.add('hide');
    buttonPlay.classList.remove('hide');
  }

  function pause(){
    pauseHide();

    timer.stopCountdown();
    clickSound();
  }

  function stop(){
    pauseHide();

    timer.stopCountdown();
    timer.resetTimer();
    clickSound();
  }

  return{
    play,
    pause,
    pauseHide,
    stop
  }

  

} 

