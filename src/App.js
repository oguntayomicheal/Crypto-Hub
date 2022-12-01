import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import Details from './components/More';
import './App.css';

import Det from './components/coinDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Det" element={<Det />} />
      </Routes>
    </>
  );
}

export default App;
