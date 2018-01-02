function solve(input){
input=input.replace(/ans/g,answer)
out: while(!input.match(/^\-?\d+(?:\.\d+)?$/)){
  while(input.match(/(\d+(?:\.\d+)?)\-(\d+(?:\.\d+)?)/)){
     //fix bug caused by input such as 4-3*-2, turning it to 4+-3*-2
    input=input.replace(/(\d+(?:\.\d+)?)\-(\d+(?:\.\d+)?)/,function($1,$2,$3){return $2+'+-'+$3})
    console.log(input) ;continue out
  }

  while(input.match(/(\-?\d+(?:\.\d+)?)%/)){//percentage
    input=input.replace(/(\-?\d+(?:\.\d+)?)%/,function($1,$2){return $2/100})
    console.log(input) ;continue out
  }

  while(input.match(/\((\-?\d+(?:\.\d+)?)\)\^(\-?\d+(?:\.\d+)?)/)){//power of negatives e.g. (-5)^2
    input=input.replace(/\((\-?\d+(?:\.\d+)?)\)\^(\-?\d+(?:\.\d+)?)/,function($1,$2,$3){return $2**$3})
    console.log(input);continue out
  }

  while(input.match(/\((\-?\d+(?:\.\d+)?)\)/)){//parenthesis
    input=input.replace(/\((\-?\d+(?:\.\d+)?)\)/,function($1,$2){return $2})
    console.log(input);continue out
  }
  while(input.match(/(\d+(?:\.\d+)?)\^(\-?\d+(?:\.\d+)?)/)){//power
    input=input.replace(/(\d+(?:\.\d+)?)\^(\-?\d+(?:\.\d+)?)/,function($1,$2,$3){return $2**$3});
    console.log(input);continue out

  }
  while(input.match(/(\-?\d+(?:\.\d+)?)(\*|\/)(\-?\d+(?:\.\d+)?)/)){//multiply and divide
    input=input.replace(/(\-?\d+(?:\.\d+)?)(\*|\/)(\-?\d+(?:\.\d+)?)/,function($1,$2,$3,$4){return ($3=='*')?$2*$4:$2/$4})
    console.log(input);continue out

  }
  while(input.match(/(\-?\d+(?:\.\d+)?)(\+|\-)(\-?\d+(?:\.\d+)?)/)){//plus and minus
    input=input.replace(/(\-?\d+(?:\.\d+)?)(\+|\-)(\-?\d+(?:\.\d+)?)/,function($1,$2,$3,$4){return ($3=='+')?$2/1+$4/1:$2-$4})
    console.log(input);continue out

  }
}

  return input;
}
const disp=document.querySelector('.disp')
const input=document.querySelector('.input')
const result=document.querySelector('.result')
const prevOperation=document.querySelector('.prevOperation')
const one=document.querySelector('.one')
const two=document.querySelector('.two')
const three=document.querySelector('.three')
const four=document.querySelector('.four')
const five=document.querySelector('.five')
const six=document.querySelector('.six')
const seven=document.querySelector('.seven')
const eight=document.querySelector('.eight')
const nine=document.querySelector('.nine')
const zero=document.querySelector('.zero')
const on=document.querySelector('.on')//dsdds
const clear=document.querySelector('.clear')
const delet=document.querySelector('.delet')
const openBracket=document.querySelector('.openBracket')
const closeBracket=document.querySelector('.closeBracket')
const divide=document.querySelector('.divide')
const percent=document.querySelector('.percent')
const multiply=document.querySelector('.multiply')
const power=document.querySelector('.power')
const minus=document.querySelector('.minus')
const plus=document.querySelector('.plus')
const ans=document.querySelector('.ans')//fsfdf
const point=document.querySelector('.point')
const equals=document.querySelector('.equals')
let answer=0//saved answer


one.addEventListener('click',()=>input.innerHTML+='1')
two.addEventListener('click',()=>input.innerHTML+='2')
three.addEventListener('click',()=>input.innerHTML+='3')
four.addEventListener('click',()=>input.innerHTML+='4')
five.addEventListener('click',()=>input.innerHTML+='5')
six.addEventListener('click',()=>input.innerHTML+='6')
seven.addEventListener('click',()=>input.innerHTML+='7')
eight.addEventListener('click',()=>input.innerHTML+='8')
nine.addEventListener('click',()=>input.innerHTML+='9')
zero.addEventListener('click',()=>input.innerHTML+='0')
openBracket.addEventListener('click',()=>input.innerHTML+='(')
closeBracket.addEventListener('click',()=>input.innerHTML+=')')
divide.addEventListener('click',()=>input.innerHTML+='/')
percent.addEventListener('click',()=>input.innerHTML+='%')
multiply.addEventListener('click',()=>input.innerHTML+='*')
power.addEventListener('click',()=>input.innerHTML+='^')
minus.addEventListener('click',()=>input.innerHTML+='-')
plus.addEventListener('click',()=>input.innerHTML+='+')
point.addEventListener('click',()=>input.innerHTML+='1')
ans.addEventListener('click',()=>input.innerHTML+='ans')


clear.addEventListener('click',function(){
  input.innerHTML=''
  result.innerHTML=''
})
delet.addEventListener('click',function(){
  let x=input.innerHTML.split('')
  if(x[x.length-1]=='s'){//if the last input is ans delete last 3 letter
    x.pop();x.pop();
  }
  x.pop()

  input.innerHTML=x.join('')
})
equals.addEventListener('click',function(){
  answer=solve(input.innerHTML);
  result.innerHTML=answer;
  prevOperation.innerHTML=input.innerHTML;
  input.innerHTML='';
})
/*while(input.match(/ /)){
  input=input.replace(/ /,function(){})
}*/
//(\-?\d+(?:\.\d+)?)
