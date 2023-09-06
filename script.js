let score=0;
let scorehtml = document.getElementById('score');
function increase(){
 score =score +1 ;
    scorehtml.innerHTML =(score);
}
let name =(prompt('enter your name'));
function welcome(){
    let name =(prompt('enter your name'));
     console.log("welcome"+name) ;
}
welcome()
