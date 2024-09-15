import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import ManageAccounts from './components/ManageAccounts/ManageAccounts';
import MaintainSchedule from './components/MaintainSchedule/MaintainSchedule';
function App() {
  return (
    <div className="App">
      <Banner />
      <ManageAccounts />
      <MaintainSchedule />
    </div>
  );
}

export default App;
