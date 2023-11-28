'use strict';

// Interface que representa um item no resumo de pagamento
interface ItemResumoPagamento {
    itemValor: number;       // Valor do item no resumo (número)
    itemDescricao: string;   // Descrição do item no resumo (texto/string)
  }
  
  // Exporta a interface ItemResumoPagamento para ser utilizada em outros lugares do código
  export default ItemResumoPagamento;
  