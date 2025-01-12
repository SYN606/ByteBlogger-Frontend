import React from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <HeadProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HeadProvider>
    </>
  );
}

export default App;
