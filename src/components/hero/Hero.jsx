import { MessageCircle } from "lucide-react";
import "./Hero.css";
import cartoon from "../../assets/cartoon/cartoon.mp4";

const WHATSAPP_NUMBER = "919446378369";

const BENEFITS = ["സമയം ലാഭിക്കാം", "ബുദ്ധിമുട്ട് ഒഴിവാക്കാം", "യാത്ര തുടരാം"];

function Hero() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
     `Hi FuelSOS,

I need roadside assistance.

Vehicle:
Vehicle Type:
Fuel Type:

Please send your exact CURRENT LOCATION via WhatsApp📍`
  )}`;

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
       <h1 className="hero-title">
  വഴിയിൽ <span>FUEL</span> തീർന്നോ?
</h1>

<p className="hero-subtitle">
  വെയിലും മഴയും സഹിച്ച് ഇന്ധനം തേടി നടക്കേണ്ട.
  <br />
  ലിഫ്റ്റ് ചോദിക്കേണ്ട, ഓട്ടോ വിളിക്കേണ്ട.
</p>

<p className="hero-description">
  ഇന്ധനം വാങ്ങാൻ പുതിയ കാൻ വാങ്ങി അധികം പണം ചെലവഴിക്കേണ്ടതുമില്ല.
</p>

<p className="hero-highlight">
  FuelSOS നിങ്ങളോടൊപ്പം അടുത്തുള്ള Fuel Station-ലേക്ക് എത്തി,
  ഇന്ധനം വാങ്ങി നിങ്ങളുടെ വാഹനത്തിലേക്ക് തിരികെ എത്തിക്കും.
</p>

         

          {/* Compact hanging price tag */}
          <div className="price-tag" aria-label="Fixed charge 69 rupees plus 9 rupees per kilometre">
            <span className="tag-hole" aria-hidden="true"></span>
            <div className="price-content">
              <small>FIXED CHARGE</small>
              <strong>₹39</strong>
              <span>+ ₹9 / km</span>
            </div>
          </div>

          <ul className="hero-benefits">
            {BENEFITS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary-btn"
            >
              <MessageCircle size={20} />
              GET HELP NOW
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              HOW IT WORKS
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={cartoon} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;