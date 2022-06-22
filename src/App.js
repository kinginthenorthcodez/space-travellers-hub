import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/pages/Missions';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
