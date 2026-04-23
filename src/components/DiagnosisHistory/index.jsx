import "./index.css";

function DiagnosisHistory() {
  return (
    <div className="diagnosis-card">
      <div className="diagnosis-header">
        <h3>Diagnosis History</h3>
      </div>

      <div className="diagnosis-content">
        <div className="diagnosis-item">
          <h4>Blood Pressure</h4>

          <div className="bp-chart">
            <div className="chart-bars">
              <div className="bar-group">
                <div className="bar systolic"></div>
                <div className="bar-label">SYS</div>
              </div>
              <div className="bar-group">
                <div className="bar diastolic"></div>
                <div className="bar-label">DIA</div>
              </div>
            </div>
          </div>

          <div className="bp-values">
            <div className="bp-row">
              <span className="bp-label">Systolic</span>
              <span className="bp-value">
                120 <span className="bp-unit">mmHg</span>
              </span>
            </div>
            <div className="bp-row">
              <span className="bp-label">Diastolic</span>
              <span className="bp-value">
                80 <span className="bp-unit">mmHg</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisHistory;
