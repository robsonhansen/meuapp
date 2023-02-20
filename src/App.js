import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

// const luana = {
//   cliente: "Luana",
//   idade: 27,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" }
//   ],
//   ativa: true
// };

// const mario = {
//   cliente: "Mario",
//   idade: 31,
//   compras: [
//     { nome: "Notebook", preco: "R$ 2500" },
//     { nome: "Geladeira", preco: "R$ 3000" },
//     { nome: "Smartphone", preco: "R$ 1500" },
//     { nome: "Guitarra", preco: "R$ 3500" }
//   ],
//   ativa: false
// };

// const App = () => {
//   const dados = mario;

//   const statusFunc = () => {
//     if(dados.ativa === false) {
//       return <span style={{color:'red'}}>Inativo</span>
//     }
//     else {
//       return <span style={{color:'green'}}>Ativo</span>
//     }
//   }

//   const total = dados.compras.map(item => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b);

//   return (
//     <>
//       <div>Nome: {dados.cliente}</div>
//       <div>Idade: {dados.idade}</div>
//       <div>Situação: {statusFunc()}</div>
//       <div>Total Gasto: R$ {total}</div>
//       <div><span style={{color: total > 8000 ? 'red' : 'green'}}>{total > 8000 ? 'Vocês está gastando muito.' : 'Você está economizando.'}</span></div>
//     </>
//   );
// };

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: "Smartphone",
//     preco: "R$ 2000",
//     cores: ["#29d8d5", "#252a34", "#fc3766"]
//   },
//   {
//     id: 2,
//     nome: "Notebook",
//     preco: "R$ 3000",
//     cores: ["#ffd045", "#d4394b", "#f37c59"]
//   },
//   {
//     id: 3,
//     nome: "Tablet",
//     preco: "R$ 1500",
//     cores: ["#365069", "#47c1c8", "#f95786"]
//   }
// ];

// const App = () => {

//   const dados = produtos.filter(({preco}) => +preco.replace('R$','') > 1500 )

//   return (
//     <>
//       <section>
//         {dados.map(({id, nome, preco, cores}) =>
//         <div key={id}>
//           <h1>{nome}</h1>
//           <p>{preco}</p>
//           <ul>
//             {cores.map(cor => <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>)}
//           </ul>
//         </div>)}
//       </section>
//     </>
//   )

// };

// const produtos = [
//   {
//     id: 1,
//     nome: "Camiseta Estampada",
//     preco: "R$ 10",
//     cores: ["#FF0000", "#00FF00", "#0000FF", "#000000"]
//   },
//   {
//     id: 2,
//     nome: "Calça Jeans",
//     preco: "R$ 24",
//     cores: ["#FFFF00", "#800080", "#808080", "#FFFFFF"]
//   },
//   {
//     id: 3,
//     nome: "Tênis Esportivo",
//     preco: "R$ 15",
//     cores: ["#FFA500", "#FFC0CB", "#A52A2A", "#C0C0C0"]
//   },
//   {
//     id: 4,
//     nome: "Jaqueta de Couro",
//     preco: "R$ 7",
//     cores: ["#ADD8E6", "#90EE90", "#FFC0CB", "#F5DEB3"]
//   }
// ];

// const App = () => {
//   return (
//     <>
//       <section>
//         {produtos.map(({id, nome, preco, cores})=>
//           <ul key={id}>
//             <h1>{nome}</h1>
//             <p>{preco}</p>
//             <ul>{cores.map(cor => <li key={cor} style={{backgroundColor: cor}}>{cor}</li>)}</ul>
//           </ul>
//         )}
//       </section>
//     </>
//   )
// }

const handleClick = () => {
  return window.location.assign("https://www.youtube.com");
};

const App = () => {
  return (
    <button className="btn__youtube" onClick={handleClick}>
      Clique
    </button>
  );
};

export default App;
