import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { navItems, siteConfig } from "@/data/site";

const socialLinks = [
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    icon: FaYoutube
  },
  {
    label: "Facebook",
    href: siteConfig.socials.facebook,
    icon: FaFacebookF
  },
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    icon: FaInstagram
  },
  {
    label: "WhatsApp",
    href: siteConfig.socials.whatsapp,
    icon: FaWhatsapp
  }
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/[0.14] bg-[#0e0b13] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold leading-tight text-cream sm:text-3xl">
            {siteConfig.name}
          </h2>
          <p className="mt-3 text-gold-soft">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-md text-lg font-semibold text-cream/[0.90] sm:text-xl">
            Let your light shine before others.
          </p>
        </div>

        <div className="space-y-5 text-text-muted">
          <div>
            <p className="footer-heading">Address</p>
            <p className="mt-2 leading-7">{siteConfig.address}</p>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <p className="mt-2">
              Phone:{" "}
              <a className="footer-link" href={`tel:+${siteConfig.whatsappNumber}`}>
                {siteConfig.phone}
              </a>
            </p>
            <p className="mt-2">
              Email:{" "}
              <a className="footer-link" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="footer-heading">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[...navItems, { label: "Donate", href: "#donate" }].map((item) => (
              <a key={item.href} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] text-cream transition hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
