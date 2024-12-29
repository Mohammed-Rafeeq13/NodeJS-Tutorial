const fs = require('fs')
//This is called Non Blocking I/O model means when the radFile takes time to fetch the dat from the server then node js doesnot stop the execution of other important statements.
//readFile
fs.readFile('file.txt','utf8',(err,data) => {
    console.log(err,data);
    //We can use the below method also
    // if(err){
    //     console.log("Error Is : ",err);
    //     return;
    // }
    // else{
    //     console.log(data);
    // }
})
//If Developer wnats to stop the other executions then we can use readFileSync
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())//simple console.log(a)gives the buffer if you want to display the information use .toString()

//WrieFile
// fs.writeFile('file2.txt',"This a data in the file",() => {
//     console.log("wriiten in the file");
// })
const b = fs.writeFileSync('file2.txt',"Write the data in the file")
console.log(b);
console.log("Finshed The Execution of the file");

