import "./index.css";

function LabResults() {
  const labs = [
    { id: 1, name: "Blood Tests" },
    { id: 2, name: "CT Scans" },
    { id: 3, name: "Radiology Reports" },
    { id: 4, name: "X-Ray" },
  ];

  return (
    <div className="lab-results-card">
      <h3>Lab Results</h3>
      <div className="lab-list">
        {labs.map((lab) => (
          <div key={lab.id} className="lab-item">
            <span className="lab-name">{lab.name}</span>
            <button className="download-btn" title="Download">
              <img
                src="https://res.cloudinary.com/dk2bbhmdm/image/upload/v1776931548/download_FILL0_wght300_GRAD0_opsz24_1_eatvk2.svg"
                alt="Download"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabResults;
