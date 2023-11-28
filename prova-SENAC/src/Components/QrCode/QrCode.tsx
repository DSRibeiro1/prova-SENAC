// Importa a imagem do QRCode do diretório de assets
import qrcodeImage from '../../assets/qrcode.png';

// Importa o estilo CSS específico para o componente QrCode
import './QrCode.css';

// Componente funcional QrCode
const QrCode = () => {
  // Retorna um elemento de imagem exibindo o QRCode
  return <img src={qrcodeImage} alt="QRCode" className="qr-code" />;
};

// Exporta o componente QrCode
export default QrCode;
