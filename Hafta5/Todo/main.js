const electron = require("electron");
const url = require("url")
const path = require("path")


const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow, addWindow;
let todoList = [] ;

app.on("ready",()=>{

    mainWindow = new BrowserWindow({
        frame : true,
      
        webPreferences:{
            nativeWindowOpen:true,
            nodeIntegration: true,
        contextIsolation: false,
        
        }
        
    });
    mainWindow.setResizable(true)
    //pencerenin oluşturulması
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "mainWindow.html"),
            protocol: "file:",
            slashes: true
        })
    )
    //menunun oluşturulması
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu);

    ipcMain.on("newTodo:close", () => {
        addWindow.close();
        addWindow =null;
    })
    ipcMain.on("newTodo:save", (err,data) => {
        if(data){
            let todo = {
            id:todoList.length+1,
            text:data
            }
            todoList.pop()
            todoList.push(todo)
           mainWindow.webContents.send("todo:addItem",todo)
            addWindow.close();
            addWindow= null;
        }
    })
})
const mainMenuTemplate = [
    {
        label: "Dosya",
        submenu: [
            {
                label: "Yeni TODO EKLE",
                click(){
                    createWindow();
                }
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
            label: "geliştirici araçları",
            submenu: [
                {
                    label: "gelistirici araçları",
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
        title:"yeni bir pencere",
        frame : true,
        //web preferences eklemez isek butonlar çalışmıyor
        webPreferences:{
            nativeWindowOpen:true,
            nodeIntegration: true,
        contextIsolation: false,
        
        }
    })
    addWindow.setResizable(true)
    addWindow.loadURL(url.format({
       pathname:path.join(__dirname,"newTodo.html"),
       protocol:"file",
       slashes:true
    }))
    addWindow.on('close', () => {
        addWindow=null;
    })
}
function getTodoList(){
    console.log(todoList);
}