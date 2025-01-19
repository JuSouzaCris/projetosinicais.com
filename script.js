var hora = new Date().getHours();
var mensagem;
if (hora < 12) {
  mensagem = "Bom dia!Este é meu primeiro projeto, obrigada pelo click!";
} else if (hora < 18) {
  mensagem = "Boa tarde!Este é meu primeiro projeto, obrigada pelo click!";
} else {
  mensagem = "Boa noite!Este é meu primeiro projeto, obriga pelo click!";
}
alert(mensagem);
