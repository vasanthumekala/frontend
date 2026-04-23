import { useState } from "react";
import "./index.css";

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776927897/Layer_8_2x_vy1fab.jpg",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776927958/Layer_1_2x_ol0kme.jpg",
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928003/Layer_3_2x_jkwuwo.jpg",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928051/Layer_2_2x_vaoo6n.jpg",
  },
  {
    id: 5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 12,
    name: "Megan Wilson",
    gender: "Female",
    age: 42,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

function PatientsList() {
  const [activePatient, setActivePatient] = useState(patients[3].name);
  return (
    <div className="side-bar">
      <div className="title-container">
        <h2>Patients</h2>
        <img
          src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776891408/search_FILL0_wght300_GRAD0_opsz24_miyf8d.svg"
          alt="Search Icon"
          className="search-icon"
        />
      </div>
      <ul className="patients-list">
        {patients.map((patient) => (
          <li
            key={patient.id}
            className={`patient-item ${activePatient === patient.name ? "active" : ""}`}
            onClick={() => setActivePatient(patient.name)}
          >
            <div className="image-and-name-container">
              <img
                src={patient.image}
                alt={patient.name}
                className="patient-image"
              />
              <div className="patient-info">
                <span className="patient-name">{patient.name}</span>
                <span className="patient-details">{`${patient.gender}, ${patient.age} years`}</span>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776891318/more_horiz_FILL0_wght300_GRAD0_opsz24_2x_txd91l.png"
              alt="Arrow Icon"
              className="arrow-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientsList;
