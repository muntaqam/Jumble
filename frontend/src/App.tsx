// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";

// toast
import { Toaster } from "./components/ui/toaster";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* main layout stuff */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            {/* for page not found */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
      {/* need for toast notification */}
      <Toaster />
    </>
  );
};

export default App;
