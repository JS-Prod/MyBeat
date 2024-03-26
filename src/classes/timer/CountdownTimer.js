// class CountdownTimer{
//     constructor(length){
//         this.length = length
//         this.secondsRemaining = length
//         this.intervalID = null
//         this.setState = null
//     }

//     start(){
//         this.intervalID = setInterval(() => {
//             this.secondsRemaining--
//             this.setState(this.secondsRemaining)
//             if(this.secondsRemaining <= 0) this.stop()
//         }, 1000)
//     }

//     stop(){
//         this.intervalID = clearInterval(this.intervalID)
//     }

//     addTime(){
//         this.stop()
//         this.secondsRemaining++
//         this.setState(this.secondsRemaining)
//         this.start()
//     }

//     linkSetStateFunction(setStateFunction){
//         this.setState = setStateFunction
//     }
// }

// export default CountdownTimer