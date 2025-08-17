import { philosophyFeatures } from "../constants";

function OurPhilosophy() {
  return (
    <section className="border-b border-neutral-300 pt-[48px] pb-[49px] md:py-[80px] lg:py-[96px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-[40px] lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-x-[64px]">
          <div>
            <h2 className="lg:mt-[-12px]">Our food philosophy</h2>
          </div>

          <ul className="space-y-6 md:space-y-8 lg:space-y-[48px]">
            {philosophyFeatures.map(({ heading, id, text }) => (
              <li key={id} className="flex items-start gap-5">
                <span className="block">
                  <img src="/assets/images/icon-bullet-point.svg" alt="" />
                </span>
                <div className="flex-1 space-y-3">
                  <h5 className="text-[24px] font-bold text-neutral-900">
                    {heading}
                  </h5>

                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurPhilosophy;
