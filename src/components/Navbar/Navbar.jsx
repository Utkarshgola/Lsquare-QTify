import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import LogoImage from "../../assets/logo.png";

function Navbar({ searchData }) {
  return (
    
    <nav className={styles.navbarContainer}>
      {/* <Link to="/">
        <Logo />
      </Link> */}
      
      {/* <Logo /> */}



     <div className="styles.logoDiv"> <img src={LogoImage} alt="logo" width={67}/></div>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button buttontext="Give Feedback"/>
      
    </nav>
  );
}

export default Navbar;
