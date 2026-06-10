import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/0228655011245"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;

