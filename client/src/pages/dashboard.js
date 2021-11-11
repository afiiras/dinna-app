import Dashboard from "../components/Dashboard/user/Dashboard";
import Sidebar from "../components/Dashboard/user/Sidebar";
import "../scss/styles.scss";
function Dashpage() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <Dashboard />
      </div>
      <div className="shapes__one"></div>
      <div className="shapes__two"></div>
      <div className="shapes__three"></div>
    </>
  );
}

export default Dashpage;
