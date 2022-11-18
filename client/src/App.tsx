import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/*' element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
