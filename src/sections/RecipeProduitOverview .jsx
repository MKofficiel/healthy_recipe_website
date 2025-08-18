import { useParams } from "react-router";
import { recipesItem } from "../constants";

function RecipeProduitOverview() {
  const { recipeId } = useParams();

  const {
    title,
    image: { large, small },
    overview,
    servings,
    prepMinutes,
    ingredients,
    instructions,
    cookMinutes,
  } = recipesItem.find((r) => r.id === Number(recipeId));

  console.log(title);
  return (
    <section className="border-b border-neutral-300 py-[48px] lg:pb-[96px]">
      <div className="container">
        <span className="mb-4 block text-[18px] leading-[150%] tracking-[-0.3px] text-neutral-900">
          Recipes / <span className="font-semibold">{title}</span>
        </span>
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* image Box */}
          <div>
            <div className="max-md:size-[343px] lg:size-[580px]">
              <picture>
                <source srcSet={large} media="(min-width: 768px)" />

                <img className="rounded-[12px]" src={small} alt={name} />
              </picture>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="mb-5">{title}</h2>
              <p className="mb-5">{overview}</p>

              {/* La duree de cuissons */}
              <div className="mb-4 grid flex-1 grid-cols-[auto_auto] items-start justify-start gap-x-4 gap-y-2 md:grid-cols-[auto_auto_auto]">
                <div className="flex items-center">
                  <span>
                    <img
                      src="/assets/images/icon-servings.svg"
                      alt="icon servings"
                    />
                  </span>
                  <span>servings: {servings} </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img
                      src="/assets/images/icon-prep-time.svg"
                      alt="icon prepar time"
                    />
                  </span>
                  <span>Prep: {prepMinutes} mins </span>
                </div>
                <div className="flex items-center">
                  <span>
                    <img
                      src="/assets/images/icon-cook-time.svg"
                      alt="icon cook time"
                    />
                  </span>
                  <span>
                    Cook:{" "}
                    {cookMinutes === 0
                      ? `${cookMinutes} min`
                      : `${cookMinutes} mins`}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-4">ingredients:</h4>
              <ul className="space-y-2">
                {ingredients.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="">
                      <img
                        src="/assets/images/icon-bullet-point.svg"
                        width={23}
                        alt=""
                      />
                    </span>
                    <span className="flex-1"> {item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4">instructions:</h4>
              <ul className="space-y-2">
                {instructions.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span>
                      <img
                        src="/assets/images/icon-bullet-point.svg"
                        width={23}
                        alt=""
                      />
                    </span>
                    <span className="flex-1"> {item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeProduitOverview;
