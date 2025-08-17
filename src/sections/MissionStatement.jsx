function MissionStatement() {
  return (
    <section className="max-md:py-[48px] md:pt-[80px] lg:py-[96px]">
      <div className="container">
        <di className="grid grid-cols-1 gap-y-8 lg:grid-cols-[auto_1fr] lg:gap-x-[64px]">
          <div className="space-y-3 lg:max-w-[360px]">
            <h2>Beyond the plate</h2>
            <ul className="space-y-3">
              <p className="block">
                We believe food is a catalyst for community and well-being. By
                sharing approachable recipes, we hope to:
              </p>

              <div className="ml-8">
                <li className="list-dot">
                  Encourage family dinners and social cooking.
                </li>
                <li className="list-dot">
                  Reduce reliance on single-use packaging and delivery waste.
                </li>
                <li className="list-dot">
                  Spark curiosity about seasonal produce and local agriculture.
                </li>
              </div>
            </ul>
          </div>
          <div>
            <picture>
              <source
                srcSet="/assets/images/image-about-beyond-the-plate-small.webp"
                media="(min-width: 768px)"
              />

              <img
                src="/assets/images/image-about-beyond-the-plate-small.webp"
                className="h-full w-full rounded-[12px] lg:h-[400px]"
                alt="about hero image"
              />
            </picture>
          </div>
        </di>
      </div>
    </section>
  );
}

export default MissionStatement;
