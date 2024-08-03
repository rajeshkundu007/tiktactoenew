let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let newGame1 = document.querySelector(".newgame");
let msg_container = document.querySelector(".msg-container");
let winer = document.querySelector(".winer");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8], 
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];


 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red";
            console.log(turnO)

            turnO = false;
            console.log(turnO)
            
        } else {

            box.innerText = "X";
            box.style.color = "green";
            console.log(turnO)

            turnO = true;
            console.log(turnO)

            console.log("box was clicked");
        }
        box.disabled = true;
        checkwiner();
        // newgame();
    });
});

const resetgame = () => {
    turnO = true;
    enabledBoxes()
}
const newgame = () => {
    resetgame();
    msg_container.classList.add("hide")
}

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled=true
    }
}
const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled=false
        box.innerText = "";
    }
}

const showwiner = (winerr) => {
    winer.innerText = `Congratulations The Winer is ${winerr}`;
    msg_container.classList.remove("hide");
    boxes.disabled = true;
    disabledBoxes()
}

const checkwiner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                
                showwiner(pos1val);
            }
        }
    }
};

reset_btn.addEventListener("click", resetgame);
newGame1.addEventListener("click", newgame);

