import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Error from "./components/Error_Page/Error";
import Resturant_Menu from "./components/Resturant_Menu/Resturant_Menu";
import Instamart from "./components/Instamart/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { Suspense } from "react";

export const AppLayout = () => {
  const [user, set_user] = useState({
    name: "Har",
    email: "harsh3107",
  });
  return (
    <>
      <Provider store={Store}>
        <UserContext.Provider value={{ user: user }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/resturant/:id",
        element: <Resturant_Menu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={AppRouter} />);
