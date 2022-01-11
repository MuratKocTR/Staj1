const electron = require("electron");
const url = require("url")
const path = require("path")


const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences:{
            nativeWindowOpen:true,
            nodeIntegration: true,
        contextIsolation: false
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "main.html"),
            protocol: "file:",
            slashes: true
        })
    )
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu);

    ipcMain.on("key", (err, data) => {
        console.log(data);
    })
    ipcMain.on("key:inputValue",(err,data)=>{
        console.log(data);
    })
    //yeni pencere
    ipcMain.on("key:newWindow",()=>{
       createWindow();
    })
    mainWindow.on('close',()=>{
        app.quit();
    })
});

const mainMenuTemplate = [
    {
        label: "Dosya",
        submenu: [
            {
                label: "Yeni TODO EKLE"
            },
            {
                label: "tumunu sil"
            },

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
            label: "Dev Tools",
            submenu: [
                {
                    label: "gelistirici penceresini ac",
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
function createWindow(){
    addWindow=new BrowserWindow({
        widgth:500,
        height:500,
        title:"yeni bir pencere"
    })
    addWindow.loadURL(url.format({
       pathname:path.join(__dirname,"modal.html"),
       protocol:"file",
       slashes:true
    }))
    addWindow.on('close',()=>{
        addWindow=null;
    })
}
