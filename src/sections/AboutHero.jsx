function AboutHero() {
  return (
    <section className="border-b border-neutral-300 pt-[48px] pb-[64px] md:pt-[64px] md:pb-[80px] lg:pt-[80px] lg:pb-[96px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 md:gap-y-[64px] lg:grid-cols-2 lg:items-center lg:gap-x-[64px]">
          {/* Text box */}
          <div className="space-y-6">
            <span className="inline-block rounded-[6px] bg-orange-500 px-[6px] py-[2px] text-[20px] font-bold">
              Our mission
            </span>
            <h2 className="mb-6">
              Help more people cook nourishing meals, more often.
            </h2>
            <div className="space-y-4">
              <p>
                Healthy Recipe Finder was created to prove that healthy eating
                can be convenient, affordable, and genuinely delicious.
              </p>
              <p>
                We showcase quick, whole-food dishes that anyone can master—no
                fancy equipment, no ultra-processed shortcuts—just honest
                ingredients and straightforward steps.
              </p>
            </div>
          </div>

          {/* Image box */}

          <div>
            <picture>
              <source
                srcSet="/assets/images/image-about-our-mission-large.webp"
                media="(min-width: 768px)"
              />

              <img
                src="/assets/images/image-about-our-mission-small.webp"
                className="h-full w-full rounded-[20px] lg:h-[600px]"
                alt="about hero image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
