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


import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";
import AppControl from '../views/components/layout/AppControl';
function App() {
  const ClassStyle=AppStyle();
  


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        
        <StyledEngineProvider injectFirst>
            <GlobalCss/>
        </StyledEngineProvider>
        <Grid className={clsx(ClassStyle.root)}>
           <h2>DashBoard</h2>
            <AppControl/>     
           
          <Routes path="/" element={<Dashboard/>}>
            <Route path="/user" element={<PageUser/>}/>
            
          </Routes>
       
        </Grid>
   
   
      </ThemeProvider>
    </BrowserRouter>
    
   
   
  );
}

export default App;
