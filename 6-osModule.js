const os = require('os')
const user = os.userInfo()

// Info of current user
console.log(user)


// Method returns the system uptime in seconds

console.log(`System uptime is ${os.uptime()} in seconds.`)

const curentOS = {
    name: os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(curentOS)