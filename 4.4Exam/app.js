document.getElementById('calculateBtn').addEventListener('click', function() {
  const A = document.getElementById('inputA').checked;
  const B = document.getElementById('inputB').checked; 
  const C = document.getElementById('inputC').checked; 
  const D = document.getElementById('inputD').checked;


  const implication = !A || B;
  const notB = !B; 
  const leftSide = implication && A && notB; 
  const rightSide = C && D; 
  const finalResult = leftSide || rightSide;


  document.getElementById('result').textContent = finalResult;
});