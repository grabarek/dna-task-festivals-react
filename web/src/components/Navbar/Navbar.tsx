import LogoIcon from '../../assets/icons/music.svg'; 
import { navigate, useStoreDispatch } from "../../store";

import "./Navbar.css";

export const Navbar = () => {
  const dispatch = useStoreDispatch();

  return (
    <nav className="navbar">
      <img 
        className="navbar__logo" 
        src={LogoIcon}
        alt="Festival App Logotype"
        onClick={() => dispatch(navigate("/"))}
        />
      {/* TODO: Burger menu logic */}
      <div className="navbar__burger">
        <div className="navbar__burger-line"></div>
        <div className="navbar__burger-line"></div>
        <div className="navbar__burger-line"></div>
      </div>
    </nav>
  );
};
