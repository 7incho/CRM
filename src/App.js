import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Citas,
  Stacked,
  Piramidal,
  Clientes,
  Lineal,
  Area,
  Barra,
  Torta,
  Financial,
  ColorMapping,
} from "./pages";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { supabase } from "./supabase/client";

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    // if (currentThemeColor && currentThemeMode) {
    //   setCurrentColor(currentThemeColor);
    //   setCurrentMode(currentThemeMode);
    // }
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Configuraciones" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              onClick={() => setThemeSettings(true)}
              style={{ backgroundColor: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />

              {/* Páginas */}
              <Route path="/citas" element={<Citas />} />
              <Route path="/clientes" element={<Clientes />} />

              {/* Charts */}
              <Route path="/lineal" element={<Lineal />} />
              <Route path="/area" element={<Area />} />
              <Route path="/barra" element={<Barra />} />
              <Route path="/torta" element={<Torta />} />
              <Route path="/financiero" element={<Financial />} />
              <Route path="/mapa-de-colores" element={<ColorMapping />} />
              <Route path="/piramidal" element={<Piramidal />} />
              <Route path="/barras-apiladas" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
