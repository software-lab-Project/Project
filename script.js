var obj=JSON.parse(localStorage.getItem('str'))
    
console.log(JSON.parse(localStorage.getItem('str')));
function myFunction1(){
    let res1=document.querySelector("#result1");
    let res=document.querySelector("#result");
    obj.win=0;
    obj.loss=0;
    obj.tie=0;
    res.innerHTML="YOUR SCORE IS UPDATED";
    let moves=document.querySelector(".bothmove");
    moves.innerHTML='';
    res1.innerHTML=`MATCH RESULT  win:${obj.win} loss:${obj.loss}, tie:${obj.tie}`;
    localStorage.removeItem('str');
}

function myFunction(playermove){
    if(obj===null){
        obj={
            win:0,
            loss:0,
            tie:0
        }
    }
    let moves=document.querySelector(".bothmove");

let res=document.querySelector("#result");
let res1=document.querySelector("#result1");
let val=Math.random(0,1);
console.log(val);
let result=''
if(0>=val<1/3){
    let compMove='ROCK';
    if(compMove==playermove){
        moves.innerHTML='You Played <img src="rock.jpg"></img> Computer play  <img src="rock.jpg"></img> ';
        res.innerHTML=` MATCH IS TIE`;
         result="MATCH TIE";
    }
    else if(playermove=='SCISSOR'){
        moves.innerHTML='You Played <img src="scissor.jpg"></img> Computer play  <img src="rock.jpg"></img> ';
        res.innerHTML=`YOU LOSS`;
         result="YOU LOSS";
    }
    else if(playermove=='PAPER'){
        moves.innerHTML='You Played <img src="paper.png"></img> Computer play  <img src="rock.jpg"></img> ';
        res.innerHTML=`YOU WIN`;
         
           result="YOU WIN";
    }
}if(1/3>=val<2/3){
    let compMove='SCISSOR';
    if(compMove==playermove){
        moves.innerHTML='You Played <img src="scissor.jpg"></img> Computer play  <img src="scissor.jpg"></img> ';
        res.innerHTML=`MATCH IS TIE`
          result="MATCH TIE";
    }
    else if(playermove=='PAPER'){
        moves.innerHTML='You Played <img src="paper.png"></img> Computer play  <img src="scissor.jpg"></img> ';
        res.innerHTML=`YOU LOSS`;
          result="YOU LOSS";
    }
    else if(playermove=='ROCK'){
        moves.innerHTML='You Played <img src="rock.jpg"></img> Computer play  <img src="scissor.jpg"></img> ';
        res.innerHTML=`YOU WIN`;
          result="YOU WIN";
         
    }
}if(2/3>=val<1){
    let compMove='PAPER';
    if(compMove==playermove){
        moves.innerHTML='You Played <img src="paper.png"></img> Computer play  <img src=" paper.png"></img> ';
        res.innerHTML="MATCH IS TIE"
          result="MATCH TIE";
    }
    else if(playermove=='ROCK'){
        moves.innerHTML='You Played <img src="rock.jpg"></img> Computer play  <img src="paper.png"></img> ';
        res.innerHTML=`YOU LOSS`;
          result="YOU LOSS";
    }
    else if(playermove=='SCISSOR'){
        moves.innerHTML='You Played <img src="scissor.jpg"></img> Computer play  <img src="paper.png"></img>';
        res.innerHTML=`YOU WIN`;
          result="YOU WIN";
         }
}
if(result==`YOU WIN`){
    obj.win=obj.win+1;
     
}
if(result==`YOU LOSS`){
    obj.loss=obj.loss+1;
     
}
if(result==`MATCH TIE`){
obj.tie=obj.tie+1;
 }
 let str=JSON.stringify(obj);
 localStorage.setItem('str',str);
res1.innerHTML=`MATCH RESULT  win:${obj.win} loss:${obj.loss}, tie:${obj.tie}`;

}