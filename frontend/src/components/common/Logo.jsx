import React from "react";
import { logoStyles as s } from "../../assets/dummyStyles";
import { Link } from "react-router-dom";

const Logo = ({
  fontSize = "1.5rem",
  iconSize = 24,
  showText = true,
  ...props
}) => {
  return (
    <Link to="/" className={`${s.link} ${props.className || ""}`}>f
    </Link>
  )
};

export default Logo;
