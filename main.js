let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let you = document.getElementById("you");
let pc = document.getElementById("pc");
let img = document.getElementById("img");
const tSfx = new Audio('./t.mp3');
let result = document.querySelector(".result .text");
let youNum = Number(you.innerHTML);
let pcNum = Number(pc.innerHTML);
let rndNum = Math.ceil(Math.random() * 5);
let msg = document.getElementById("empty");

window.onload = function() {
    inp.focus();
}

function rnd() {
    rndNum = Math.ceil(Math.random() * 5);


}

btn.addEventListener("click", function(eo) {
    eo.preventDefault();

    if (inp.value == '') {
        msg.style.opacity = "1";
        msg.style.letterSpacing = "3px";

    } else if (Number(inp.value) == rndNum && inp.value != '') {
        result.innerHTML = `
         Yes this is the number, you win
         `
        result.style.color = "#00b837";
        img.src = "./t.png";
        youNum += 1;
        you.innerHTML = youNum;
        inp.value = '';
        rnd();
        tSfx.play();
        inp.focus();
        msg.style.opacity = "0";
        msg.style.letterSpacing = "0px";


    } else if (Number(inp.value) != rndNum && inp.value != '') {

        result.innerHTML = `
           You are wrong, the number was ${rndNum}
           `
        result.style.color = "#ED2626";
        img.src = "./f.png";
        pcNum += 1;
        pc.innerHTML = pcNum;
        inp.value = '';
        rnd();
        msg.style.opacity = "0";
        msg.style.letterSpacing = "0px";
        inp.focus();


    }
});