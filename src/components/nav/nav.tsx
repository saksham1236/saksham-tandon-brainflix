import "./nav.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import userProfile from "../../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../../assets/Icons/search.svg";
import Button from "../button/button";
import buttonIcon from "../../assets/Icons/upload.svg";
import UserProfile from "../userProfile/userProfile";
function SearchInput() {
  return (
    <div className="nav__search">
      <span className="nav__search__icon">
        <img src={searchIcon} alt="Search Icon" />
      </span>
      <input
        type="text"
        name="searchInput"
        className="nav__search__input"
        placeholder="Search"></input>
    </div>
  );
}

function Nav() {
  return (
    <section className="nav__container">
      <nav className="nav">
        <div className="nav__logo">
          <img className="nav__logo__src" src={logo} alt="Brainflix Logo" />
        </div>
        <div className="nav__right">
          <div className="nav__row__mid">
            <SearchInput />
            <div className="nav__user">
              <UserProfile />
            </div>
          </div>

          <Button
            iconSrc={buttonIcon}
            iconAlt="Upload Icon"
            buttonLabel="UPLOAD"
          />
          <div className="nav__user__desktop">
            <UserProfile />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
