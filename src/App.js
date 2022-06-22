import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dragons from './components/dragons';
import Myprofile from './components/myprofile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
