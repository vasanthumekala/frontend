import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const navList = [
  {
    id: uuidv4(),
    title: Overview,
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776878004/home_FILL0_wght300_GRAD0_opsz24_fbtbfl.svg",
  },
  {
    id: uuidv4(),
    title: Patients,
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776878997/group_FILL0_wght300_GRAD0_opsz24_fgrgia.svg",
  },
  {
    id: uuidv4(),
    title: Schedule,
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879057/calendar_today_FILL0_wght300_GRAD0_opsz24_swepgj.svg",
  },
  {
    id: uuidv4(),
    title: Messages,
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879091/chat_bubble_FILL0_wght300_GRAD0_opsz24_tdjeaz.svg"
  },
  {
    id: uuidv4(),
    title: Transactions,
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879129/credit_card_FILL0_wght300_GRAD0_opsz24_jw86qc.svg",
  },
];

function NavBar() {
  return (
    <nav className="nav-container">
      <img
        src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776874929/TestLogo_idyw6c.svg"
        alt="Logo"
        className="logo"
      />
    </nav>
  );
}

export default NavBar;
