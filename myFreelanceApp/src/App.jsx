import React from "react";
import "./App.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Services from "./components/services/Services.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact", // fixed typo
          element: <Contact />,
        },
        {
          path: "services",
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
