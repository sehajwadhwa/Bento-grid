import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import ManageAccounts from "./components/ManageAccounts/ManageAccounts";
import MaintainSchedule from "./components/MaintainSchedule/MaintainSchedule";
import SchduleSocialMedia from "./components/ScheduleSocialMedia/SchduleSocialMedia";
import GrowFollowers from "./components/GrowFollowers/GrowFollowers";
function App() {
  return (
    <div className="App">
      <Banner />
      <ManageAccounts />
      <MaintainSchedule />
      <SchduleSocialMedia />
      <GrowFollowers />
    </div>
  );
}

export default App;
