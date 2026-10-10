import React from "react";
import { MessageCircle, Phone, MapPin, ArrowUp } from "lucide-react";
import "./Footer.css";
import { whatsappLink } from "../../utils/Whatsapp";

const PHONE_DISPLAY = "+91 89216 28672";
const PHONE_LINK = "tel:+919446378369";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const SERVICES = ["Fuel emergency", "Puncture assistance", "Towing"];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
    

        {/* Main columns */}
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="FuelSOS home">
              Fuel<span>SOS</span>
            </a>
            <p>
              Roadside emergency assistance in Kozhikode. We take you to a nearby
              fuel station and bring you back to your vehicle.
            </p>
          </div>

          <nav className="footer-col" aria-label="Quick links">
            <h3>Quick links</h3>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>We help with</h3>
            <ul>
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={PHONE_LINK} className="footer-contact">
                  <Phone size={16} />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact"
                >
                  <MessageCircle size={16} />
                  WhatsApp us
                </a>
              </li>
              <li className="footer-contact">
                <MapPin size={16} />
                Kozhikode and nearby areas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} FuelSOS. All rights reserved.</p>

          <a href="#home" className="footer-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;