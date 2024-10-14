import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeContext";
import AppLayout from "./layouts/appLayout";
import JobListing from "./Pages/jobListing";
import JobPage from "./Pages/jobs";
import LandingPages from "./Pages/landingPages";
import MyJobs from "./Pages/myJobs";
import OnBoarding from "./Pages/onBoarding";
import PostJobs from "./Pages/postJobs";
import SavedJobs from "./Pages/savedJobs";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPages />,
      },
      {
        path: "/onboard",
        element: <OnBoarding />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobPage />,
      },
      {
        path: "/savedjobs",
        element: <SavedJobs />,
      },
      {
        path: "/jobslisting",
        element: <JobListing />,
      },
      {
        path: "/postjobs",
        element: <PostJobs />,
      },
    ],
  },
]);

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const toggleThemeMode = () => {
    themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, toggleThemeMode }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

