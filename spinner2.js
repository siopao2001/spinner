const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let delayer = 100
for (const symbol of spins) {
  setTimeout(() => {
  process.stdout.write (`\r${symbol}`) 
}, delayer)
delayer += 200
}




