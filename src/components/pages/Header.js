const Header = () => {
  return (
    <div>
      <h2>
        clear<sub style={subStyle}>cleartax</sub>
      </h2>
    </div>
  );
};
export default Header;

const subStyle = {
  fontSize: "1rem",
  fontWeight: "thin",
  color: "grey"
};
