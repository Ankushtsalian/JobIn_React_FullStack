import Wrapper from "../assets/wrappers/Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { logoutUser, toggleSidebar } from "../feature/user/userSlice";

const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleUserButton = () => {
    setShowLogout(!showLogout);
  };

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={toggleUserButton}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
