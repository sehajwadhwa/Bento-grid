import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import ManageAccounts from './components/ManageAccounts/ManageAccounts';
import MaintainSchedule from './components/MaintainSchedule/MaintainSchedule';
import SchduleSocialMedia from './components/ScheduleSocialMedia/SchduleSocialMedia';
function App() {
  return (
    <div className="App">
      <Banner />
      <ManageAccounts />
      <MaintainSchedule />
      <SchduleSocialMedia />
    </div>
  );
}

export default App;
