import { useNavigate } from "react-router";

import ButtonViewRecipe from "./ButtonViewRecipe";

function RecipesCard({ recipe }) {
  const navigate = useNavigate();
  const {
    id,
    title,
    image: { large, small },
    overview,
    servings,
    prepMinutes,
    cookMinutes,
  } = recipe;

  function handleRecipesList() {
    navigate(`/recipes/${id}`);
  }
  return (
    <div className="flex h-full flex-col rounded-[12px] bg-white p-2">
      <div className="">
        <picture className="h-full">
          <source srcSet={large} media="(min-width: 768px)" />

          <img
            src={small}
            className="l rounded-[12px] object-cover"
            alt="hero image"
          />
        </picture>
      </div>

      {/* TEXT BOX */}
      <div className="h-full flex-1 space-y-4 p-2">
        <div>
          <h5 className="mb-[10px] truncate text-[20px] leading-[140%] font-bold tracking-[-0.5px]">
            {title}
          </h5>
          <span className="text-[16px] leading-[150%] font-medium tracking-[-0.3px]">
            {overview}
          </span>
        </div>

        {/* ETAPES DE CUISSON */}
        <div className="mb-4 grid flex-1 grid-cols-[auto_auto] items-start justify-start gap-y-2 md:grid-cols-[auto_auto_auto] md:gap-x-4 lg:grid-cols-[auto_auto]">
          <div className="flex items-center">
            <span>
              <img src="/assets/images/icon-servings.svg" alt="icon servings" />
            </span>
            <span>servings: {servings}</span>
          </div>
          <div className="flex items-center">
            <span>
              <img
                src="/assets/images/icon-prep-time.svg"
                alt="icon prepare time"
              />
            </span>
            <span>Prep: {prepMinutes} mins</span>
          </div>
          <div className="flex items-center">
            <span>
              <img
                src="/assets/images/icon-cook-time.svg"
                alt="icon cook time"
              />
            </span>
            <span>Cook: {cookMinutes} min</span>
          </div>
        </div>
        <ButtonViewRecipe onClick={handleRecipesList}>
          View Recipe
        </ButtonViewRecipe>
      </div>
    </div>
  );
}

export default RecipesCard;

{
  /* {
    id: 1,
    title: "Mediterranean Chickpea Salad",
    slug: "mediterranean-chickpea-salad",
    image: {
      large: "./assets/images/mediterranean-chickpea-salad-large.webp",
      small: "./assets/images/mediterranean-chickpea-salad-small.webp",
    },
    overview:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 0,
    ingredients: [
      "1 can (400 g) chickpeas, drained & rinsed",
      "1 small cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red bell pepper, diced",
      "1/4 red onion, finely chopped",
      "2 Tbsp fresh parsley, chopped",
      "2 Tbsp extra-virgin olive oil",
      "1 Tbsp fresh lemon juice",
      "Sea salt & black pepper to taste",
    ],
    instructions: [
      "In a large bowl combine chickpeas, cucumber, tomatoes, bell pepper, red onion and parsley.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper; toss to coat.",
      "Serve immediately or chill up to 2 days.",
    ],
  }, */
}
