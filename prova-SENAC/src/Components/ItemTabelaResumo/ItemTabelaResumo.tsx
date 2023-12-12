'use strict';

import React from 'react';
import ItemResumoPagamento from '../../Models/ItemResumoPagamento';

// Propriedades esperadas para o componente ItemTabelaResumo
interface ItemTabelaResumoProps {
  item: ItemResumoPagamento;  // Objeto representando um item do resumo de pagamento
  index: number;  // Índice do item na lista
}

// Componente funcional ItemTabelaResumo
const ItemTabelaResumo: React.FC<ItemTabelaResumoProps> = ({ item, index }) => {
  return (
    // Linha da tabela representando um item
    <>
    <tr>
      {/* Coluna com o número do item */}
      <td>{`Item ${index + 1}`}</td>
      
      {/* Coluna com a descrição do item */}
      <td>{item.itemDescricao}</td>
      
      {/* Coluna com o valor do item, formatado com duas casas decimais */}
      <td>{item.itemValor.toFixed(2)}</td>
    </tr>
    </>
  );
};

// Exporta o componente ItemTabelaResumo
export default ItemTabelaResumo;
