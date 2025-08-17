function RealLifeSection() {
  return (
    <section className="pt-[64px] md:pt-[80px] lg:py-[96px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-[48px]">
          {/* Text Box */}
          <div className="space-y-5">
            <h2 className="">Built for real life</h2>
            <p className="lg:max-w-[570px]">
              Cooking shouldn’t be complicated. These recipes come in under {""}
              <span className="text-orange relative">30 minutes</span> of active
              time, fit busy schedules, and taste good enough to repeat.
            </p>
            <p>
              Whether you’re new to the kitchen or just need fresh ideas, we’ve
              got you covered.
            </p>
          </div>
          <div>
            <picture>
              <picture>
                <source
                  srcSet="/assets/images/image-home-real-life-large.webp"
                  media="(min-width: 768px)"
                />

                <img
                  src="/assets/images/image-home-real-life-small.webp"
                  className="rounded-[16px]"
                  alt="Person cutting vegetables"
                />
              </picture>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealLifeSection;
