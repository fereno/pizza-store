import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "inline-block text-sm rounded-full bg-rose-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-rose-300 focus:bg-rose-300 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm" ,
    secondary:
      " px-4 py-2.5 md:px-6 md:py-3.5 focus:text-stone-800  border-2 inline-block text-sm rounded-full  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
