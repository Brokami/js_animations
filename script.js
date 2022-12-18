const nightMode = document.querySelector("#nightButton")
const body = document.querySelector("body")
const subContainers = document.querySelector(".subContainer")
const description = document.querySelector(".description")
const containerVideoGame = document.querySelector('#jeuVideo')
const container3D = document.querySelector('#ddd')
const containerMarketing = document.querySelector('#marketing')
const containerWeb = document.querySelector('#web')
const containerDesign = document.querySelector('#design')
const luigiButton = document.querySelector('#luigiButton')
const redBoxes = document.querySelectorAll('.red')
const marioRows = document.querySelectorAll('.row')
const thanksButton = document.querySelector('#thanks')
const titles = document.querySelectorAll('h2')



nightMode.addEventListener("click", function(){
    nightModeSwap();
})

function nightModeSwap(){
    body.classList.toggle('night');
    subContainers.classList.toggle('night');
    description.classList.toggle('night');
    containerVideoGame.classList.toggle('night');
    container3D.classList.toggle('night');
    containerMarketing.classList.toggle('night');
    containerWeb.classList.toggle('night');
    containerDesign.classList.toggle('night');
}

luigiButton.addEventListener("click", function(){
        for (let i=0; i<12; i++){
            redBoxes[i].classList.toggle('green');
        }
})

const h2 = document.createElement('h2');
const thankYouText = []
thankYouText[0] = document.createTextNode('Merci ')
thankYouText[1] = document.createTextNode("d'avoir ")
thankYouText[2] = document.createTextNode('lu ')
thankYouText[3] = document.createTextNode("jusqu'ici!")
const thankYouContainer = document.querySelector('#thankU')
let thanksIndex = 0


thanksButton.addEventListener("click", function(){
    h2.appendChild(thankYouText[thanksIndex]);
    thankYouContainer.appendChild(h2);
    thanksIndex++;
})

function randomRGBTitles(){
    let randomR = Math.floor(Math.random()*255);
    let randomG = Math.floor(Math.random()*255);
    let randomB = Math.floor(Math.random()*255);
    randomColor = "rgb(" + randomR.toString() + ", "+ randomG.toString() + ", " + randomB.toString() + ")"
   
}

document.addEventListener('click', function() {
        for (let i = 0; i < 8;i++){
            randomRGBTitles();
            titles[i].style.color = randomColor;
        }
})
