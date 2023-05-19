const EventEmitter=require('events');

const customEmitter=new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`Data recieved. User : ${name}  Id : ${id}`);
})
customEmitter.on('response',()=>{
    console.log('Waiting for new data');
})

customEmitter.emit('response','John',2701);

customEmitter.on('response',()=>{
    console.log('No response');
})