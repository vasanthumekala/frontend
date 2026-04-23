import "./index.css";

function DiagnosticList() {
  const diagnostics = [
    {
      id: 1,
      problem: "Hypertension",
      description: "High blood pressure",
      status: "Under Observation",
    },
    {
      id: 2,
      problem: "Type 2 Diabetes",
      description: "Elevated glucose levels",
      status: "Chronic",
    },
    {
      id: 3,
      problem: "Asthma",
      description: "Respiratory condition",
      status: "Active",
    },
  ];

  return (
    <div className="diagnostic-list-card">
      <h3>Diagnostic List</h3>
      <table className="diagnostic-table">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((item) => (
            <tr key={item.id}>
              <td className="problem-col">
                {item.problem}
              </td>
              <td>{item.description}</td>
              <td>
                <span className="status-badge">{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiagnosticList;
