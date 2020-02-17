const fs = require("fs");
const FileName = "target.txt";

//fs.watch(FileName, () => console.log("File changed!"));

fs.readFile(FileName, (err, data) => {
    if (err) { console.log(err) }
    console.log(data.toString());
});

console.log("Nodejs is a Asynchronous programming"); //first this executes