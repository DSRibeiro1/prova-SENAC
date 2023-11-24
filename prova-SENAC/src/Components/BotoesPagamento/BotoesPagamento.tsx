import React from 'react';
import './BotoesPagamento.css'

// Interface para os props do componente BotoesPagamento
interface BotoesPagamentoProps {
    onCancel: () => void; // Função chamada ao clicar no botão Cancelar
    onNewOrder: () => void; // Função chamada ao clicar no botão Novo Pedido
  }
  
  // Componente funcional que exibe botões relacionados ao pagamento
  const BotoesPagamento: React.FC<BotoesPagamentoProps> = ({ onCancel, onNewOrder }) => {
    return (
      <div>
        {/* Botão para cancelar o pagamento */}
        <button onClick={onCancel}>Cancelar</button>
        
        {/* Botão para criar um novo pedido */}
        <button onClick={onNewOrder}>Novo Pedido</button>
      </div>
    );
  };
  
  export default BotoesPagamento;
 
