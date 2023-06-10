//for night and day mode
const mainbox = document.querySelector('.mainbox');
const tbtn = document.querySelector('.togglebtn');
const root = document.querySelector(':root');

tbtn.addEventListener("click", nightmode);

function nightmode (){
root.classList.toggle('night');
tbtn.classList.toggle('active');
}

//game 
const btns = mainbox.querySelector('.btns');
const possibleChoices= btns.querySelectorAll('button'); //selecting all the buttons at one once
const userDisp = document.getElementById('cUser'); 
const compDisp = document.getElementById('cChoice'); 
const resultDisp = document.getElementById('result'); 
let userChoice;
let computerChoice;

//adding event listner in each button
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{ 
   //selecting the id of the button clicked and storing it in user choice
    userChoice= e.target.id;
    userDisp.innerHTML=userChoice;
    getCompChoice();
    getResult();
}))

function getCompChoice(){
var randomnumber = Math.floor(Math.random()*3);

if (randomnumber==0){
    computerChoice='rock';
}
if (randomnumber==1){
    computerChoice='paper';
}
if (randomnumber==2){
    computerChoice='scissor';
}
compDisp.innerHTML=computerChoice;
}

function getResult(){
    switch(userChoice + computerChoice){
        //winning case
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            resultDisp.innerHTML = "you win"
            break;
            //losing case
            case 'rockpaper':
                case 'paperscissor':
                case 'scissorrock':
                    resultDisp.innerHTML = "you lose"
                    break;
                    //drawing case
                    case 'rockrock':
                        case 'paperpaper':
                        case 'scissorscissor':
                            resultDisp.innerHTML = "draw"
                            break;
    }
    
}