import {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './components/Extras/Menu';

  const Home= lazy(()=> import('./components/Extras/Home'))
  const SobreNosotros= lazy(()=> import('./components/Extras/SobreNosotros'))
  const Tareas= lazy(()=> import('./components/Extras/Tareas'))

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Suspense fallback={<p>LOADING......</p>} >
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SobreNosotros" element={< SobreNosotros/>} />
        <Route path="/Tareas" element={<Tareas />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
//FINALIZA TODO