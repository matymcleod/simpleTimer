function timer() {
  let args = process.argv.splice(2);
  for (let arg of args) {
    if (arg > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, arg * 1000);
    }
  }
};
timer();