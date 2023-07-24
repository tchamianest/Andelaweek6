//Work calcurator by id

let calculation=``;
function handlebutton(buttonID){
const mybutton=document.getElementById(buttonID);
calculation+=`${mybutton.innerHTML}`;
console.log(calculation);
const display=document.getElementById('display');
display.innerHTML=calculation;


}

function calcuration(buttonID){
   let calc=document.getElementById('display').innerHTML;
   const final=evaluateMathExpression(calc);
   console.log(final);
   document.getElementById('output').innerHTML=final;
   calculation=final;
   
}







// eval change function

function evaluateMathExpression(expression) {

   const tokens = expression.match(/\d+|\+|\-|\*|\//g);
 
  
   function performOperation(operator, operand1, operand2) {
     switch (operator) {
       case '+':
         return operand1 + operand2;
       case '-':
         return operand1 - operand2;
       case '*':
         return operand1 * operand2;
       case '/':
         return operand1 / operand2;
       default:
         throw new Error('Invalid operator.');
     }
   }
 
   let result = Number(tokens[0]); 
   for (let i = 1; i < tokens.length; i += 2) {
     const operator = tokens[i]; 
     const operand = Number(tokens[i + 1]); 
     
     result = performOperation(operator, result, operand);
   }
 
   return result;
 }
 
