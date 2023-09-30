import IMg from "../../assets/IMg.png";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav>
      <figure>
        <img src={IMg} alt="brand logo" width="200px" height="auto" />
      </figure>
      <div> QuillBot Research </div>
    </nav>
  );
};

export default Navbar;
