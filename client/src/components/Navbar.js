import React from "react";
import logo from "../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { Link } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { GrUserAdmin } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { signout } from "../redux/actions/userActions";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const SignOutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="navbar1">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 col-2 logo">
            <Link to="/">
              <img src={logo} alt="logo" className="navbar__logo" />
            </Link>
          </div>
          <div
            className="col-lg-7 col-md-6 col-12
           searchbar"
          >
            <div className="searchbar__div row">
              <span className="col-2 Products_">
                Products <BsArrowDownShort />
              </span>
              <input
                type="text"
                className="searchbar_input col-8"
                placeholder="What are you looking for..."
              />
              <div className="search_btn col-2">
                <BsSearch />
                <small>Search</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 user_nav_col">
            <div className="user_nav">
              <FcBusinessman className="nav_icos" />

              <span>
                {userInfo?.name ? (
                  <Link to="#" className="linkClass">
                    {userInfo?.name}
                  </Link>
                ) : (
                  <Link to="/signin" className="linkClass">
                    Sign in
                  </Link>
                )}
                <span className="signoutrelative">
                  <FaCaretDown />
                  <span className="signoutafter">
                    <Link
                      to="/#signout"
                      className="linkClass"
                      onClick={SignOutHandler}
                    >
                      Signout
                    </Link>
                  </span>
                </span>
              </span>
            </div>
            <div className="user_nav">
              <FcSms className="nav_icos" />
              <span>Messages</span>
            </div>
            <div className="user_nav">
              <Link to="/ordershisyory" className="user_nav">
                <FcMoneyTransfer className="nav_icos" />
                <span className="text-order">Orders</span>
              </Link>
            </div>
            <div className="user_nav">
              <span className="cart_align1">
                <span className="linktetst">
                  <Link to="/cart" className="BuSket">
                    <FcPaid className="nav_icos" />
                  </Link>
                </span>
                <span className="cart_amout ">
                  {cartItem.length > 0 && cartItem.length}
                </span>
              </span>

              <Link to="/cart" className="BuSket">
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
