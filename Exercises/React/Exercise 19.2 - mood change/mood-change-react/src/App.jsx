import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { useMoodChangeContext } from "./context/MoodChange";

function App() {
  const { mood } = useMoodChangeContext();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        }
      ]
    }
  ]);

  return (
    <div className={`hero-container ${mood === 'light' ? '' : 'dark'}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;