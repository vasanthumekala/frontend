import "./index.css";

function ProfileCard() {
  const profileInfo = [
    {
      iconimg:
        "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776930533/BirthIcon_adhf3m.svg",
      label: "Date of Birth",
      value: "March 15, 1996",
    },
    {
      iconimg:
        "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776931397/FemaleIcon_fengeq.svg",
      label: "Gender",
      value: "Female",
    },
    {
      iconimg:
        "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776931434/PhoneIcon_qeaant.svg",
      label: "Contact Info",
      value: "+1 (555) 555-1234",
    },
    {
      iconimg:
        "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776931434/PhoneIcon_qeaant.svg",
      label: "Emergency Contact",
      value: "Spouse (555) 555-1234",
    },
    {
      iconimg:
        "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776931482/InsuranceIcon_veqq84.svg",
      label: "Insurance Provider",
      value: "Sunrise Health Assurance",
    },
  ];

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928051/Layer_2_2x_vaoo6n.jpg"
          alt="Jessica Taylor"
          className="profile-image"
        />
        <div className="profile-name">
          <h2>Jessica Taylor</h2>
        </div>
      </div>

      <div className="profile-info-list">
        {profileInfo.map((info, index) => (
          <div key={index} className="info-row">
            <img src={info.iconimg} alt={info.label} className="info-icon" />
            <div className="info-content">
              <span className="info-label">{info.label}</span>
              <span className="info-value">{info.value}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="show-all-btn">Show All Information</button>
    </div>
  );
}

export default ProfileCard;
