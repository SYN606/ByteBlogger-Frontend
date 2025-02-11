import React from 'react';
import { HeadProvider } from 'react-head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Base, ScrollToTop, ProtectedRoute, UserProfile, ChangePassword } from './components';
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

            {/* protected routes */}

            <Route path="profile" element={
              // <ProtectedRoute>
              <UserProfile />
              // </ProtectedRoute>
            }
            />
            <Route path="change_your_password" element={
              // <ProtectedRoute>
              <ChangePassword />
              // </ProtectedRoute>
            }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeadProvider>
  );
}

export default App;
