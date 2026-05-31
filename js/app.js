
function calc(){
 let amt=parseFloat(document.getElementById('amount').value||0);
 document.getElementById('result').innerText='Recipient Gets: '+(amt*17.85).toFixed(2);
}
document.getElementById('amount').addEventListener('input',calc);
