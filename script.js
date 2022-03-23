var numbers = document.getElementById('box')

for (i = 0; i < 10000; i++) {
  var span = document.createElement('span')
  span.textContent = i
  numbers.appendChild(span)
}
var num = numbers.getElementsByTagName('span')
var index = 0

function nextNum() {
  num[index].style.display = 'none'
  index = (index + 1) % num.length
  num[index].style.display = 'initial'
}

function prevNum() {
  num[index].style.display = 'none'
  index = (index - 1 + num.length) % num.length
  num[index].style.display = 'initial'
}

/* validação */
function validar() {
  alert(
    'Obrigado por confiar no nosso trabalho! \nRecebemos seu pedido e já estamos preparando para envia-lo! \nLogo mais você irá receber instruções de pagamento e envio dos produtos\nDúvidas pode entrar em contato conosco via email'
  )
}
