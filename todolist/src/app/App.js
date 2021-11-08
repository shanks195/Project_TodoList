import './style';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import theme from './theme';
import AppStyle from './style';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import GlobalCss from '../views/includes/GlobalCss';
import clsx from 'clsx';
import Dashboard from '../views/pages/Dashboard';
import PageUser from '../views/pages/PageUser';
import NotFound from '../views/pages/Notfound';
import Navigate from './Navagate';
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const ClassStyle=AppStyle();
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme} >
        
          <StyledEngineProvider injectFirst>
              <GlobalCss/>
          </StyledEngineProvider>
          <Grid className={clsx(ClassStyle.root)}>
              <input type="checkbox" name="" id="nav-toggle"/>
              <div className="sidebar">
                <div className="sidebar-brand">
                  <a href="/">
                      <h2>
                        <span className="lab la-accusoft"></span>
                        <span>BLOG ADMIN</span>
                      </h2>
                  </a>
                </div>
                <Navigate/>
                <div class="main-content">
                    <header>
                      <h1>
                          <label for="nav-toggle">
                              <span class="las la-bars"></span>
                          </label>
                       
                      </h1>
                    </header>
                    <main>
                        <Routes path="/" element={<Dashboard/>}>
                          <Route path="/user" element={<PageUser/>}/>      
                        </Routes>
                    </main>
                </div>
              </div>
              
          </Grid>
          
       </ThemeProvider>
    </BrowserRouter>
    
   
   
  );
}

export default App;
