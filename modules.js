// var fs = require('fs')
// //to get the text in string format we have to mention "utf8" otherwise it will display in bitwise
// fs.readFile("./text.txt","utf8",function(err,res){
//     if(err)
//         console.log("incorrect")
//     else
//         console.log(res.toUpperCase())
// })
//npm - node package manager

// var os = require('os')
// console.log(os.hostname())
// console.log(os.getPriority())
// console.log(os.homedir())
// console.log(os.type())
// console.log(os.version)

// var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I am a HumanBeing"
// }));
// // object = {text : "I am a HumanBeing",e : "##" ,T : "U"}
// console.log(cowsay.say({
//     text : "I am a HumanBeing",
//     e : "##" ,
//     T : "U"
// }));

// var calc = require('./calc')
// console.log(calc.add(12,13))
// console.log(calc.sub(41,21))
// console.log(calc.mul(10,20))
// calc.div(12,2,(err,res)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(res)
// })

// var book = {name:"core java", author : "herbert", price : 500}
// var json = JSON.stringify(book)
// console.log(book)
// console.log(json)
// var obj = JSON.parse(json)
// for(ele in obj)
//     console.log(ele+ ":"+obj[ele])

var chalk = require("chalk")

const log = console.log;
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));//this is called "cascaded function call"

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

