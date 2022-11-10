import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import   { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Citas, Stacked, Piramidal, Clientes, Lineal, Area, Barra, Torta, Financial,  ColorMapping} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return(
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'} }>
          <TooltipComponent content="Configuraciones" position="Top">
            <button type="buttton" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" onClick={() => setThemeSettings(true)} style={{ backgroundColor: 'blue', borderRadius: '50%' }}>
                <FiSettings/>
              </button>
          </TooltipComponent>
        </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar/>
            </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar/>
              </div>
            )
          }
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
          
          <div>
          {themeSettings && (<ThemeSettings />)}

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce/>} />
              <Route path="/ecommerce" element={<Ecommerce/>} />

              {/* Páginas */}
              <Route path="/citas" element={<Citas/>} />
              <Route path="/clientes" element={<Clientes />} />

              {/* Charts */}
              <Route path="/lineal" element={<Lineal/>} />
              <Route path="/area" element={<Area/>} />
              <Route path="/barra" element={<Barra/>} />
              <Route path="/torta" element={<Torta/>} />
              <Route path="/financiero" element={<Financial/>} />
              <Route path="/mapa-de-colores" element={<ColorMapping/>} />
              <Route path="/piramidal" element={<Piramidal/>} />
              <Route path="/barras-apiladas" element={<Stacked/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;