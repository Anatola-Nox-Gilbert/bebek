
const para = document.querySelector("p")

let hungerDepletion = true
let lightOn = true;
const playBar = document.querySelector(".playBar")
const sleepBar = document.querySelector(".sleepBar")
const hungerBar = document.querySelector(".hungerBar")
enableStats();
getHungry()
getSleepy();

function enableStats(){
    sleepBar.setAttribute("role", "statsProgress")
    sleepBar.setAttribute("id", "sleepProgress")
    sleepBar.setAttribute("aria-valuenow",100) // control over progress bar's value
    sleepBar.style.setProperty('--progress', 100 + "%");
    sleepBar.style.backgroundColor = " rgb(17, 58, 58)"

    playBar.setAttribute("aria-valuenow",100)
    playBar.setAttribute("id", "playProgress")
    playBar.setAttribute("role","statsProgress")
    playBar.style.setProperty('--progressPlay', 100 + "%");
    playBar.style.backgroundColor = "rgb(17, 58, 58)"

    hungerBar.setAttribute("aria-valuenow",100)
    hungerBar.setAttribute("role", "statsProgress")
    hungerBar.setAttribute("id", "hungerProgress")
    hungerBar.style.setProperty('--progressHung', 100 + "%");
    hungerBar.style.backgroundColor = "rgb(17, 58, 58)"
}
// class progressbar = my sleepbar class - its const refers to that class

const sleepButton = document.getElementById("sleep")
let sleepMinutes = 0;
let count = 0;
sleepButton.addEventListener("click", async (e) => {
    let temp = parseInt(sleepBar.getAttribute("aria-valuenow"))
    if(lightOn){
    lightOn = false
    getRest()
    }
    else{
        lightOn = true
        getSleepy()
        // if getRest is running, stop it
    }
})

const playButton = document.getElementById("play")
let playMinutes = 0
let playCount = 0
playButton.addEventListener( "click", async (e) =>{
    if(playCount < 5){
        playCount++
    }
    playBar.setAttribute("aria-valuenow", 20*playCount) // update aria-val 
    playBar.style.setProperty('--progressPlay', 20*playCount + "%");
})

const hungerButton = document.getElementById("feeder")
let hungCount = 0
hungerButton.addEventListener( "click", async (e) =>{
    let temp = parseInt(hungerBar.getAttribute("aria-valuenow"))
    if(temp < 81){
        hungerBar.setAttribute("aria-valuenow", temp+20) // update aria-val 
        hungerBar.style.setProperty('--progressHung', temp+20 + "%");
    }
    if(!hungerDepletion){ //im using this to control how many times getHungry is called at once
        hungerDepletion = true
        setTimeout(getHungry,1800)
    }
    para.textContent = "called"
})

function getHungry(){
    para.textContent = "check"
    let temp = parseInt(hungerBar.getAttribute("aria-valuenow"))
    hungerBar.setAttribute("aria-valuenow", temp-1) 
    hungerBar.style.setProperty('--progressHung', temp-1 + "%")
    if(temp > 10){
        setTimeout(getHungry,1000)
    }
    else if(temp > 1){
        setTimeout(getHungry,10000)
    }
    else{
        hungerDepletion = false
    }

}

function getSleepy(){
    let temp = parseInt(sleepBar.getAttribute("aria-valuenow"))
    if(temp > 1 && lightOn){
        sleepBar.setAttribute("aria-valuenow", temp-1) 
        sleepBar.style.setProperty('--progress', temp-1 + "%")
        setTimeout(getSleepy,1800)
    }
}

function getRest(){
    let temp = parseInt(sleepBar.getAttribute("aria-valuenow"))
    if(temp > 1 && !lightOn && temp < 100){
        sleepBar.setAttribute("aria-valuenow", temp+1) 
        sleepBar.style.setProperty('--progress', temp+1 + "%")
        setTimeout(getRest,2000)
    }
}