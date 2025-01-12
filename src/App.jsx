import React from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Base from './components/Base';
import Homepage from './pages/Homepage';
import Error_page from './pages/Error_page';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <HeadProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route path="/" element={<Homepage />} />
              <Route path='sign_in/' element={<SignIn />} />

              {/* Error page */}
              <Route path='*' element={<Error_page />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HeadProvider>
    </>
  );
}

export default App;
