import React, { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import "../howitworks/HowWork.css";
import { whatsappLink } from "../../utils/Whatsapp";

const REVEAL_SELECTOR = [
  ".hiw-steps-section h2",
  ".hiw-steps-section .hiw-lead",
  ".hiw-steps li",
  ".hiw-note",
  ".hiw-block h2",
  ".hiw-block .hiw-lead",
  ".hiw-services > div",
  ".hiw-cta",
  ".hiw details",
].join(",");

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function WhatsAppButton({ children }) {
  return (
    <a
      className="hiw-btn"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={20} />
      {children}
    </a>
  );
}

function HowWork() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (
      !root ||
      prefersReducedMotion() ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    root.classList.add("hiw-js");

    const items = root.querySelectorAll(REVEAL_SELECTOR);

    items.forEach((el) => {
      el.classList.add("hiw-reveal");

      const index = Array.prototype.indexOf.call(
        el.parentElement.children,
        el
      );

      el.style.setProperty("--i", Math.min(index, 5));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className="hiw" id="how-it-works" ref={rootRef}>
      <div className="hiw-wrap">

        {/* HOW IT WORKS */}
        <div className="hiw-steps-section">
          <h2>How it works</h2>

          <p className="hiw-lead">
            Four steps from stranded to back on the road.
          </p>

          <ol className="hiw-steps">
            <li>
              <span className="hiw-dot">1</span>
              <h3>Send us a WhatsApp message</h3>
              <p>
                Share your <mark className="hl">live location</mark>, your
                vehicle type and what happened: out of fuel, a puncture or a
                tow.
              </p>
            </li>

            <li>
              <span className="hiw-dot">2</span>
              <h3>We confirm the price</h3>
              <p>
                You pay <mark className="hl">₹39</mark> to reach you, plus{" "}
                <mark className="hl">₹9 per km</mark> for the trip to the fuel
                station and back. We tell you the charges{" "}
                <mark className="hl hl-green">before we start</mark>.
              </p>
            </li>

            <li>
              <span className="hiw-dot">3</span>
              <h3>We bring a fuel can and take you to the station</h3>
              <p>
                Stations won't fill petrol into bottles. We give you a{" "}
                <mark className="hl hl-blue">proper fuel can</mark> and take
                you to a nearby fuel station.
              </p>
            </li>

            <li className="hiw-end">
              <span className="hiw-dot">4</span>
              <h3>We bring you back to your vehicle</h3>
              <p>
                You fill the can at the station, and we{" "}
                <mark className="hl hl-green">
                  drop you back at your vehicle
                </mark>{" "}
                so you can pour it in and drive on.
              </p>
            </li>
          </ol>

          {/* FUEL CAN NOTE */}
          <div className="hiw-note">
            <div className="hiw-note-content">
              <div>
                <strong>
                  No fuel can?{" "}
                  <span className="hiw-accent">No problem.</span>
                </strong>

                <p>
                  Petrol isn't allowed in ordinary bottles. We provide a
                  proper fuel can and take you to a nearby fuel station. You{" "}
                  <mark className="hl hl-green">
                    buy the fuel directly from the station
                  </mark>.
                </p>
              </div>

              <img
                src="/no-fuel-can.jpg.jpg"
                alt="FuelSOS providing a proper fuel can during a fuel emergency"
                className="hiw-note-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      
       
      
      

      </div>
    </section>
  );
}

export default HowWork;