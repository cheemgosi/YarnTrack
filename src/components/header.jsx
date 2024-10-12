import logo from "../../src-tauri/icons/Square107x107Logo.png";
import moon from "../../src/assets/svgs/moon.svg"
import bell from "../../src/assets/svgs/bell.svg"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="full-logo clickable">
          <img src={logo} alt="logo" className="logo" />
          YarnTrack
        </div>
      </div>

      <div className="menu">
        <div className="menu-option hover-darken clickable">Pagrindinis</div>
        <div className="menu-option hover-darken clickable">Inventorius</div>
        <div className="menu-option hover-darken clickable">Užsakymai</div>
        <div className="menu-option hover-darken clickable">Analizė</div>
      </div>

      <div className="notifications-container">
        <img src={moon} alt="moon" className="svg moon hover-darken clickable"/>
        <img src={bell} alt="bell" className="svg bell hover-darken clickable"/>
      </div>
    </div>
  );
};

export default Header;
