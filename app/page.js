import {
  AboutRipple,
  Hero,
  Heading,
  Accordion,
  ExchangeRate,
  Exchanges,
} from "@/components";

import { data } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Exchanges />
      <div id="faq" className="container space-y-5 lg:space-y-10">
        <Heading tag="Exchange Rates" title="Exchange Rates" />
        <ExchangeRate />
      </div>
      <AboutRipple />
      <div id="faq" className="container space-y-5 lg:space-y-10">
        <Heading tag="FAQ" title="Frequency Asked Questions" />
        <Accordion data={data.faq_data} />
      </div>
    </>
  );
}
