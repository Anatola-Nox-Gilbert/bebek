console.log("handler loaded")

window.addEventListener("keydown", function(b){
    if(b.code == 'KeyW') {player.vyu = -player.speed}
    if(b.code == 'KeyA') {player.vxl = -player.speed}
    if(b.code == 'KeyS') {player.vyd = player.speed}
    if(b.code == 'KeyD') {player.vxr = player.speed}
});
 
window.addEventListener("keyup", function(e){
    console.log(e.code)
    if(e.code == 'KeyW') {player.vyu = 0}
    if(e.code == 'KeyA') {player.vxl = 0 }
    if(e.code == 'KeyS') {player.vyd = 0}
    if(e.code == 'KeyD') {player.vxr = 0}
});
