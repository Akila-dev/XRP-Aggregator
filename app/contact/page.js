import {
  Jumbotron,
  ContactForm,
  Heading,
  CardDiv,
  VerticalIconTextCard,
} from "@/components";

// REACT ICONS
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { data } from "@/constants";

export default function Contact() {
  return (
    <>
      {/* Jumbotron */}
      <Jumbotron page="Contact" desc="Contact Support" />

      <section className="container -mt-5">
        <div className="relative space-y-6 lg:space-y-10 max-w-text mx-auto">
          <div className="space-y-5">
            <Heading
              tag="contact us"
              title="Get In Touch"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CardDiv
              animation="slide-in"
              once
              start="90%"
              className="grid-2 !gap-5 lg:!gap-8"
            >
              <VerticalIconTextCard
                icon={<FaEnvelope />}
                title="Email Us"
                desc={data.contact_data.email}
                href={`mailto:${data.contact_data.email}`}
              />
              <VerticalIconTextCard
                icon={<FaPhoneAlt />}
                title="Phone"
                desc={data.contact_data.phone}
                href={`tel:${data.contact_data.phone}`}
              />
            </CardDiv>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
