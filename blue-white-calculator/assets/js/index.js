
function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    
  //   ведет расчет например val22 проходит расчет и выдается 'val' + 22
    var result = eval(expression);
    document.getElementById('display').value = result;
  }
  
  function procent() {
    let a = document.getElementById('display').value;
    let b = a / 100;
    document.getElementById('display').value = b;
  }
  