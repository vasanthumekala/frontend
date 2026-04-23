import "./index.css";

function HealthCards() {
  const cards = [
    {
      id: 1,
      title: "Respiratory Rate",
      value: "20",
      unit: "bpm",
      status: "Normal",
      iconimg: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928178/respiratory_rate_2x_ev1eez.jpg",
      color: "blue",
    },
    {
      id: 2,
      title: "Temperature",
      value: "98.6",
      unit: "°F",
      status: "Normal",
      iconimg: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928278/temperature_2x_isj9md.jpg",
      color: "pink",
    },
    {
      id: 3,
      title: "Heart Rate",
      value: "78",
      unit: "bpm",
      status: "Normal",
      iconimg: "https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776928334/HeartBPM_2x_r3bh35.jpg",
      color: "red",
    },
  ];

  return (
    <div className="health-cards-container">
      {cards.map((card) => (
        <div key={card.id} className={`health-card ${card.color}`}>
          <div className="card-icon">
            <img className="img" src={card.iconimg} alt={card.title} />
          </div>
          <div className="card-content">
            <p className="card-title">{card.title}</p>
            <div className="card-value">
              {card.value} <span className="card-unit">{card.unit}</span>
            </div>
            <p className="card-status">{card.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthCards;
