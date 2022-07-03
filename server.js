console.log("fff");

//loop,conditions,function,object 👍
//document or window 🚫
// REPL - Read Evaluate Print Loop

// -----FS Module--------
const fs = require('fs');
 //filesystem
//CRUD-create read update delete


//---Sync Module--------
 fs.writeFileSync('hobby.txt', 'Hey hobbies are listening music, watching movies , playing games 😁');

 const data =fs.readFileSync('data.txt', 'utf8');


 fs.appendFileSync('data.txt',' Now a days ');
//  fs.unlinkSync('data.txt');



 // ---Async Module--------
//  fs.writeFileSync('data.txt', 'Hey Node JS , i am here 😁');


// fSs.readFileSync('datas.txt', 'utf8',(err,data) => { console.log(data)});
//  console.log(data);


//  fs.writeFileSync('hobby.txt', 'Music 🎸, Movies 🎬');

//  const data =fs.readFileSync('data.txt', 'utf8');
//  console.log(data);

//  fs.appendFileSync('data.txt','I am new to you');
//  fs.unlinkSync('data.txt');
