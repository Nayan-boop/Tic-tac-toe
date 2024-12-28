let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetGame");
let newGameBtn = document.querySelector(".newGame");
let para = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;//playerX and playerO
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () =>{
       turnO = true;
       enableBoxes();
       msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!");
        if(turnO == true){
        box.innerText="O";
    turnO=false;}
        else if(turnO == false){
            box.innerText="X";
            turnO =  true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
    const enableBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
};
const showWinner = (winner) =>{
    para.innerText =`Congratulations,winner is ${winner}!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2 !="" && posVal3 !="" ){
                  if(posVal1===posVal2 && posVal2 === posVal3 ){
                    console.log("Winner",posVal1);
                    disableBoxes();
                    showWinner(posVal1);
                  }
        }
    }
}
resetBtn.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);
