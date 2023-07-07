const args = process.argv.slice(2);

const scheduleAlarm = function(time) {
  if (time <= 0) {
    console.log(`Not possible to schedule in the past: ${time}`);
    return;
  }
  
  if (isNaN(time)) {
    console.log(`Not a number: ${time}`);
    return;
  }
  
  setTimeout(() => {
    console.log('Beep!');
    process.stdout.write('\x07');
  }, time * 1000);
};

for (const arg of args) {
  const time = parseInt(arg, 10);
  scheduleAlarm(time);
  if (!isNaN(time) && time > 0) {
    console.log(`Alarm will beep in ${time} seconds`);
  }
}