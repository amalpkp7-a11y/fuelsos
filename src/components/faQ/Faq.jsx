import { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import "../faQ/Faq.css";

const WHATSAPP_NUMBER = "919446378369";

const faqs = [
  {
    question: "What is FuelSOS?",
    answer:
      "FuelSOS is a roadside fuel assistance service in Kozhikode. ഇന്ധനം തീർന്ന് വഴിയിൽ കുടുങ്ങിയാൽ അടുത്തുള്ള fuel station-ൽ നിന്ന് ഇന്ധനം വാങ്ങാൻ ഞങ്ങൾ നിങ്ങളോടൊപ്പം എത്തി സഹായിക്കും.",
  },
  {
    question: "How does FuelSOS work?",
    answer:
      "WhatsApp വഴി ഞങ്ങളെ ബന്ധപ്പെടുക. നിങ്ങളുടെ vehicle details, fuel type, exact current location എന്നിവ അയക്കുക. Request confirm ചെയ്ത ശേഷം ഞങ്ങളുടെ team നിങ്ങളെ ബന്ധപ്പെടും.",
  },
  {
    question: "Does FuelSOS deliver fuel directly to my vehicle?",
    answer:
      "No. FuelSOS നേരിട്ട് വാഹനത്തിലേക്ക് fuel delivery ചെയ്യുന്ന സേവനമല്ല. ഇന്ധനം വാങ്ങുന്നതിനായി നിങ്ങളോടൊപ്പം അടുത്തുള്ള fuel station-ലേക്ക് എത്തി സഹായിക്കുകയും തുടർന്ന് നിങ്ങളുടെ വാഹനത്തിനടുത്തേക്ക് തിരികെ എത്തിക്കുകയും ചെയ്യും.",
  },
  {
    question: "What is the service charge?",
    answer:
      "Fixed service charge ₹39 ആണ്. കൂടാതെ യാത്രാദൂരം അനുസരിച്ച് ₹9/km ഈടാക്കും. Fuel station-ലേക്കുള്ള യാത്രയും തിരികെയുള്ള യാത്രയും കണക്കാക്കും. ഇന്ധനത്തിന്റെ വില പ്രത്യേകം നൽകണം.",
  },
  {
    question: "How can I contact FuelSOS?",
    answer:
      "ഞങ്ങളുടെ website-ലെ WhatsApp button ക്ലിക്ക് ചെയ്ത് നേരിട്ട് message അയക്കാം. നിങ്ങളുടെ vehicle details-ഉം exact current location-ഉം അയക്കുക.",
  },
  {
    question: "What details should I share?",
    answer:
      "Vehicle name, vehicle type, fuel type, ഇപ്പോൾ വാഹനം നിൽക്കുന്ന സ്ഥലത്തിന്റെ exact current location എന്നിവ അയക്കുക.",
  },
  {
    question: "Do I need to have a fuel can?",
    answer:
      "നിങ്ങളുടെ കൈയിൽ അനുയോജ്യമായ fuel can ഇല്ലെങ്കിൽ, ലഭ്യത അനുസരിച്ച് fuel can support നൽകാൻ ശ്രമിക്കാം. ഇത് മുൻകൂട്ടി WhatsApp വഴി സ്ഥിരീകരിക്കുക.",
  },
  {
    question: "How quickly will FuelSOS respond?",
    answer:
      "നിങ്ങളുടെ request ലഭിച്ച ശേഷം സാധാരണയായി 10 മിനിറ്റിനുള്ളിൽ ബന്ധപ്പെടാൻ ഞങ്ങൾ ശ്രമിക്കും. തിരക്ക്, location, service availability എന്നിവ അനുസരിച്ച് സമയം മാറാം.",
  },
  {
    question: "Does FuelSOS provide puncture and towing assistance?",
    answer:
      "ലഭ്യത അനുസരിച്ച് puncture assistance, towing support എന്നിവയ്ക്ക് സഹായം ലഭ്യമാക്കാൻ ശ്രമിക്കാം. സേവനം ഉറപ്പാക്കാൻ WhatsApp വഴി മുൻകൂട്ടി ബന്ധപ്പെടുക.",
  },
  {
    question: "Which locations does FuelSOS serve?",
    answer:
      "നിലവിൽ Kozhikode പ്രദേശത്താണ് FuelSOS സേവനത്തിന് പ്രാധാന്യം നൽകുന്നത്. നിങ്ങളുടെ location-ൽ സേവനം ലഭ്യമാണോ എന്ന് WhatsApp വഴി സ്ഥിരീകരിക്കുക.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    "Hi FuelSOS! I have a question about your roadside assistance service."
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="faq-badge">
            <HelpCircle size={16} />
            FAQ
          </span>

          <h1>
            Frequently Asked <span>Questions</span>
          </h1>

          <p>
            FuelSOS-നെക്കുറിച്ച് അറിയേണ്ട കാര്യങ്ങൾ ഇവിടെ കണ്ടെത്താം.
            കൂടുതൽ സഹായത്തിന് ഞങ്ങളെ WhatsApp വഴി ബന്ധപ്പെടൂ.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle">
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="faq-contact">
          <div className="faq-contact-icon">
            <MessageCircle size={26} />
          </div>

          <div className="faq-contact-content">
            <h2>Still have questions?</h2>
            <p>
              നിങ്ങളുടെ സംശയങ്ങൾക്ക് മറുപടി ലഭിക്കാൻ ഞങ്ങളെ WhatsApp വഴി
              ബന്ധപ്പെടൂ.
            </p>
          </div>

          <a
            href={whatsappLink}
            className="faq-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            ASK ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;