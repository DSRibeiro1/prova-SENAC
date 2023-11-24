//QrCode.tsx
//import React from 'react';
import qrcodeImage from '../../assets/qrcode.png';
import './QrCode.css'

const QrCode = () => {
  return <img src={qrcodeImage} alt="QRCode" className="qr-code" />;
};

export default QrCode;
