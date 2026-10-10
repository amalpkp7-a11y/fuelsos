import {
  Clock,
  CloudSun,
  MessageCircle,
  Wallet,
  Fuel,
  MapPin,
} from "lucide-react";

import "../why/Why.css";

const WHATSAPP_NUMBER = "919446378369";

const WHATSAPP_MESSAGE = `ഹായ് FuelSOS, എനിക്ക് ഇന്ധന സഹായം ആവശ്യമാണ്.

വാഹനം:
വാഹനത്തിന്റെ തരം:
ഇന്ധനത്തിന്റെ തരം:
നിലവിലെ സ്ഥലം:`;

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const benefits = [
  {
    icon: Clock,
    title: "സമയം ലാഭിക്കാം",
    description:
      "ഇന്ധനത്തിനായി പമ്പ് തേടി നടന്ന് സമയം കളയേണ്ട. ഞങ്ങളുടെ സഹായത്തോടെ വേഗത്തിൽ ഇന്ധനം വാങ്ങി യാത്ര തുടരാം.",
    color: "orange",
  },
  {
    icon: CloudSun,
    title: "വെയിലും മഴയും ഇനി പ്രശ്നമല്ല",
    description:
      "വെയിലത്തും മഴയത്തും ഇന്ധനം തേടി നടക്കേണ്ട. നിങ്ങളുടെ ബുദ്ധിമുട്ട് കുറയ്ക്കാൻ FuelSOS കൂടെയുണ്ട്.",
    color: "blue",
  },
  {
    icon: Wallet,
    title: "വ്യക്തമായ നിരക്കുകൾ",
    description:
      "₹69 നിശ്ചിത സർവീസ് ചാർജ് + കിലോമീറ്ററിന് ₹9. പമ്പിലേക്കും തിരികെയുമുള്ള യാത്രയുടെ നിരക്ക് മുൻകൂട്ടി അറിയാം. ഇന്ധനത്തിന്റെ വില പ്രത്യേകം നൽകണം.",
    color: "green",
  },
  {
    icon: MapPin,
    title: "നിങ്ങളോടൊപ്പം പമ്പിലേക്ക്",
    description:
      "നിങ്ങളോടൊപ്പം ഇന്ധന പമ്പിലേക്ക് വരാം. ഇന്ധനം വാങ്ങി നിങ്ങളുടെ വാഹനത്തിനടുത്തേക്ക് തിരികെയെത്താനും സഹായിക്കാം.",
    color: "purple",
  },
  {
    icon: Fuel,
    title: "ഇന്ധന കാൻ ഇല്ലെങ്കിലും വിഷമിക്കേണ്ട",
    description:
      "കൈയിൽ ഇന്ധന കാൻ ഇല്ലേ? വിഷമിക്കേണ്ട. ഇന്ധനം വാങ്ങുന്നതിനാവശ്യമായ കാൻ എത്തിക്കാനും ഞങ്ങൾ സഹായിക്കും.",
    color: "red",
  },
  {
    icon: MessageCircle,
    title: "വാട്സ്ആപ്പിലൂടെ എളുപ്പത്തിൽ സഹായം",
    description:
      "വാട്സ്ആപ്പിൽ സന്ദേശമയക്കുക, നിങ്ങളുടെ സ്ഥലം പങ്കുവയ്ക്കുക. സഹായവും നിരക്കും ഉറപ്പാക്കിയ ശേഷം സേവനം ആരംഭിക്കാം.",
    color: "teal",
  },
];

function WhyFuelSOS() {
  return (
    <section className="why-fuelsos" id="why-fuelsos">
      <div className="why-container">

        {/* തലക്കെട്ട് */}
        <div className="why-heading">
          <span className="why-badge">
            എന്തുകൊണ്ട് FuelSOS?
          </span>

          <h2>
            വഴിയിൽ ഇന്ധനം തീർന്നോ?
            <br />
            <span>ഇനി എളുപ്പത്തിൽ പരിഹരിക്കാം!</span>
          </h2>

          <p>
            ഇന്ധനം തീർന്നാൽ വഴിയിൽ പേടിക്കേണ്ട.
            നടക്കേണ്ട, ലിഫ്റ്റ് ചോദിക്കേണ്ട, ഓട്ടോ വിളിക്കേണ്ട.
            FuelSOS നിങ്ങളോടൊപ്പം പമ്പിലേക്ക് വന്ന്
            ഇന്ധനം വാങ്ങാൻ സഹായിക്കും.
          </p>
        </div>

        {/* പ്രധാന നേട്ടങ്ങൾ */}
        <div className="why-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                className="why-card"
                key={benefit.title}
                style={{ "--card-index": index }}
              >
                <div className={`why-icon ${benefit.color}`}>
                  <Icon
                    size={25}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <span
                  className="why-card-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>

        {/* താഴെയുള്ള സഹായ ബട്ടൺ */}
        <div className="why-bottom">
          <div>
            <h3>
              ഇന്ധനം തീർന്നതുകൊണ്ട് നിങ്ങളുടെ യാത്ര മുടങ്ങേണ്ട!
            </h3>

            <p>
              FuelSOS — നമുക്ക് ഒന്നിച്ച് പോയി ഇന്ധനം വാങ്ങാം!
            </p>
          </div>

          <a
            href={WHATSAPP_LINK}
            className="why-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            സഹായം ആവശ്യപ്പെടാം
          </a>
        </div>

      </div>
    </section>
  );
}

export default WhyFuelSOS;