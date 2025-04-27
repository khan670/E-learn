import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const TrustCompany = () => {
  return (
    <section className="px-22 py-6 mt-20">
      <div className="bg-[#EAFAF2]  w-2/4 py-2  mx-auto text-center text-2xl font-semibold text-[#2ECA7F] rounded-2xl">
        <p>Trusted Company Arround The World!</p>
      </div>
      <div className="my-20">
        <Marquee>
          {[1, 2, 3, 4, 5].map((value) => (
            <Image
              key={value}
              src={`/trust-${value}.png`}
              width={300}
              height={300}
              alt={`Trust-${value}`}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustCompany;
