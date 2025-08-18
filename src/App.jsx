import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipesDetails from "./pages/RecipesDetails";
import { Children } from "react";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/recipes/:recipeId",
        element: <RecipesDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
