import Header from "../components/Header";
import InteractionForm from "../components/InteractionForm";
import AIChat from "../components/AIChat";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="dashboard">

        <div className="left-panel">
          <InteractionForm />
        </div>

        <div className="right-panel">
          <AIChat />
        </div>

      </div>

    </>
  );
}

export default Dashboard;