var promise=new Promise( (fulfill,reject)=> {
    fulfill('SECRET VALUE');
    reject(new Error('SECRET VALUE'));
});
var promise=Promise.resolve('SECRET VALUE');
var promise=Promise.reject(new Error('SECRET VALUE'))
promise.catch(function(err){
    console.error('THERE IS AN ERROR!!!')
    console.log(err.message)
})