let cellChecked = [];

let playerOne = {
    Token: "X",
    Name: "Player One",
    Turn: true
};

let playerTwo = {
    Token: "O",
    Name: "Player Two",
    Turn: false
};

document.querySelector("#start").addEventListener("click", createGrid)
document.querySelector("#reset").addEventListener("click", () => {location.reload()})

function createGrid () {
    document.querySelector("#grid").innerHTML = ""
    document.querySelector("#grid").style.pointerEvents = "auto"

    playerOne.Turn = true;
    playerTwo.Turn = false;
for (let i = 0; i < 9; i++){
    const cell = document.createElement("div")

    cell.setAttribute("id", `cell${i}`)
    cell.setAttribute("class", "gridCell")
    cell.textContent = ""

    cell.addEventListener("click", setToken)

    document.querySelector("#grid").appendChild(cell)

    if (cell.id.includes(i)) {
        cellChecked.push (cell)
    }
}
}

function setToken (event) {
    let token;

const cellSet = document.querySelector(`#${event.target.id}`)

if (playerOne.Turn === true && cellSet.getAttribute("disable") !== "true") {
    cellSet.textContent = "X"
    token = 'X'

    cellSet.setAttribute("disable", true)

    playerOne.Turn = false;
    playerTwo.Turn = true;
}
else if(playerTwo.Turn === true && cellSet.getAttribute("disable") !== "true") {
    cellSet.textContent = "O"
    token = 'O'

    cellSet.setAttribute("disable", true)

    playerOne.Turn = true;
    playerTwo.Turn = false;
}

checkResults(token)
}

function checkResults (token) {
    const winningCondition = () => {
          if (cellChecked[0].textContent === token && cellChecked[1].textContent === token && cellChecked[2].textContent === token) {
             return token;
          } else if (cellChecked[0].textContent === token && cellChecked[3].textContent === token && cellChecked[6].textContent === token){
             return token;
            }else if (cellChecked[0].textContent === token && cellChecked[4].textContent === token && cellChecked[8].textContent === token){
                return token;
               }else if (cellChecked[2].textContent === token && cellChecked[5].textContent === token && cellChecked[8].textContent === token){
                return token;
               }else if (cellChecked[1].textContent === token && cellChecked[4].textContent === token && cellChecked[7].textContent === token){
                return token;
               }else if (cellChecked[2].textContent === token && cellChecked[4].textContent === token && cellChecked[6].textContent === token){
                return token;
               }else if (cellChecked[3].textContent === token && cellChecked[4].textContent === token && cellChecked[5].textContent === token){
                return token;
               }else if (cellChecked[6].textContent === token && cellChecked[7].textContent === token && cellChecked[8].textContent === token){
                return token;
               }else if (cellChecked.every(element => element.textContent !== "")) {
                return "tie";
               }
          
        }

    if(winningCondition() === token){
        if (token === 'X'){
            document.querySelector("#grid").style.pointerEvents = "none"
            return console.log(`${playerOne.Name} is the winner`)
        }else{
            document.querySelector("#grid").style.pointerEvents = "none"
            return console.log(`${playerTwo.Name} is the winner`)
        }
    }else if(winningCondition() === "tie"){
        document.querySelector("#grid").style.pointerEvents = "none"
        return console.log("Its a Tie")
    }
}