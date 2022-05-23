
import{
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAddTime,
  buttonRemoveTime,
  buttonNature,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  buttonSoundOn,
  buttonSoundOff
} from "./elements.js"


export default function(sounds,timer,controls){
  let sound;

  buttonPlay.addEventListener('click', function(){
    controls.play();
  })

  buttonPause.addEventListener('click', function(){
    controls.pause();
  })

  buttonStop.addEventListener('click', function(){
    controls.stop();
  })

  buttonAddTime.addEventListener('click', function(){
    timer.addTime();
  });

  buttonRemoveTime.addEventListener('click', function(){
    timer.removeTime();
  });

  buttonNature.addEventListener('click', function(){
    buttonNature.classList.add('color');
   
    if(sound != null ){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playNature();
    playSound();

    sound = "nature";

    buttonRain.classList.remove('color');
    buttonCoffeeShop.classList.remove('color');
    buttonFireplace.classList.remove('color');
  });

  buttonRain.addEventListener('click', function(){
    buttonRain.classList.add('color');

    if(sound != null ){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playRain();
    playSound();

    sound = "rain";

    buttonNature.classList.remove('color');
    buttonCoffeeShop.classList.remove('color');
    buttonFireplace.classList.remove('color');
  });

  buttonCoffeeShop.addEventListener('click', function(){
    buttonCoffeeShop.classList.add('color');
    
    if(sound != null){
      sounds.pauseCurrentSound(sound);
    }
    
    sounds.playCoffeeShop();
    playSound();

    sound = "coffeeshop";

    buttonRain.classList.remove('color');
    buttonNature.classList.remove('color');
    buttonFireplace.classList.remove('color');
  });

  buttonFireplace.addEventListener('click', function(){
    buttonFireplace.classList.add('color');

    if(sound != null){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playFirePlace();
    playSound();

    sound = "fireplace";

    buttonNature.classList.remove('color');
    buttonRain.classList.remove('color');
    buttonCoffeeShop.classList.remove('color');
  });

  function stopSound(){
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
  }

  function playSound(){
    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
  }

buttonSoundOn.addEventListener('click', function(){
  stopSound();
  sounds.pauseCurrentSound(sound);
})

buttonSoundOff.addEventListener('click', function(){
  playSound();
  sounds.playPausedSound(sound);
})

}