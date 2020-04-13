const { app, BrowserWindow } = require('electron')

async function createWindow() {
    try {
        // Cree la fenetre du navigateur.
        let win = new BrowserWindow({
            width: 800,
            height: 600//,
            // webPreferences: {
            //     nodeIntegration: true
            // }
        });

        win.loadFile('index.html');

    } catch (error) {
        console.error(error);
    }
}

app.whenReady().then(createWindow)
