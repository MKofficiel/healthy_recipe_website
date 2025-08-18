import { Link } from "react-router";

function ButtonViewRecipe({ children, onClick, id }) {
  return (
    <Link
      onClick={onClick}
      className="inline-block w-full cursor-pointer rounded-full bg-neutral-900 py-3 text-center text-[16px] leading-[150%] font-bold tracking-[0.3px] text-white"
    >
      {children}
    </Link>
  );
}

export default ButtonViewRecipe;
