import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+962787557794" // ضع رقمك هنا بصيغة دولية بدون +
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
    >
      <FaWhatsapp size={20} />
      <span>تواصل عبر واتساب</span>
    </a>
  );
}
