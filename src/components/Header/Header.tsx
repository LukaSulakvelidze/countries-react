import Moon_Icon from "../../assets/Icons/Moon_Icon.svg";
import { HeaderProps } from "../../interfaces";

const Header = ({ header_classname, onClick }: HeaderProps) => {
  return (
    <header className={header_classname}>
      <h3 className="page_name">Where in the world?</h3>

      <div onClick={onClick} className="dark_toggle">
        <img src={Moon_Icon} alt="Moon Icon" />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
