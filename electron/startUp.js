const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;

console.log('Connecting to react server..')

const tryConnection = () => client.connect({port: port}, () => {

  console.log('Connection successful');

  client.end();

  if(!startedElectron) {

    console.log('Starting Electron');
    startedElectron = true;

    const exec = require('child_process').exec;
    const electron = exec('npm run electron');
    
    electron.stdout.on('data', function(data) {
      console.log('Message from Electron:', data.toString());
    });
  }
});

tryConnection();

client.on('error', (error) => {
  console.error('Error:', error.message || error);
  setTimeout(tryConnection, 1000);
});
