import * as React from 'react';
import Grid from '@mui/material/Grid';

import DashboardStyle from './style';
import clsx from 'clsx';
import { BrowserRouter as Link, Outlet } from "react-router-dom";
const Dashboard = ()=> {
    const ClassStyle =DashboardStyle();
    return (
          <Grid className={clsx(ClassStyle.root)}>
                <Grid container spacing={2}>
                    <Grid>
                        <Outlet/>
                        <h2>DashBoard</h2>
                    </Grid>
                 
                </Grid>
          </Grid>
           
         
           
            
         
    
    )

}
export default Dashboard;