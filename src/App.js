import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import User from './user/pages/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<User/>} />
        </Route>
        <Route path='/places'>
          <Route path='new' element={<NewPlace/>} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
