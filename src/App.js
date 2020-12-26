import './css/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
// import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage/StudentPage';
// import GuestPage from './components/GuestPage/GuestPage';

function App() {
  return (
    <Router>
      <StudentPage /> 
    </Router> 
  );
}

export default App;
