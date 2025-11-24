const fs = require("fs");

//write file
fs.writeFile("message.txt", "Hello from nodejs", function(err){
    if(err) throw error;
    console.log("done")
});

//read file
fs.readFile("message.txt", 'utf8' ,async function(err,data){
	if (err) throw err;
	await console.log(data);
});

//copy file
fs.copyFile("message.txt","newmsg.txt",function(err){
	if (err)  console.log(err);
	console.log("hogya save");
});

//delete file
fs.rm("newmsg.txt", function(err){
	if (err) throw err;
	console.log("delete hogya");
});

// creating directory
// fs.mkdir("hiee", { recursive: true }, function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("created folder");
//     }
// });

// deleting directory
fs.rmdir("hiee", {recursive: true, force: true}, function(err){
	if (err) throw err;
	else("deleted")
});
