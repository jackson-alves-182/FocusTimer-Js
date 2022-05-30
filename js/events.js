
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
  jailson,
  buttonSoundOn,
  buttonSoundOff,
  inputNature,
  inputRain,
  inputCoffeeShop,
  inputFirePlace,
  lightMode,
  darkMode
} from "./elements.js"


export default function(sounds,timer,controls){
  let sound;
  let dark = new Boolean(false);

  let friend;
  let testFriend = new Boolean(false);

  jailson.addEventListener('click', function(){
    sounds.jMendes();
  })

  darkMode.addEventListener('click', function(){
    lightMode.classList.remove('hide');
    darkMode.classList.add('hide');

    dark = true;
    darkModeClasses();
  })

  lightMode.addEventListener('click', function(){
    darkMode.classList.remove('hide');
    lightMode.classList.add('hide');

    dark = false;
    lightModeClasses();
  })

  buttonPlay.addEventListener('click', function(){
    controls.play();
  
    if(friend == "fri"){
      friend += "e";
    }
    if(friend == "friend"){
     jailson.classList.remove('hide');
     testFriend = true;
    }
  })

  buttonPause.addEventListener('click', function(){
    controls.pause();
  })

  buttonStop.addEventListener('click', function(){
    friend += "d";
    controls.stop();

    if(testFriend == true){
      jailson.classList.add('hide');
      sounds.pauseJMendes();
      testFriend = false;
    }
  })

  buttonAddTime.addEventListener('click', function(){
    timer.addTime();
  });

  buttonRemoveTime.addEventListener('click', function(){
    timer.removeTime();
  });

  buttonNature.addEventListener('click', function(){
    friend += "i";

    removeClassSoundBtn(dark);
    if(dark == false){
      buttonNature.classList.add('color');
    }
    else{
      buttonNature.classList.add('dark-theme');
    }
    
    if(sound != null ){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playNature();
    playSound();

    sound = "nature";

    addHide();
    document.querySelector('.inputNature').classList.remove('hide');
    sounds.changeVolume(inputNature.value, sound);
  });

  buttonRain.addEventListener('click', function(){
    friend = "f";

    removeClassSoundBtn(dark);
    if(dark == false){
      buttonRain.classList.add('color');
    }
    else{
      buttonRain.classList.add('dark-theme');
    }
   

    if(sound != null ){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playRain();
    playSound();

    sound = "rain";

    addHide();
    document.querySelector('.inputRain').classList.remove('hide');
    sounds.changeVolume(inputRain.value, sound); // puxa volume inicial em 0.5 definido no Slider
  });

  buttonCoffeeShop.addEventListener('click', function(){
    friend += "n";
  

    removeClassSoundBtn(dark);
    if(dark == false){
      buttonCoffeeShop.classList.add('color');
    }
    else{
      buttonCoffeeShop.classList.add('dark-theme');
    }
    
    
    if(sound != null){
      sounds.pauseCurrentSound(sound);
    }
    
    sounds.playCoffeeShop();
    playSound();

    sound = "coffeeshop";

    addHide();
    document.querySelector('.inputCoffeeShop').classList.remove('hide');
    sounds.changeVolume(inputCoffeeShop.value, sound);
  });

  buttonFireplace.addEventListener('click', function(){
    friend += "r";
    removeClassSoundBtn(dark);
    if(dark == false){
      buttonFireplace.classList.add('color');
    }
    else{
      buttonFireplace.classList.add('dark-theme');
    }
   

    if(sound != null){
      sounds.pauseCurrentSound(sound);
    }

    sounds.playFirePlace();
    playSound();

    sound = "fireplace";

    addHide();
    document.querySelector('.inputFirePlace').classList.remove('hide');
    sounds.changeVolume(inputFirePlace.value, sound);

  });

  jailson.addEventListener('click', function(){

  })

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

  function removeClassSoundBtn(dark){

    const countBtn = document.querySelectorAll('.sound-btn');

    if(dark == false){
      for(var i = 0; i < countBtn.length; i++){
        document.querySelectorAll('.sound-btn')[i].classList.remove('color');

        if(document.querySelectorAll('.sound-btn')[i].classList.contains('dark-theme')){
          document.querySelectorAll('.sound-btn')[i].classList.add('color');
          document.querySelectorAll('.sound-btn')[i].classList.remove('dark-theme');
        }
      }
    }
    else{
      for(var i = 0; i < countBtn.length; i++){
        document.querySelectorAll('.sound-btn')[i].classList.remove('dark-theme');

        if(document.querySelectorAll('.sound-btn')[i].classList.contains('color')){
          document.querySelectorAll('.sound-btn')[i].classList.remove('color');
          document.querySelectorAll('.sound-btn')[i].classList.add('dark-theme');
        }
      }
    }
  }

  function darkModeClasses(){
    removeClassSoundBtn(dark);

    document.querySelector('body').classList.remove('lightBG');
    document.querySelector('body').classList.add('darkBG');

    document.querySelector('.container').classList.remove('container-light-bg');
    document.querySelector('.container').classList.add('container-dark-bg');

    document.documentElement.style.setProperty('--btn-bg-color','#ffffff3f');
    document.documentElement.style.setProperty('--font-color', '#ffffffa9');

    document.documentElement.style.setProperty('--btn-secondary-color', '#ffffffa9');
    document.documentElement.style.setProperty('--btn-text-color', '#000000');
  }

  function lightModeClasses(){
    removeClassSoundBtn(dark);

    document.querySelector('body').classList.remove('darkBG');
    document.querySelector('body').classList.add('lightBG');

    document.querySelector('.container').classList.remove('container-dark-bg');
    document.querySelector('.container').classList.add('container-light-bg');

    document.documentElement.style.setProperty('--btn-bg-color','#e2e1e67e');
    document.documentElement.style.setProperty('--font-color', '#000000');

    document.documentElement.style.setProperty('--btn-secondary-color', '#323238');
    document.documentElement.style.setProperty('--btn-text-color', '#FFFFFF');
  }

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


  buttonSoundOn.addEventListener('click', function(){
    stopSound();
    sounds.pauseCurrentSound(sound);
  })

  buttonSoundOff.addEventListener('click', function(){
    playSound();
    sounds.playPausedSound(sound);
  })
}