import React from "react";
import "./Burger-Menu.css";
// import Profile from "../../header/profile/Profile";

const BurgerMenu = () => {

  const btnBurger = () => {
    document.querySelector(".header-burger").classList.toggle("open");
  };


  return (
    <div className="header-burger">
      <button className="burger__menu-btn" id="burger" onClick={btnBurger}>
        <span className="burger-span__1"></span>
        <span className="burger-span__2"></span>
        <span className="burger-span__3"></span>
        <span className="burger-span__4"></span>
      </button>
      <div className="div-burger">
        <button id="profile-user">
          Profile
        </button>
        <p>Home</p>
        <p>ManPage</p>
        <p>WomanPage</p>
        <p>SalePage</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
