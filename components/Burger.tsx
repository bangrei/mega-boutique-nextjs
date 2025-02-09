interface Props {
  active: Boolean;
}

const Burger = ({ active }: Props) => {
  return (
    <div className={`burger ${active ? "active" : ""}`}>
      <div className="burger-line line-1"></div>
      <div className="burger-line line-2"></div>
      <div className="burger-line line-3"></div>
    </div>
  );
};

export default Burger;
