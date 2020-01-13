var promise=new Promise(function(fulfill,reject){
    fulfill('MANHATTAN');
    attachTitle(res); 
}).then(function attachTitle(res) {
    return "DR. "+res;
})
promise.then(console.log)



//    'use strict';

//    function attachTitle(name) {
//     return 'DR. ' + name;
//    }

//    Promise.resolve('MANHATTAN')
//  .then(attachTitle)
//  .then(console.log);

