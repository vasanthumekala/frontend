import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const navList = [
  {
    id: uuidv4(),
    title: "Overview",
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776878004/home_FILL0_wght300_GRAD0_opsz24_fbtbfl.svg",
  },
  {
    id: uuidv4(),
    title: "Patients",
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776878997/group_FILL0_wght300_GRAD0_opsz24_fgrgia.svg",
  },
  {
    id: uuidv4(),
    title: "Schedule",
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879057/calendar_today_FILL0_wght300_GRAD0_opsz24_swepgj.svg",
  },
  {
    id: uuidv4(),
    title: "Messages",
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879091/chat_bubble_FILL0_wght300_GRAD0_opsz24_tdjeaz.svg",
  },
  {
    id: uuidv4(),
    title: "Transactions",
    icon: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879129/credit_card_FILL0_wght300_GRAD0_opsz24_jw86qc.svg",
  },
];

function NavBar() {
  const [activeNav, setActiveNav] = useState("Patients");
  const changeOption = (title) => {
    setActiveNav(title);
  };
  return (
    <nav className="nav-container">
      <img
        src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776874929/TestLogo_idyw6c.svg"
        alt="Logo"
        className="logo"
      />
      <ul className="options-lists">
        {navList.map((item) => (
          <li
            key={item.id}
            className={`list-item ${activeNav === item.title ? "active" : ""}`}
            onClick={() => changeOption(item.title)}
          >
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="nav-icon"
            />
            <span className="nav-title">{item.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <img src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776879969/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc_2x_kvv0yy.png" />
        <div>
          <span className="user-name">Dr. Smith</span>
          <span className="user-role">Cardiologist</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
