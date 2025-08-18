import { useState } from "react";
import RecipesCard from "../components/RecipesCard";
import { recipesItem } from "../constants";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

function RecipesGrid() {
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);

  return (
    <section>
      <div className="container">
        <div className="border">
          <div className="">
            <div class="relative w-56">
              {/* <select
                id="prep-time"
                name="prep-time"
                class="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-8 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="" disabled selected hidden>
                  Max Prep Time
                </option>
                <option value="0">0 minutes</option>
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="">Clear</option>
              </select> */}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
            {recipesItem.map((recipe) => (
              <li className="h-full" key={recipe.id}>
                <RecipesCard recipe={recipe} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RecipesGrid;
