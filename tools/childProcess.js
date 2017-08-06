const { spawn } = require('child_process');

function childProcess(cmd, options) {
  return new Promise((fulfill, reject) => {
    const opts = Array.isArray(options) ? options : [options];
    const process = spawn(cmd, opts);

    process.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    process.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    process.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Process '${cmd}' exited with non-zero code ${code}`));
      } else {
        fulfill();
      }
    });
  });
}

module.exports = childProcess;
