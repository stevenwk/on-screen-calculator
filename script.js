function solve(input){

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

/*while(input.match(/ /)){
  input=input.replace(/ /,function(){})
}*/
//(\-?\d+(?:\.\d+)?)
