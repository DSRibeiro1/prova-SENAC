//TelaPagamento.tsx

//import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaPagamento.css';
import TabelaResumo from '../../Components/TabelaResumo/TabelaResumo';
import QrCode from '../../Components/QrCode/QrCode';
import BotoesPagamento from '../../Components/BotoesPagamento/BotoesPagamento';

const TelaPagamento = () => {
  const navigate = useNavigate();

// Constantes para textos recorrentes
const QRCODE_DESCRICAO_1 = 'Para pagamento';
const QRCODE_DESCRICAO_2 = 'aponte seu celular';

  // Função para cancelar o pagamento
  const handleCancelar = () => {
    navigate('/');
  };

  // Função para continuar comprando
  const handleContinuarComprando = () => {
    //Responsabilidade do Hallan
    navigate('/carrinho_compra');
  };

  return (
    <div>
      <h2>Resumo do Pedido</h2>

      {/* Componente TabelaResumo */}
      <TabelaResumo />

      {/* Descrição do QRCode */}
      <p>QrCode</p>

      {/* Componente QrCode */}
      <QrCode />

     {/* Mensagem adicional para apontar o celular */}
     <div>
        <p style={{ color: 'gold', whiteSpace: 'nowrap', marginBottom: '5px', 
        marginLeft: '-6px', marginTop: '-3px' }}>
          <small>{QRCODE_DESCRICAO_1}</small>
        </p>
        <p style={{ color: 'gold', marginTop: '-12px', 
        marginLeft: '-6px' }}>
          <small>{QRCODE_DESCRICAO_2}</small>
        </p>
      </div>
      
      {/* Componente BotoesPagamento */}
      <BotoesPagamento onCancel={handleCancelar} onNewOrder={handleContinuarComprando} />
    </div>
  );
};

export default TelaPagamento;

