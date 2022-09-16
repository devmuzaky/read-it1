const {app, BrowserWindow} = require('electron')

let mainWindow

// setTimeout(() => {
//     console.log(app.isReady())
// }, 2000)


function createWindow() {
    mainWindow = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: {nodeIntegration: true},
            show: false
        }
    )
    mainWindow.loadFile('index.html')
    // mainWindow.loadURL('https://google.com')

    mainWindow.webContents.openDevTools();

    mainWindow.once('ready-to-show', mainWindow.show)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}
//
// app.on('before-quit', event => {
//
//     console.log('Preventing quit')
//     event.preventDefault()
// })






// app.on('browser-window-blur', e => {
//     console.log('App Unfocused')
//     setTimeout(app.quit, 3000)
// })

// app.on('browser-window-focus', e => {
//     console.log('App Focused')
// })

app.on('ready', () =>{
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

