import { useState } from "react";
import {
  Building2,
  User,
  Fuel,
  MapPin,
  MessageCircle,
  Info,
} from "lucide-react";

import "../pricing/Pricing.css";

const WHATSAPP_NUMBER = "919446378369";

const WHATSAPP_MESSAGE = `Hi FuelSOS, I need fuel assistance.

Vehicle:
Vehicle Type:
Fuel Type:
Current Location:`;

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const SERVICE_FEE = 39;
const RATE_PER_KM = 9;

const priceCards = [
{
  label: "Fixed Service Fee",
  amount: `₹${SERVICE_FEE}`,
  unit: "one time",
  description: "Our Base → Your Location. No per-km charge.",
},
{
  label: "Fuel Station Trip",
  amount: `₹${RATE_PER_KM}`,
  unit: "per km",
  description: "Your Location → Fuel Station → Your Vehicle.",
},
{
  label: "Fuel Bill",
  amount: "Actual",
  unit: "price",
  description: "Pay at the fuel station. No fuel markup.",
},
];

const route = [
  {
  icon: Building2,
  title: "Our Base",
  note: "Starting Point",
  leg: "Fixed ₹39",
  legType: "fixed",
},
{
  icon: User,
  title: "Your Location",
  note: "Your Vehicle",
  leg: "₹9/km",
  legType: "perkm",
},
{
  icon: Fuel,
  title: "Fuel Station",
  note: "Refuel Stop",
  leg: "₹9/km",
  legType: "perkm",
},
{
  icon: MapPin,
  title: "Back to You",
  note: "Return to Your Vehicle",
},
];

function Pricing() {
  const [distance, setDistance] = useState(2);

  const totalKm = distance * 2;
  const tripCharge = totalKm * RATE_PER_KM;
  const serviceTotal = SERVICE_FEE + tripCharge;

  return (
    <section
      className="pricing"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="pricing-container">
        {/* Heading */}
        <div className="pricing-heading">
          <span className="pricing-badge">SIMPLE PRICING</span>

          <h2 id="pricing-heading">
            Clear Pricing for
            <br />
            <span>Fuel Emergency Help</span>
          </h2>

          <p>
  മറഞ്ഞിരിക്കുന്ന ചാർജുകളില്ല. സേവന നിരക്ക് എത്രയാണെന്ന് നിങ്ങൾക്ക് മുൻകൂട്ടി അറിയാം. ഇന്ധനത്തിന്റെ വില മാത്രം പ്രത്യേകം നൽകണം.

          </p>
        </div>

        {/* Price cards */}
        <div className="pricing-grid">
          {priceCards.map((card) => (
            <article className="price-card" key={card.label}>
              <h3>{card.label}</h3>

              <p className="price-card-amount">
                <strong>{card.amount}</strong>
                <span>{card.unit}</span>
              </p>

              <p className="price-card-text">{card.description}</p>
            </article>
          ))}
        </div>

        {/* Route */}
        <div className="pricing-panel">
          <h3 className="pricing-panel-title">How the charge works</h3>

          <ol className="price-route">
            {route.map((step) => {
              const Icon = step.icon;

              return (
                <li className="route-step" key={step.title}>
                  <div className="route-node">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.note}</p>

                  {step.leg && (
                    <span className={`route-leg ${step.legType}`}>
                      {step.leg}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Estimate */}
        <div className="pricing-panel pricing-estimate">
          <div className="estimate-inputs">
            <h3 className="pricing-panel-title">Estimate your charge</h3>

            <label htmlFor="fuel-distance" className="estimate-label">
              Distance to Petrol Pump (one way):{" "}
              <strong>{distance} km</strong>
            </label>

            <input
              id="fuel-distance"
              className="estimate-range"
              type="range"
              min="1"
              max="10"
              step="1"
              value={distance}
              onChange={(event) => setDistance(Number(event.target.value))}
            />

            <div className="estimate-scale" aria-hidden="true">
              <span>1 km</span>
              <span>10 km</span>
            </div>
          </div>

          <div className="estimate-result" aria-live="polite">
            <p className="estimate-line">
              {distance} km + {distance} km = {totalKm} km × ₹{RATE_PER_KM} ={" "}
              <strong>₹{tripCharge}</strong>
            </p>

            <p className="estimate-line">
              ₹{SERVICE_FEE} service fee + ₹{tripCharge} trip charge
            </p>

            <p className="estimate-total">
              <span>Service total</span>
              <strong>₹{serviceTotal}</strong>
            </p>

            <p className="estimate-note">
              <Info size={15} aria-hidden="true" />
              Fuel bill ithil ulppedilla. Doorram WhatsApp-il confirm cheyyum.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pricing-bottom">
          <div>
            <h3>Ready when you need help.</h3>
            <p>WhatsApp-il message ayakkuka, location share cheyyuka.</p>
          </div>

          <a
            href={WHATSAPP_LINK}
            className="pricing-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            GET ASSISTANCE ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;