function parsePromised(json){
    return new Promise((fulfill,reject)=>{
        try{
            fulfill(JSON.parse(json))
        
            } catch(e){
                console.log(e.message);
            }
       })
}
parsePromised(process.argv[2])
.then(console.log)