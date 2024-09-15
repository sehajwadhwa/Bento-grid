import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import ManageAccounts from './components/ManageAccounts/ManageAccounts';
function App() {
  return (
    <div className="App">
      <Banner />
      <ManageAccounts />
    </div>
  );
}

export default App;
