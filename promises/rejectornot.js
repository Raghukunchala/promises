var promise = new Promise ((fulfill,reject)=>{
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE'))
 
});
function onfulfill(){
    console.log('I FIRED')
}
function onreject(){
    Console.log('I DID NOT FIRED')
}
 promise.then(onfulfill,onreject);
