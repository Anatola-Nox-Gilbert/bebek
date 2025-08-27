//console.log('Hello from Electron 👋')

const { app, BrowserWindow } = require('electron') // imports 2 electron modules 

const createWindow = () =>{ // function to create new window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        }
    })
    win.loadFile('index.html') // my js loads the html not the other way round?
}

app.whenReady().then(() => { //asynchronous can only call when ready
  createWindow() // we are listening for the activate even 

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // it checks which platform it is on and closes based on that
    app.quit()
  }
})


// var i = 0;
// const feedButton = document.getElementById('feeder') 
// feedButton.addEventListener("click", async (e) => { //when feedbutton is pressed
//     para.textContent = "Done!"


    // if (i == 0) {
    //     i = 1;
    //     var elem = document.getElementById("myBar");
    //     var width = 1;
    //     var id = setInterval(frame, 10);
    //     function frame() {
    //     if (width >= 100) {
    //         clearInterval(id);
    //         i = 0;
    //         } else {
    //         width++;
    //         elem.style.width = width + "%";
    //         }
    //     }
    // }
    //progress animation
    // const hungerBar = document.querySelector('myBar')
    // hungerBar.setAttribute('id','progress')
// })




