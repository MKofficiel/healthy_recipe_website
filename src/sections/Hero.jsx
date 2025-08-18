import Button from "../components/Button";

function Hero() {
  return (
    <section className="relative pt-[48px] lg:pt-[80px]">
      <div className="container">
        <div className="flex flex-col gap-10 lg:items-center lg:gap-20">
          {/* Text box */}
          <div className="flex flex-col items-start lg:items-center">
            <h1 className="mb-4">
              <span className="text-orange-header relative">Healthy</span>{" "}
              meals, zero fuss
            </h1>

            <p className="mb-8 lg:text-center">
              <span className="lg:block">
                Discover eight quick, whole-food recipes that you can cook
                tonight
              </span>
              <span>—no processed junk, no guesswork.</span>
            </p>

            <Button to="/recipes" variant="primary">
              Start exploring
            </Button>
          </div>
          {/* Hero image box */}
          <div className="hero-image-shadow relative rounded-[12px] bg-white">
            <picture>
              <source
                srcSet="/assets/images/image-home-hero-large.webp"
                media="(min-width: 768px)"
              />

              <img
                src="/assets/images/image-home-hero-small.webp"
                className="h-full w-full overflow-hidden rounded-[12px] p-[2px] max-lg:h-[350px] max-md:h-auto lg:p-[8px]"
                alt="hero image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
