import { spawn } from "child_process";

function execCommand(cmd: string, args: string[]) {
  return new Promise<string>((resolve, reject) => {
    const childproc = spawn(cmd, args);

    let cmdOutput = '';
    childproc.stdout.on('data', (chunk) => {
      cmdOutput += chunk;
    });
    
    let cmdError = '';
    childproc.stderr.on('data', (chunk) => {
      cmdError += chunk;
    });

    childproc.on('error', (err) => {
      reject(err);
    });

    childproc.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(cmdError));
      } else {
        resolve(cmdOutput);
      }
    })
  });
}

execCommand('ls', ['noarg']).then((cmdOutput) => {
  console.log(`Successful spawn: ${cmdOutput}`);
}).catch((err) => {
  console.log(`Unsuccessful spawn: ${err.message}`);
})

/*execCommand('ls', ['noarg']).then((cmdOutput) => {
  return res.send({output: cmdOutput})
}).catch((err) => {
  return res.status(500).send();
})*/