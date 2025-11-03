
let timerId
let milliseconds = 0
let elapsedTime = 0
let gravity = 9.81


const timerDisplay = document.getElementById('timer')
const resultDisplay = document.getElementById('results')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

startBtn.onclick = () => {
  if (!timerId) {
    timerId = setInterval(() => {
      milliseconds += 100 // Increment by 100 milliseconds
      const seconds = (milliseconds / 1000).toFixed(1) // Convert to seconds with 3 decimal places
      timerDisplay.textContent = `${seconds}s`
    }, 100)
  }

  startBtn.style.display = 'none'
  stopBtn.style.display = 'block'
}

stopBtn.onclick = () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
    elapsedTime = milliseconds / 1000 // Save the elapsed time
  }

  let height = gravity / 2 * (elapsedTime / 2)**2
  let heightFeet = height * 3.281
  resultDisplay.innerText = `Height at apex of flight: ${heightFeet.toFixed(1)} feet`
  // resultDisplay.style.animation = 'fadeInDown 0.5s ease-out'
  // resetBtn.style.animation = 'fadeInUp 0.5s ease-out'
  resultDisplay.classList.add('animate__rubberBand')

  stopBtn.style.display = 'none'
  resetBtn.style.display = 'block'
}

resetBtn.onclick = () => {
  milliseconds = 0
  elapsedTime = 0
  timerDisplay.innerText = '0.0s'
  resultDisplay.innerText = ''
  // resultDisplay.style.removeProperty('animation')
  // resetBtn.style.removeProperty('animation')
  resultDisplay.classList.remove('animate__rubberBand')

  resetBtn.style.display = 'none'
  startBtn.style.display = 'block'
}
