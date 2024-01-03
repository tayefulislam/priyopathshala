import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="navbar bg-[FFFFFF]">
        <div class="navbar-start">
          <Link to={"/"} class="btn btn-ghost normal-case text-xl">
            প্রিয় পাঠশালা
          </Link>
        </div>

        <div class="navbar-end">
          <Link className="text-xl font-semibold text-red-500 mx-1" to="/menu">
            MENU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
