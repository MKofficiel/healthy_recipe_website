import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";

const router = createBrowserRouter([
  {
    index: <Home />,
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
    element: <Recipes />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
