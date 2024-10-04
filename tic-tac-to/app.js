let boxs= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#new-btn")

let canReset=true;
let turnO=true;
let turnX=false;
let count=0;
const winPattern=[
  [0,1,2],
  [0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

const resetGame=()=>{
  turnO=true;
  count=0;
  ableBoxes();
}

boxs.forEach((b)=>{
  b.addEventListener("click",function(){
    if(turnO){
    b.innerText="O"
    turnO=false;  
  }else{
     b.innerText="X";
     turnO=true;
    }
    b.disabled=true;
    count++;
    checkWinner();
  })
  
})
console.log(count);

const NewGame=()=>{
  msgContainer.classList.add("hide");
  ableBoxes();
  canReset=true;
}

const disableBoxes=()=>{
  for(p of boxs){
    p.disabled=true;
  }
}
const ableBoxes=()=>{
  for(p of boxs){
    p.disabled=false;
    p.innerText="";
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  canReset=false;
};

const showDraw=()=>{
  msg.innerText="Match Draw";
  msgContainer.classList.remove('hide');
  disableBoxes();
  canReset=false;

}

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }else if(count===9){
        showDraw();
      }
    }
    
  }
};

newGame.addEventListener('click',NewGame);

resetBtn.addEventListener('click',()=>{
if(canReset){
  resetGame();
}

});
