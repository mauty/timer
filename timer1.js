const log = console.log
const beepTimes = process.argv.slice(2);
const sortedBeepTimes = beepTimes.sort()
const filteredBeeps = sortedBeepTimes.filter((element) => { return element > 0 });

if (filteredBeeps.length === 0 ) {
  log('no inputs provided')
}

for (let beepTime of filteredBeeps) {
  log(beepTime);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, beepTime * 1000)
}