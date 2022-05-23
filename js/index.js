import Events from "./events.js"
import Sounds from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import{
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"


const sounds = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  TimerAlarm: sounds.TimerAlarm, 
})

const controls  = Controls ({
  buttonPlay,
  buttonPause,
  buttonStop,
  timer,
  clickSound: sounds.clickSound
})

const events = Events(sounds,timer, controls);
