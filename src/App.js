import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dragons from './components/dragons';
import Myprofile from './components/myprofile';
import 'bootstrap/dist/css/bootstrap.min.css';
import RocketExihbit from './components/rockets/Rockets';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketExihbit />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
