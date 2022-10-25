import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import User from './user/pages/User';


function App() {
  return (
    <BrowserRouter>
        <MainNavigation/>
      <main>
        <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/places/new' element={<NewPlace/>} />
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>

      </main>
      
    </BrowserRouter>
    
  );
}

export default App;
