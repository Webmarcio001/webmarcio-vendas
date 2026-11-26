
// CONFIGURAÇÃO DO WHATSAPP
// Troque pelo seu número com código do Brasil e DDD.
// Exemplo: 5527991234567

const telefone = "5527981398875";

// Solicitação de um plano
function pedirPlano(plano) {
  const mensagem =
    `Olá! Tenho interesse no plano ${plano} da Webmarcio Soluções. Gostaria de mais informações.`;

  const link =
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}

// Formulário de orçamento
document.getElementById("formulario")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto =
      `Olá! Quero solicitar um orçamento na Webmarcio Soluções.

Nome: ${nome}
Empresa: ${empresa}
Serviço: ${servico}
Detalhes: ${mensagem}`;

    const link =
      `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(link, "_blank");
  });