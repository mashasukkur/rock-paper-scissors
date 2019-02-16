let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new image();
imgArray[2].src = 'assets/scissors.png';
function display(userChoice, computerChoice) {
    let user = document.getElementById('user')
    let cpu = document.getElementById('cpu')
    let uChoice = imgArray[userChoice]
    let compChoice = imgArray[computerChoice]
    
    user.setAttribute('src = ${userChoice.src}')
    cpu.setAttribute('src = ${cpu.src}')
}
function randomNum() {
    return Math.floor(Math.random() *3);
}

function checkResult(userChoice) {
    let result = document.getElementById("result")
    
    let computerChoice = randomNum()
    if (userChoice == computerChoice) {
        result.innerHTML = "ya tied"
    }
    else if((userChoice == 0 && computerChoice == 1) || (userChoice == 1 && computerChoice == 2) || (userChoice == 2 && computerChoice == 0)){
        result.innerHTML = "computerChoice beat you"
    }
    else if((userChoice == 1 && computerChoice == 0) || (userChoice == 2 && computerChoice == 1) || (userChoice == 0 && computerChoice == 2)) {
        result.innerHTML = "you beat computer choice"
    }
    
}