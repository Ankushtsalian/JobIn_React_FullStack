import Wrapper from "../assets/wrappers/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleButton = () => {
    console.log("toggle");
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleButton}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={toggleButton}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={toggleButton}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
