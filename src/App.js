import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blank from './pages/Blank';

function App() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <Routes>
      <Route exact path='/' element={<Blank />} />
    </Routes>
  );
}

export default App;
