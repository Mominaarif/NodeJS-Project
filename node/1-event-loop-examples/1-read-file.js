const { readFile } = require('fs')

console.log('Starting the First task');

readFile('./content/first.txt','utf8', (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data)
    console.log('First task finished');
})

console.log('Starting the Second task');

readFile('./content/first.txt','utf8', (err, data) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log(data)
    console.log('Second task finished');
})

console.log('Starting the Third task');