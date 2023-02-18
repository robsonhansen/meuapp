import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" }
  ],
  ativa: true
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" }
  ],
  ativa: false
};

const App = () => {
  const dados = mario;

  const statusFunc = () => {
    if(dados.ativa === false) {
      return <span style={{color:'red'}}>Inativo</span>
    }
    else {
      return <span style={{color:'green'}}>Ativo</span>
    }
  }

  const total = dados.compras.map(item => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b);

  return (
    <>
      <div>Nome: {dados.cliente}</div>
      <div>Idade: {dados.idade}</div>
      <div>Situação: {statusFunc()}</div>
      <div>Total Gasto: R$ {total}</div>  
      <div><span style={{color: total > 8000 ? 'red' : 'green'}}>{total > 8000 ? 'Vocês está gastando muito.' : 'Você está economizando.'}</span></div>
    </>
  );
};

export default App;
