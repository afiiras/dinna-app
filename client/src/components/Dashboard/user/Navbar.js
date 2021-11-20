import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="avatar">
        <div className="info">
          <h6 className="status">Online</h6>
        </div>
      </div>
      <div className="quick">
        <button>
          <VscArrowSwap />
          Quick Transactions
        </button>
      </div>
      <div className="navbar__info">
        <IoMdNotificationsOutline />
        <FiMail />
        <div className="log_out">
          <Link className="outBtn" to="/">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
