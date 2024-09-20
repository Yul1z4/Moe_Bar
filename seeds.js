const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const scriptsPath = path.resolve(__dirname, './seeders');

const files = fs.readdirSync(scriptsPath);

const runScript = (file) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(scriptsPath, file);
    exec(`node ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error ejecutando ${file}:`, error);
        reject(error);
      } else {
        console.log(`Salida de ${file}:\n${stdout}`);
        resolve();
      }
    });
  });
};


const runAllScripts = async () => {
  for (const file of files) {
    if (path.extname(file) === '.js') {
      console.log(`Ejecutando ${file}...`);
      try {
        await runScript(file);
      } catch (error) {
        console.error(`Error ejecutando el archivo ${file}`);
      }
    }
  }
  console.log('Todos los scripts han sido ejecutados.');
};


runAllScripts();
