import RecipesCard from "@/components/RecipesCard";
import { recipesItem } from "@/constants";
import { useMemo } from "react";

function MoreRecipes() {
  const randomRecipes = useMemo(() => {
    return [...recipesItem].sort(() => Math.random() - 0.5).slice(0, 3);
  }, []); // [] = calculé une seule fois au montage
  return (
    <section className="border-b border-neutral-300 pt-[48px] lg:pt-[64px] lg:pb-[96px]">
      <div className="container">
        <div>
          <h3 className="mb-6">More recipes</h3>
          <ul className="grid grid-cols-1 lg:grid-cols-3">
            {randomRecipes.map((recipe) => (
              <li key={recipe.id} className="">
                <RecipesCard recipe={recipe} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MoreRecipes;
