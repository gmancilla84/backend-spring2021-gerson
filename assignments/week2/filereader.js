const fs = require("fs");

// renaming arguments array to a variable called arguments.
const arguments = process.argv;

// garb third argument directly and place it into a variable
let filename = arguments[2];

if (filename === undefined) {

    console.log(`
Welcome to my file reader! Please provide the file name you want to read after the command.
    
Example:
    node filereader.js myFile.txt
    `);

    // run the script early so we don't run the code below.
    return;

}

if (fs.existsSync(filename)) {

    // Read the file based on the argument in the command.
    let fileContents = fs.readFileSync(filename, "utf-8");

    console.log(fileContents);

} else {
    console.log("Sorry but we couldn't find that file! Please check the file name.");
}
