import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
