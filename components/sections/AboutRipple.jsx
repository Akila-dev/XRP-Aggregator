import { CardDiv, Heading, CoinCanvas } from "@/components";

const AboutRipple = () => {
  return (
    <div className="container flex-v-center-md lg:!gap-10 border-y border-dark bg-lines">
      <div className="size-[90vw] md:size-80 md:min-w-80 lg:size-100 lg:min-w-100 lg:min-h-100">
        <CoinCanvas />
      </div>
      <div className="space-y-5">
        <Heading tag="About XRP" title="About Ripple" left />
        <CardDiv>
          <p className="bg-dark p-4 lg:p-6 rounded-md text-[1.1em]">
            Ripple is a digital currency that enables instant payments to
            anyone, anywhere in the world. Ripple uses a distributed ledger
            technology to record transactions and maintain a complete history of
            all transactions. Ripple is a peer-to-peer network that allows users
            to transact directly with each other without intermediaries.
          </p>
        </CardDiv>
      </div>
    </div>
  );
};

export default AboutRipple;
