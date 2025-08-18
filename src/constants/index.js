export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Recipes",
    path: "/recipes",
  },
];

export const features = [
  {
    id: "123",
    icon: "/assets/images/icon-whole-food-recipes.svg",
    heading: "Whole-food recipes",
    text: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    id: "234",
    icon: "/assets/images/icon-minimum-fuss.svg",
    heading: "Minimum fuss",
    text: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    id: "456",
    icon: "/assets/images/icon-search-in-seconds.svg",
    heading: "Search in seconds",
    text: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export const whyFeatures = [
  {
    id: "1234",
    heading: "Cut through the noise.",
    text: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
  },
  {
    id: "2534",
    heading: "Empower home kitchens.",
    text: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    id: "1278",
    heading: "Make healthy look good.",
    text: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
  },
];
export const philosophyFeatures = [
  {
    id: "1234",
    heading: "Whole ingredients first.",
    text: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    id: "2534",
    heading: "Flavor without compromise.",
    text: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    id: "1278",
    heading: "Respect for time.",
    text: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
  },
  {
    id: "1256",
    heading: "Sustainable choices.",
    text: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

//RECIPES DATA

export const recipesItem = [
  {
    id: 1,
    title: "Mediterranean Chickpea Salad",
    slug: "mediterranean-chickpea-salad",
    image: {
      large: "/assets/images/mediterranean-chickpea-salad-large.webp",
      small: "/assets/images/mediterranean-chickpea-salad-small.webp",
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
  },
  {
    id: 2,
    title: "Avocado & Tomato Wholegrain Toast",
    slug: "avocado-tomato-wholegrain-toast",
    image: {
      large: "/assets/images/avocado-tomato-wholegrain-toast-large.webp",
      small: "/assets/images/avocado-tomato-wholegrain-toast-small.webp",
    },
    overview:
      "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prepMinutes: 5,
    cookMinutes: 5,
    ingredients: [
      "2 slices wholegrain bread",
      "1 ripe avocado",
      "6 cherry tomatoes, quartered",
      "1 tsp extra-virgin olive oil",
      "1 tsp fresh lemon juice",
      "Sea salt, black pepper, pinch chili flakes",
    ],
    instructions: [
      "Toast the bread to desired crispness.",
      "Mash avocado with lemon juice, salt and pepper.",
      "Spread avocado on toast and top with tomatoes.",
      "Drizzle olive oil and sprinkle chili flakes.",
    ],
  },
  {
    id: 3,
    title: "One-Pan Lemon Garlic Salmon with Asparagus",
    slug: "one-pan-lemon-garlic-salmon-with-asparagus",
    image: {
      large: "/assets/images/salmon-asparagus-large.webp",
      small: "/assets/images/salmon-asparagus-small.webp",
    },
    overview:
      "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prepMinutes: 5,
    cookMinutes: 12,
    ingredients: [
      "2 salmon fillets (125 g each)",
      "200 g asparagus spears, trimmed",
      "1 Tbsp extra-virgin olive oil",
      "2 garlic cloves, minced",
      "1/2 lemon, sliced",
      "Sea salt & black pepper",
    ],
    instructions: [
      "Heat a large skillet over medium-high with olive oil.",
      "Season salmon and asparagus with salt, pepper, and minced garlic.",
      "Place salmon skin-side down; arrange asparagus around.",
      "Cook 4 min, flip salmon, add lemon slices, cook 4-5 min more until salmon is opaque.",
      "Serve hot with pan juices.",
    ],
  },
  {
    id: 4,
    title: "Quinoa Veggie Power Bowl",
    slug: "quinoa-veggie-power-bowl",
    image: {
      large: "/assets/images/quinoa-veggie-bowl-large.webp",
      small: "/assets/images/quinoa-veggie-bowl-small.webp",
    },
    overview:
      "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 15,
    ingredients: [
      "1 cup cooked quinoa (from 1/3 cup dry)",
      "1 cup roasted sweet potato cubes",
      "1 cup baby spinach",
      "1/2 cup chickpeas, drained & rinsed",
      "1/2 avocado, sliced",
      "1 Tbsp pumpkin seeds",
      "1 Tbsp extra-virgin olive oil",
      "1 Tbsp fresh lemon juice",
      "Sea salt & black pepper",
    ],
    instructions: [
      "Cook quinoa according to package, fluff and cool slightly.",
      "In bowls layer spinach, quinoa, sweet potato and chickpeas.",
      "Top with avocado slices and pumpkin seeds.",
      "Whisk olive oil, lemon juice, salt & pepper; drizzle over bowls.",
    ],
  },
  {
    id: 5,
    title: "Sweet Potato Black Bean Tacos",
    slug: "sweet-potato-black-bean-tacos",
    image: {
      large: "/assets/images/sweet-potato-tacos-large.webp",
      small: "/assets/images/sweet-potato-tacos-small.webp",
    },
    overview:
      "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prepMinutes: 10,
    cookMinutes: 15,
    ingredients: [
      "6 small corn tortillas",
      "1 medium sweet potato, diced small",
      "1 cup canned black beans, rinsed",
      "1 Tbsp olive oil",
      "1/2 tsp ground cumin",
      "1/2 tsp smoked paprika",
      "Juice of 1/2 lime",
      "1/2 cup shredded red cabbage",
      "Fresh cilantro & salsa to serve",
    ],
    instructions: [
      "Toss sweet potato cubes with oil, cumin, paprika, salt; roast in air-fryer or oven at 200 °C for 12 min.",
      "Warm tortillas in a dry skillet.",
      "Fill tortillas with roasted sweet potatoes, black beans and cabbage.",
      "Squeeze lime juice, add salsa and cilantro.",
    ],
  },
  {
    id: 6,
    title: "Greek Yogurt Berry Parfait",
    slug: "greek-yogurt-berry-parfait",
    image: {
      large: "/assets/images/greek-yogurt-large.webp",
      small: "/assets/images/greek-yogurt-small.webp",
    },
    overview:
      "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    servings: 1,
    prepMinutes: 5,
    cookMinutes: 0,
    ingredients: [
      "1 cup plain Greek yogurt",
      "1/2 cup mixed fresh berries",
      "2 Tbsp rolled oats",
      "1 tsp honey",
      "1 tsp chia seeds",
    ],
    instructions: [
      "In a glass, layer half the yogurt, berries and oats.",
      "Repeat layers and drizzle with honey.",
      "Sprinkle chia seeds and serve.",
    ],
  },
  {
    id: 7,
    title: "Lentil & Spinach Soup",
    slug: "lentil-spinach-soup",
    image: {
      large: "/assets/images/lentil-soup-large.webp",
      small: "/assets/images/lentil-soup-small.webp",
    },
    overview: "A hearty 30-minute soup rich in plant protein and iron.",
    servings: 4,
    prepMinutes: 10,
    cookMinutes: 20,
    ingredients: [
      "1 Tbsp olive oil",
      "1 onion, diced",
      "1 carrot, diced",
      "1 celery stalk, diced",
      "2 garlic cloves, minced",
      "1 cup dry red lentils, rinsed",
      "400 g canned diced tomatoes",
      "4 cups vegetable broth",
      "2 cups baby spinach",
      "1/2 tsp ground cumin",
      "Sea salt & black pepper",
    ],
    instructions: [
      "Heat oil in a pot; sauté onion, carrot, celery 4 min.",
      "Add garlic & cumin; cook 1 min.",
      "Stir in lentils, tomatoes and broth; bring to boil.",
      "Simmer 15 min until lentils tender.",
      "Stir in spinach until wilted, season and serve.",
    ],
  },
  {
    id: 8,
    title: "Banana Oat Pancakes",
    slug: "banana-oat-pancakes",
    image: {
      large: "/assets/images/banana-pancakes-large.webp",
      small: "/assets/images/banana-pancakes-small.webp",
    },
    overview: "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prepMinutes: 5,
    cookMinutes: 10,
    ingredients: [
      "2 ripe bananas",
      "1 cup rolled oats",
      "2 eggs",
      "1 tsp baking powder",
      "1/2 tsp cinnamon",
      "Olive oil for cooking",
      "Fresh fruit to serve",
    ],
    instructions: [
      "Blend bananas, oats, eggs, baking powder and cinnamon until smooth.",
      "Heat lightly oiled skillet on medium; pour 1/4-cup batter circles.",
      "Cook 2-3 min each side until golden.",
      "Serve with fresh fruit.",
    ],
  },
];
