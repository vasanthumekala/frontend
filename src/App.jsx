import NavBar from "./components/NavBar";
import PatientsList from "./components/PatientsList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import HealthCards from "./components/HealthCards";
import DiagnosticList from "./components/DiagnosticList";
import ProfileCard from "./components/ProfileCard";
import LabResults from "./components/LabResults";
import "./App.css";

function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="dashboard">
        <aside className="sidebar sidebar-left">
          <PatientsList />
        </aside>

        <main className="main-content">
          <DiagnosisHistory />
          <HealthCards />
          <DiagnosticList />
        </main>

        <aside className="sidebar sidebar-right">
          <ProfileCard />
          <LabResults />
        </aside>
      </div>
    </div>
  );
}

export default App;
