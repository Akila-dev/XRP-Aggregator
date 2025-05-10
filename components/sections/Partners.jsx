import Image from "next/image";

import { data } from "@/constants";

const Partners = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="marquee flex items-center gap-4 w-max">
        {[...data.partners_list, ...data.partners_list].map((img, i) => (
          <Image
            src={img}
            alt={`partner ${i + 1}`}
            key={i}
            width={585}
            height={161}
            className="w-40 md:w-50 h-auto object-contain object-center bg-dark/50 backdrop-blur-lg rounded-xl px-5 py-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
