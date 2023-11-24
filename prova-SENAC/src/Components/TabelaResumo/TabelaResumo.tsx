//import React from 'react';
import './TabelaResumo.css';

// Componente funcional para exibir a tabela de resumo do pedido
const TabelaResumo = () => {
  return (
    <table className="resumo-tabela">
      {/* Cabeçalho da tabela */}
      
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Valor(R$)</th>
        </tr>
      </thead>
      {/* Corpo da tabela - dados de exemplo */}
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>Descrição do Item 1</td>
          <td>10,00</td>
        </tr>
        <tr>
          <td>Item 2</td>
          <td>Descrição do Item 2</td>
          <td>12,00</td>
        </tr>
        {/* Adicione mais linhas conforme necessário */}
      </tbody>
    </table>
  );
};

export default TabelaResumo;
