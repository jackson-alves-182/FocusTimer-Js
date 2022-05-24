
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
  buttonSoundOff,
  inputNature,
  inputRain,
  inputCoffeeShop,
  inputFirePlace
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

    addHide();
    document.querySelector('.inputNature').classList.remove('hide');
    sounds.changeVolume(inputNature.value, sound);

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

    addHide();
    document.querySelector('.inputRain').classList.remove('hide');
    sounds.changeVolume(inputRain.value, sound); // puxar volume inicial em 0.5 definido no Slider

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

    addHide();
    document.querySelector('.inputCoffeeShop').classList.remove('hide');
    sounds.changeVolume(inputCoffeeShop.value, sound);

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

    addHide();
    document.querySelector('.inputFirePlace').classList.remove('hide');
    sounds.changeVolume(inputFirePlace.value, sound);

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

  function addHide(){
    const countInput = document.querySelectorAll('.input');
    for(var i = 0; i < countInput.length; i++){
      document.querySelectorAll('.input')[i].classList.add('hide');
    }
  }

  buttonSoundOn.addEventListener('click', function(){
    stopSound();
    sounds.pauseCurrentSound(sound);
  })

  buttonSoundOff.addEventListener('click', function(){
    playSound();
    sounds.playPausedSound(sound);
  })
  inputNature.addEventListener('change', function(){
    sounds.changeVolume(inputNature.value, sound);
    
  })
  inputRain.addEventListener('change', function(){
    sounds.changeVolume(inputRain.value, sound);
  })
  inputCoffeeShop.addEventListener('change', function(){
    sounds.changeVolume(inputCoffeeShop.value, sound); 
    
  })
  inputFirePlace.addEventListener('change', function(){
    sounds.changeVolume(inputFirePlace.value,sound);
  })

}