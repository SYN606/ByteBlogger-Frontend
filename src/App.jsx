import React from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Base, ScrollToTop } from './components';
import { Blogs, Homepage, NotFoundPage, SignIn, SignUp } from './pages';

function App() {
  return (
    <HeadProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />
            <Route path="sign_in" element={<SignIn />} />
            <Route path="sign_up" element={<SignUp />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeadProvider>
  );
}

export default App;
