
setInterval(() => {
    document.querySelector(".time").textContent = new Date().toLocaleTimeString();
}, 1000);

let bg = document.querySelector(".header")
let vaqt = document.querySelector(".time")
const hozirgiVaqt = Number(new Date().toLocaleTimeString().slice(0,2))

const title = document.querySelector(".title")


if( hozirgiVaqt >= 6 && hozirgiVaqt < 12){
    bg.style.background = "url(./images/morning.jpg)";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundRepeat = "no-repeat";
    title.textContent = "Morning";
    title.style.color = "black";
}else if(hozirgiVaqt >= 12 && hozirgiVaqt < 18){
    bg.style.background = "url(./images/afternoon.jpg)";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundRepeat = "no-repeat"
    title.textContent = "Afternoon";
    title.style.color = "black";
}else if(hozirgiVaqt >= 18 && hozirgiVaqt < 20){
    bg.style.background = "url(./images/evening.jpg)";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundRepeat = "no-repeat";
    title.textContent = "Evening";
    vaqt.style.border = "2px solid white"
    vaqt.style.color = "white";
    title.style.color = "white";
}else if(hozirgiVaqt >= 20 && hozirgiVaqt < 24){
    bg.style.background = "url(./images/night.jpg)";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundRepeat = "no-repeat"
    title.textContent = "Night";
    vaqt.style.border = "2px solid white"
    vaqt.style.color = "white";
    title.style.color = "white";
}else if(hozirgiVaqt >= 0 && hozirgiVaqt < 6){
    bg.style.background = "url(./images/night.jpg)";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundRepeat = "no-repeat";
    title.textContent = "Night";
    vaqt.style.border = "2px solid white"
    vaqt.style.color = "white";
    title.style.color = "white";
}