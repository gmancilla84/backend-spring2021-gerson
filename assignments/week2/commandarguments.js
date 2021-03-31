let arguments = process.argv;

//console.log(arguments);

let request = arguments[2];

if (request === "hello") {
    console.log("Hello there, how are you doing?");
} else if (request === "weather") {
    console.log("I'm sorry but I have no access to the internet at the moment...");
} else {
    console.log("I'm sorry, but I don't understand your request.");
}