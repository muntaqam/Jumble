// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing from "./pages/Landing";
import Error from "./pages/Error";

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
            {/* for page not found */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
