// const fs = require('fs');

//  fs.stat('demo.js',(err,data)=>{
//     console.log(data);
//  });

// const fs = require('fs');
// const data = fs.readFileSync('deep.txt');
// console.log(data.toString());


// const { ChildProcess } = require('child_process');
// const fs = require('fs');
// fs.rename('abc.txt','xyz.txt',(err)=>{
//     if(err) { throw err}
//         console.log('file');
    
//     }); 

    
 

// const fs = rquire('fs');
// fs.unlink('deep.txt',(err)=>{
//     if(err) {throw err}
//         console.log('file deleted');
// });

const child_process = require('child_process');
child_process.exec('dir',(err,stdout,stdin)=>{
    console.log(stdout);
}) 
