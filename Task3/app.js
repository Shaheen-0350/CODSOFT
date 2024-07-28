const screen = document.getElementById('screen');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const open = document.getElementById('open');
const close = document.getElementById('close');
const clear = document.getElementById('clear');

let ans=0;
function One() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'1';
}

function Two() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'2';
}

function Three() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'3';
}

function Four() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'4';
}

function Five() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'5';
}

function Six() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'6';
}

function Seven() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'7';
}

function Eight() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'8';
}

function Nine() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'9';
}

function Plus() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'+';
}

function Minus() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'-';
}

function Zero() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'0';
}

function Multiply() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'*';
}

function Divide() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'/';
}

function Equals() {
    let x = screen.innerHTML;
    if(isNaN(Number(x))) {
        screen.innerHTML=eval(x);
   }
   else{
    screen.innerHTML=null;
   }
  
}
 
function AC() {
    screen.innerHTML=null;
}

function Open() {
    let x = screen.innerHTML;
    screen.innerHTML=x+'('
}

function Close() {
    let x = screen.innerHTML;
    screen.innerHTML=x+')'
}

function Clear() {
    let x = screen.innerHTML;
    let y = x.length;
    screen.innerHTML=x.slice(0,y-1);
}