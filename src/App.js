import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dragons from './components/dragons';
import 'bootstrap/dist/css/bootstrap.min.css';
import RocketExihbit from './components/rockets/Rockets';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showRockets } from './redux/rockets/action-makers';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRockets());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/" element={<RocketExihbit />} />
      </Routes>
    </>
  );
}

export default App;
