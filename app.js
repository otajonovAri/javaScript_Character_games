document.getElementById('calculateBtn').addEventListener('click', function() {
  const A = document.getElementById('inputA').checked;
  const B = document.getElementById('inputB').checked;
  const C = document.getElementById('inputC').checked; 

  const notA = !A; 
  const notB = !B; 
  const notA_and_notB = notA && notB; 
  const finalResult = C || notA_and_notB; 


  const tableBody = document.getElementById('truth-table-body');
  tableBody.innerHTML = ''; 

  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${A}</td>
      <td>${B}</td>
      <td>${C}</td>
      <td>${notA}</td>
      <td>${notB}</td>
      <td>${notA_and_notB}</td>
      <td>${finalResult}</td>
  `;
  tableBody.appendChild(row);
});