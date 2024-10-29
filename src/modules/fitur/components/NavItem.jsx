// NavItem.js
import React from "react";
import PropTypes from "prop-types";

const NavItem = ({ text, href }) => (
  <li className="my-auto">
    <a
      href={href}
      className="text-slate-600 hover:text-slate-800 font-semibold"
    >
      {text}
    </a>
  </li>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
