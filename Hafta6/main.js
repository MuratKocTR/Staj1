const electron = require("electron");
const url = require("url")
const path = require("path")


const { app, BrowserWindow, Menu, ipcMain } = electron;

let sıraWindow;
let doktorWindow;
let hastaList;

app.on('ready', () => {
    sıraWindow = new BrowserWindow({
        webPreferences:{
            nativeWindowOpen:true,
            nodeIntegration: true,
        contextIsolation: false
        }
    });

    sıraWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "SıraWindow.html"),
            protocol: "file:",
            slashes: true
        })
    )
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu);

    ipcMain.on("DoktorWindow:save", (err,data) => {
        if(data){
            let siradaki = {
            
            text:data
            }
            hastaList=siradaki 
           
           sıraWindow.webContents.send("siradaki:addItem",siradaki)
        }
    })

});

app.on('ready', () => {
    doktorWindow = new BrowserWindow({
        webPreferences:{
            nativeWindowOpen:true,
            nodeIntegration: true,
        contextIsolation: false
        }
    });

    doktorWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "DoktorWindow.html"),
            protocol: "file:",
            slashes: true
        })
    )
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu);

});
const mainMenuTemplate = [
    {
        label: "Sıra",
        submenu: [
            {
                label: "cikis",//role quit yazarsak o buton direkt kapanmasını sağlar
                accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
                role: "quit"
            }

        ]
    },

]

if (process.env.NODE_ENV !== "production") {
    mainMenuTemplate.push(
        {
            label: "Console",
            submenu: [
                {
                    label: "Console",
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    label: "yenile",
                    role: "reload"
                }
            ]
        }
    )
}
