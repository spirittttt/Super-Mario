var loaderbutton = document.querySelector("#loader #button")
var loader = document.querySelector("#loader")
loaderbutton.addEventListener("click",function(){
    loader.style.top = "-100%"
})

var backgroundMusic = new Audio("song.mp3")
window.addEventListener("click",function(){
    backgroundMusic.play()
    enemy.style.display = "block"
})

// var jumpsound = new Audio("jump.mp3")
// var mario = document.querySelector("#mario img")
// document.addEventListener("keydown",function(event){
//     let key = event.key
//     console.log(key)
//     if(key == "ArrowUp"){
//         mario.classList.add('animatemario')
//         jumpsound.play()
//         jumpsound.volume = 0.2
//     }
//     setTimeout(() => {
//         mario.classList.remove('animatemario')
//     }, 700);
//     if(key == "ArrowLeft"){
//         mario.style.transform = "scaleX(-1)"
//     }
//     if(key == "ArrowRight"){
//         mario.style.transform = "scaleX(1)"
//     }
// })

var scorecontainer = document.querySelector("#scorecontainer span")
score = 0
cross = true;
var jumpsound = new Audio("jump.mp3")
var mario = document.querySelector("#mario")
document.addEventListener("keydown",function(elem){
    let key = elem.key
    if(key == "ArrowUp"){
        mario.classList.add("animatemario")
        jumpsound.play()
    }
    else if(key == "ArrowRight"){
        mario.style.transform = "scaleX(1)"
        mario = document.querySelector('#mario')
        mx = parseInt(window.getComputedStyle(mario , null).getPropertyValue('left'));
        mario.style.left = mx + 112+"px";
    }
    else if(key == "ArrowLeft"){
        mario.style.transform = "scaleX(-1)"
        mx = parseInt(window.getComputedStyle(mario , null).getPropertyValue('left'))
        mario.style.left = (mx - 112)+"px";
    }
    setTimeout(() => {
        mario.classList.remove("animatemario")
    }, 1500);
})
var obstacleani = document.querySelector(".obstacleani")
setInterval(() => {
    mario = document.querySelector("#mario")
    enemy = document.querySelector("#enemy")
    var gameoversound = new Audio("over.mp3")
    var coinsound = new Audio("coin.mp3")

    mx = parseInt(window.getComputedStyle(mario , null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario , null).getPropertyValue('top'))

    ex = parseInt(window.getComputedStyle(enemy , null).getPropertyValue('left'));
    ey = parseInt(window.getComputedStyle(enemy , null).getPropertyValue('top'))

    offsetx = Math.abs(mx - ex)
    offsety = Math.abs(my - ey)
    if(offsetx < 50  && offsety < 150){
        gameover.style.visibility = "visible"
        backgroundMusic.pause()
        gameoversound.play()
        mario.style.left = (mx - 1112)+"px";
    }
    else if(offsetx< 145 & cross) {
        gameovernum = 1
        gameoversound.pause()
        score+=1;
        updatescore(score);
        cross= false; 
        setTimeout(() => {
            coinsound.play()
            cross = true;
        }, 1000);
        setTimeout(() => {
            enemyduration =  parseFloat(window.getComputedStyle(enemy , null).getPropertyValue('animation-duration'));
        newDur = enemyduration -0.2;
        enemy.style.animationDuration = newDur + 's';
        }, 700);
    }
    console.log(scoreincrease)
}, 100);


gameover = document.querySelector(".gameover")
function updatescore(score){
    scorecontainer.innerHTML = score
}

