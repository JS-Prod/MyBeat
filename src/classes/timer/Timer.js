class Timer {
    constructor() {
      this.seconds = 0
      this.isRunning = false
      this.intervalId = null
    }
  
    startTimer() {
      if (!this.isRunning) {
        this.isRunning = true
        this.intervalId = setInterval(() => {
          this.seconds++
          console.log('Seconds:', this.seconds)
        }, 1000)
      }
    }
  
    stopTimer() {
      if (this.isRunning) {
        clearInterval(this.intervalId)
        this.isRunning = false
      }
    }
  
    resetTimer() {
      this.seconds = 0
    }
  }
  
  const timer = new Timer()
  
  export default timer