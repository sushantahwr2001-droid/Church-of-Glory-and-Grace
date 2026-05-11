import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      title="Need Prayer? Message Us"
      aria-label="Need Prayer? Message Us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-4 text-base font-semibold text-white shadow-[0_14px_40px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 hover:bg-[#20bf5a] focus:outline-none focus:ring-2 focus:ring-white sm:px-5"
    >
      <FaWhatsapp className="text-2xl" aria-hidden="true" />
      <span className="hidden sm:inline">Need Prayer? Message Us</span>
    </a>
  );
}
