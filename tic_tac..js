let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector( "#reset");
let newgame = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns  = [
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];

const resetgame = () => {
turn = true;
enabledboxes();
msgcontainer.classList.add("hide");
};

boxes.forEach ((box) => {
 box.addEventListener("click" , () => {
   console.log("box was clicked");
   if(turn){
     box.innerHTML="O";
     
     turn= false;

   }

   else{
     box.innerHTML="X"
     turn = true;

   }
   box.disabled=true;

   checkwinner();
   
 });



} ) ;
const disabledboxes = () => {
for(let box of boxes) {
 box.disabled = true ; 
}
};
const enabledboxes = () => {
for(let box of boxes) {
 box.disabled = false; 
 box.innerHTML= "";
}
};

const showwinner = (winner) => {
 msg.innerText = `Congratulations, Winner is ${winner}`;
 msgcontainer.classList.remove("hide");
 disabledboxes();
}



const checkwinner = ()=>{
for(pattern of winPatterns){
let pos1val =boxes[pattern[0]].innerText ;
let pos2val =  boxes[pattern[1]].innerText;
let pos3val = boxes[ pattern[2]].innerText; 

if((pos1val != "" && pos2val != "" && pos3val != "")){
 if((pos1val === pos2val && pos2val === pos3val)){
   console.log("winner" , pos1val);

   showwinner(pos1val);

   
     }
}
}

};

newgame.addEventListener("click" , resetgame);
Resetbtn.addEventListener("click" , resetgame);

