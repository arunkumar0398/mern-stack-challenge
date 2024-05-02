import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
      </Routes>
    </Router>
  )
}

export default App
