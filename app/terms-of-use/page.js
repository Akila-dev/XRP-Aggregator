import { Jumbotron, Heading, Documentation } from "@/components";

// REACT ICONS
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { data } from "@/constants";

export default function TermsOfUse() {
  return (
    <>
      {/* Jumbotron */}
      <Jumbotron page="Contact" desc="Contact Support" />

      <section className="container -mt-10">
        <div className="relative space-y-6 lg:space-y-10">
          <div className="space-y-5">
            <Heading
              tag="terms and conditions"
              title="Terms of Use"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="space-y-5 lg:space-y-8">
            {data.terms_of_use_data.map(({ heading, content }, index) => (
              <Documentation key={index} heading={heading} data={content} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
