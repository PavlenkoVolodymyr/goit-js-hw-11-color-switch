import colors from './colors.js'

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', () => {
  changeBackgroundColor.start()
})
refs.stopBtn.addEventListener('click', () => {
  changeBackgroundColor.stop()
})

console.log(colors[0])

const changeBackgroundColor = {
  getNewColorId: null,
  isActive: false,

  start() {
    refs.startBtn.disabled = true
    refs.stopBtn.disabled = false
    if (this.isActive) {
      return
    }

    refs.body.style.backgroundColor = '#ffffff'
    this.isActive = true
    this.getNewColorId = setInterval(() => {
      refs.body.style.backgroundColor = `${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      }`
    }, 1000)
  },

  stop() {
    refs.startBtn.disabled = false
    refs.stopBtn.disabled = true
    clearInterval(this.getNewColorId)
    this.isActive = false
  },
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
