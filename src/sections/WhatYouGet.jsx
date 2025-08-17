import { features } from "../constants";

function WhatYouGet() {
  return (
    <section className="border-b border-neutral-300 pt-[80px] max-md:pt-16 md:py-[80px] lg:pb-[96px]">
      <div className="container mx-auto">
        <div className="space-y-8 md:space-y-[48px]">
          <h2 className="lg:text-center">What You'll Get</h2>
          <ul className="grid grid-cols-1 gap-y-[24px] md:gap-y-[32px] lg:grid-cols-3">
            {features.map(({ id, icon, heading, text }) => (
              <li key={id}>
                <div className="space-y-5">
                  <div className="bg-neutral-0 flex size-[60px] items-center justify-center rounded-[12px]">
                    <img src={icon} alt="" />
                  </div>

                  <div>
                    <h3 className="mb-3">{heading}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
