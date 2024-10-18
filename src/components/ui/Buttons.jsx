// eslint-disable-next-line react/prop-types
const Buttons = ({ children, className, onClick }) => {
  const classes = `${className || ""}`;
  return (
    <button className={`${classes} rounded-xl`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
