import React from "react";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <>
      <Link to="Login">
        <button className="btn-nav">
          <AccountBoxRoundedIcon />
          <span>Login</span>
        </button>
      </Link>
    </>
  );
};

export default Button;
