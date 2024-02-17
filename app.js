let userScore = 0;
let compScore =0;
const win = document.querySelector(".winner");
const renew = document.querySelector(".restart");
const choices = document.querySelectorAll(".choice");
const you =  document.querySelector(".p1");
const comp =  document.querySelector(".p2");
const genChoice =()=>{
    const options = ["rock" , "paper" , 'scissor'];
    let n = Math.floor(Math.random()*3);
    let compChoice = options[n];
    return options[n];

}


choices.forEach((choice) =>{
    // console.log(choice);
    const choiceId = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
   // console.log(choiceId ,"was clicked");
    
    const userChoice = choiceId;
    const compChoice = genChoice();
    
    console.log("user :",userChoice);
    console.log("comp :",compChoice);
    
    if(userChoice==compChoice){
        console.log("draw");
        showWinner("DRAW");
    }else if(userChoice=="rock" && compChoice =="paper"){
        console.log("YOU WON");
        showWinner("YOU WON");
        userScore++;
        console.log(userScore);
        you.innerText= userScore;
    }else if(userChoice=="paper" && compChoice =="rock"){
        console.log("YOU WON");
        userScore++;
        showWinner("YOU WON");
        console.log(userScore);
        you.innerText= userScore;
        play(userScore,compScore);
    }else if(userChoice=="scissor" && compChoice =="paper"){
        console.log("YOU WON");
        userScore++;
        showWinner("YOU WON");
        console.log(userScore);
        you.innerText= userScore;
        play(userScore,compScore);
    }else{
        console.log("YOU LOST");
        compScore++;
        showWinner("YOU LOST");
        comp.innerText= compScore;
        
    }
});
})
const showWinner = (winner) =>{
    win.innerText=`${winner}`;
    win.classList.remove("hide");
}
const replay = () =>{
    win.classList.add("hide");
     userScore = 0;
     compScore =0;
     you.innerText= userScore;
     comp.innerText= compScore;

}
renew.addEventListener("click", replay);
