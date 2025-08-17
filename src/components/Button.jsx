import { Link } from "react-router";

function Button({ children, variant, className, to }) {
  const baseStyle =
    " text-[20px] rounded-[10px] duration-300 transition-all text-neutral-0 px-8 py-4 font-bold  leading-[140%] -tracking-[0.5px] ";

  const variants = {
    primary: " bg-neutral-900 hover:bg-neutral-800 ",
    secondary: " bg-neutral-800",
    tertiary: " bg-neutral-900 ",
  };
  return (
    <Link to={to} className={`${variants[variant]} ${baseStyle} ${className}`}>
      {children}
    </Link>
  );
}

export default Button;
