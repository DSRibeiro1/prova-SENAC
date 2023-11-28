'use strict';

import React from 'react';
import ItemTabelaResumo from '../../Components/ItemTabelaResumo/ItemTabelaResumo';
import ItemResumoPagamento from '../../Models/ItemResumoPagamento';
import './TabelaResumo.css';

// Definição das propriedades esperadas para o componente TabelaResumo
interface TabelaResumoProps {
  dados: ItemResumoPagamento[]; // Array de dados do resumo do pagamento
  totalSum: number; // Soma total dos valores dos itens
}

// Componente funcional TabelaResumo
const TabelaResumo: React.FC<TabelaResumoProps> = ({ dados, totalSum }) => {
  return (
    <div>
      {/* Tabela para exibir o resumo do pedido */}
      <table className="resumo-tabela">
        {/* Cabeçalho da tabela */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Valor(R$)</th>
          </tr>
        </thead>
        {/* Corpo da tabela com os dados */}
        <tbody>
          {/* Mapeia os dados para criar linhas da tabela usando o componente ItemTabelaResumo */}
          {dados.map((item, index) => (
            <ItemTabelaResumo key={index} item={item} index={index} />
          ))}
          {/* Linha adicional para exibir a soma total */}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{totalSum.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Exporta o componente TabelaResumo
export default TabelaResumo;
