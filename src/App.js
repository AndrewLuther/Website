import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import BioPage from './pages/BioPage';
import CodePage from './pages/CodePage';
import MusicPage from './pages/MusicPage';

function App() {
  return (
    <div className='app'>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<BioPage/>}/>
        <Route path='/Code' element={<CodePage/>}/>
        <Route path='/Music' element={<MusicPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
