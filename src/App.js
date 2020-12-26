// import logo from './logo.svg';
import './css/App.css';
// import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage/StudentPage';
import GuestPage from './components/GuestPage/GuestPage';

function App() {
  return (
    <div className="App">
      <StudentPage />
      {/* <GuestPage /> */}
    </div>
  );
}

export default App;
