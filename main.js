const { app, BrowserWindow } = require('electron')


let mainWindow


function createWindow () {
    mainWindow = new BrowserWindow(
        {
            width:1000,
            height:800,
            webPreferences: {nodeIntegration: true}
        }
    )
}

mainWindow.loadFile('index.html')





app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})