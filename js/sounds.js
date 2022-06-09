export default function(){

  const bgNature = new Audio("./sounds/Floresta.wav");
  const bgRain = new Audio("./sounds/Chuva.wav");
  const bgCoffeeShop = new Audio("./sounds/Cafeteria.wav");
  const bgFirePlace = new Audio("./sounds/Lareira.wav");
  const click = new Audio("./sounds/Click.wav");
  const endTimerAlarm = new Audio("./sounds/End-alarm.wav");
  const jailsonMendes = new Audio("./sounds/JailsonMendes.wav");
  const clickCard = new Audio ("./sounds/ClickSoundCards.wav");

  function jMendes(){
    jailsonMendes.play();
  }
  function pauseJMendes(){
    jailsonMendes.pause();
  }

  function clickSound(){
    click.volume = 0.4;
    click.play();
  }
  
  function clickCards(){
    clickCard.volume = 0.4;
    clickCard.play();
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

  function changeVolume(amount, sound){
   
    if(sound == "nature"){
      bgNature.volume = amount;
    }
    else if(sound == "rain"){
      bgRain.volume = amount;
    }
    else if(sound == "coffeeshop"){
      bgCoffeeShop.volume = amount;
    }
    else if(sound == "fireplace"){
      bgFirePlace.volume = amount;
    }
  }


  return{
    jMendes,
    pauseJMendes,
    clickSound,
    clickCards,
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
    playPausedSound,
    changeVolume
  }
}
