let playerSelection='rock';
const buttons=document.querySelectorAll('.span');
const text=document.querySelector('.player1');

buttons.forEach(function(button)
{
    button.addEventListener('click',function(e)
    {
        if(e.target.id=='rock')
        {
            text.textContent="👊"
             playerSelection='rock';
        }
        else if(e.target.id=='paper')
        {
            text.textContent="✋"
            playerSelection='paper';
        }
        else if(e.target.id=='scisssors')
        {
            text.textContent="✌️"
            playerSelection='scissors';
        }
    })
})



function getComputerChoice()
{
    return Math.random();

}
let PlayerCounter=0;
let ComputerCounter=0;

let computerSelection='';
function convertString()
{
let computerSelection=getComputerChoice();
if(computerSelection>1/3 && computerSelection<0.66)
{
  computerSelection='rock'
}
else if(computerSelection<1/3)
{
    computerSelection='scissors'
}
else if(computerSelection>0.66){
    computerSelection='paper'
}
return computerSelection;
}

function Result(playerSelection,computerSelection)
{
    if(playerSelection=='rock' && computerSelection=='rock')
    {
        console.log("Draw");
    }

    else if(playerSelection=="rock" && computerSelection=='paper')
    {
      
        ComputerCounter++;
        console.log("lost");
    }
    else if(playerSelection=="rock" && computerSelection=="scissors")
    {
        PlayerCounter++;
     
        console.log("Won")
    }

    else if(playerSelection=='scissors' && computerSelection=='scissors')
    {
        console.log("Draw");
    }

    else if(playerSelection=="scissors" && computerSelection=='rock')
    {
     
        ComputerCounter++;
        console.log(lost);
    }
    else if(playerSelection=="scissors" && computerSelection=="paper")
    {
        PlayerCounter++;
   
        console.log("Won")
    }

    else if(playerSelection=='paper' && computerSelection=='paper')
    {
        console.log("Draw");
    }

    else if(playerSelection=="paper" && computerSelection=='scissors')
    {
      
        ComputerCounter++;
        console.log(lost);
    }
    else if(playerSelection=="paper" && computerSelection=="rock")
    {
        PlayerCounter++;
      
        console.log("Won")
    }
   
}
//making a function to set the value of playerSelection



while(ComputerCounter!=3 && PlayerCounter!=3)
{
 
 computerSelection=convertString();
 Result(playerSelection,computerSelection)
 console.log(ComputerCounter)
 console.log(PlayerCounter)
}
if(ComputerCounter==3)
{
    console.log("Compter Won")
}
else{
    console.log("Player 1 Won")
}

