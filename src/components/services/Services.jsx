import { Fuel, Container, Wrench, Truck, MessageCircle } from "lucide-react";

import "../services/Services.css";

const WHATSAPP_NUMBER = "919446378369";

const WHATSAPP_MESSAGE = `Hi FuelSOS, I need assistance.

Service Needed:
Vehicle:
Vehicle Type:
Current Location:`;

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const services = [
  {
    icon: Fuel,
    title: "Fuel Emergency Assistance",
    description:
      "ഇന്ധനം തീർന്ന് വഴിയിൽ കുടുങ്ങിയാൽ, FuelSOS നിങ്ങളെ അടുത്തുള്ള പെട്രോൾ പമ്പിലേക്ക് കൊണ്ടുപോയി ഇന്ധനം വാങ്ങാൻ സഹായിക്കുകയും വാഹനത്തിനടുത്തേക്ക് തിരികെ എത്തിക്കുകയും ചെയ്യും.",
    tag: "Main service",
    featured: true,
  },
  {
    icon: Container,
    title: "Fuel Can Support",
    description:
      "പ്ലാസ്റ്റിക് കുപ്പികളിൽ പെട്രോൾ വാങ്ങാൻ കഴിയില്ല. അതിനാൽ നിങ്ങളുടെ കൈയിൽ ഫ്യൂവൽ ക്യാൻ ഇല്ലെങ്കിൽ അതും ഏർപ്പാടാക്കി തരാം.",
    tag: "With fuel assistance",
  },
  {
    icon: Wrench,
    title: "Puncture Assistance",
    description:
      "ടയർ പഞ്ചറായി വഴിയിൽ കുടുങ്ങിയോ? WhatsApp വഴി അറിയിക്കൂ. ആവശ്യമായ സഹായം ലഭ്യമാക്കാൻ ശ്രമിക്കാം.",
    tag: "Ask on WhatsApp",
  },
  {
    icon: Truck,
    title: "Towing Support",
    description:
      "വാഹനം നീക്കാൻ കഴിയാത്ത സാഹചര്യമാണെങ്കിൽ, പങ്കാളികളുടെ ലഭ്യത അനുസരിച്ച് ടോവിങ് സൗകര്യം ഏർപ്പാടാക്കാം.",
    tag: "Depending on availability",
  },
];

function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services-container">
        {/* Heading */}
        <div className="services-heading">
          <span className="services-badge">OUR SERVICES</span>

          <h2 id="services-heading">
            Roadside Help in Kozhikode,
            <br />
            <span>When You Need It Most</span>
          </h2>

          <p>
            ഇന്ധന അടിയന്തര സഹായമാണ് FuelSOS-ന്റെ പ്രധാന സേവനം.
            അതോടൊപ്പം, വഴിയിൽ കുടുങ്ങുന്ന സാഹചര്യങ്ങളിൽ സഹായകരമായ
            മറ്റ് സേവനങ്ങളും ലഭ്യമാക്കുന്നു.
          </p>
        </div>

        {/* Services */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`service-card${
                  service.featured ? " service-card--featured" : ""
                }`}
              >
                <div className="service-icon">
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>

                <span className="service-tag">{service.tag}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            );
          })}
        </div>

        {/* Note + CTA */}
        <div className="services-bottom">
          <div>
            <h3>Not sure which service you need?</h3>

            <p>
              സേവനങ്ങളുടെ ലഭ്യത സമയത്തിനനുസരിച്ച് മാറാം.
              WhatsApp വഴി അറിയിക്കൂ, ലഭ്യത സ്ഥിരീകരിക്കാം.
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            className="services-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            ASK ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;