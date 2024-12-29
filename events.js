const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
    console.log('Turn Off the motor switch');
    setTimeout(()=>{
        console.log('Turn off the motor switch.Its a gentle remainder');
    },3000)
});
console.log("script is running");
myEmitter.emit('waterFull');
console.log('script is still running');