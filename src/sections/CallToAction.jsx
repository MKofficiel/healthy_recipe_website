import Button from "../components/Button";

function CallToAction() {
  return (
    <section className="max-lg:pt-[64px] max-md:px-4">
      <div className="relative container overflow-hidden rounded-[16px] bg-neutral-200 py-[48px] md:py-[80px] lg:py-[86px]">
        <div className="relative z-10 text-center">
          <h2 className="mb-3">Ready to cook smarter?</h2>
          <p className="mb-8 lg:mb-10">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Button variant="primary">Browse recipes</Button>
        </div>

        <div className="absolute max-md:hidden md:bottom-[-20px] md:left-[-5%] md:h-[232px] md:w-[180px] lg:top-[10px] lg:h-[390px] lg:w-[315px]">
          <img src="/assets/images/pattern-fork.svg" alt="pattern fork" />
        </div>
        <div className="absolute top-1/2 max-md:hidden md:top-[-10px] md:right-[-5%] md:size-[172px] lg:size-[339px]">
          <img src="/assets/images/pattern-knife.svg" alt="pattern kiffe" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
