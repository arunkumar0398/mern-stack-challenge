import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import LoginForm from './components/LoginForm';
import AdminView from './pages/AdminView';
import EmployeeView from './pages/EmployeeView';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/admin-view' element={<AdminView />} />
        <Route path='/employee-view' element={<EmployeeView />} />
      </Routes>
    </Router>
  )
}

export default App
