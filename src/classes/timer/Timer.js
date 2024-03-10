// class Timer {
//     constructor() {
//         this.seconds = 5;
//         this.intervalId = null;
//         this.onTick = null;

//         this.tick = this.tick.bind(this);
//     }

//     start() {
//         this.intervalId = setInterval(this.tick, 1000);
//     }

//     stop() {
//         clearInterval(this.intervalId);
//     }

//     tick() {
//         this.seconds--;
//         console.log(this.seconds);
//         if (this.seconds <= 0) {
//             this.stop()
//         }
//     }

//     addTime() {
//         clearInterval(this.intervalId);
//         this.intervalId = null
//         this.seconds++;
//         this.start();
//     }
// }

// export default Timer;