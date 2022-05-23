export default function(){

  const bgNature = new Audio("./sounds/Floresta.wav");
  const bgRain = new Audio("./sounds/Chuva.wav");
  const bgCoffeeShop = new Audio("./sounds/Cafeteria.wav");
  const bgFirePlace = new Audio("./sounds/Lareira.wav");
  const click = new Audio("./sounds/Click.wav");
  const endTimerAlarm = new Audio("./sounds/End-alarm.wav");

  function clickSound(){
    click.volume = 0.2;
    click.play();
  }

  function TimerAlarm(){
    endTimerAlarm.play();
  }

  function playNature(){
    bgNature.play();
    bgNature.loop = true;
  }

  function pauseNature(){
    bgNature.pause();
  }

  function playRain(){
    bgRain.play();
    bgRain.loop = true;
  }

  function pauseRain(){
    bgRain.pause();
  }

  function playCoffeeShop(){
    bgCoffeeShop.play();
    bgCoffeeShop.loop = true;
  }

  function pauseCoffeeShop(){
    bgCoffeeShop.pause();
  }

  function playFirePlace(){
    bgFirePlace.play();
    bgFirePlace.loop = true;
  }

  function pauseFirePlace(){
    bgFirePlace.pause();
  }

  function pauseCurrentSound(sound){
    if(sound == "nature"){
      pauseNature();
    }
    else if(sound == "rain"){
      pauseRain();
    }
    else if(sound == "coffeeshop"){
      pauseCoffeeShop();
    }
    else if(sound == "fireplace"){
      pauseFirePlace();
    } 
  }
  
  function playPausedSound(sound){
    if(sound == "nature"){
      playNature();
    }
    else if(sound == "rain"){
      playRain();
    }
    else if(sound == "coffeeshop"){
      playCoffeeShop();
    }
    else if(sound == "fireplace"){
      playFirePlace();
    } 
  }


  return{
    clickSound,
    TimerAlarm,
    playNature,
    pauseNature,
    playRain,
    pauseRain,
    playCoffeeShop,
    pauseCoffeeShop,
    playFirePlace,
    pauseFirePlace,
    pauseCurrentSound,
    playPausedSound
  }
}
