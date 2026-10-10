import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Zap,
} from "lucide-react";

import "./Nav.css";
import logo from "../../assets/loogo/logo.png";

const WHATSAPP_NUMBER = "919446378369";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi FuelSOS! 👋

We will connect with you within 10 minutes. ⏱️

Please share the following details:

🚗 വാഹനത്തിന്റെ പേര് (Vehicle Name):
🏍️ വാഹനത്തിന്റെ തരം (Vehicle Type):
⛽ ഇന്ധനത്തിന്റെ തരം (Fuel Type):
📍 കൃത്യമായ നിലവിലെ സ്ഥലം (Exact Current Location):

Thank you for choosing FuelSOS! ❤️

`
  )}`;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="FuelSOS" />
        </a>


        {/* DESKTOP NAV */}
        <nav className="nav-links">

          <a href="#home">Home</a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#why-fuelsos">
            Why FuelSOS
          </a>

          <a href="#faq">
            FAQ
          </a>

        </nav>


        {/* DESKTOP CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          <MessageCircle size={18} />

          <span>GET HELP</span>

          <Zap size={15} className="cta-zap" />
        </a>


        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          isOpen ? "mobile-menu-open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
          </a>

          <a
            href="#how-it-works"
            onClick={closeMenu}
          >
            <span>02</span>
            How It Works
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            <span>03</span>
            Services
          </a>

          <a
            href="#pricing"
            onClick={closeMenu}
          >
            <span>04</span>
            Pricing
          </a>

          <a
            href="#why-fuelsos"
            onClick={closeMenu}
          >
            <span>05</span>
            Why FuelSOS
          </a>

          <a
            href="#faq"
            onClick={closeMenu}
          >
            <span>06</span>
            FAQ
          </a>


          {/* MOBILE CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
          >
            <MessageCircle size={19} />

            <span>
              GET HELP NOW
            </span>

            <Zap size={16} />
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;