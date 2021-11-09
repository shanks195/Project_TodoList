import * as React from 'react';
import clsx from 'clsx';
import TableUser from './TableUser/index';
import PageUserStyle from './style';
import Grid from '@mui/material/Grid';
import Search from '../../components/layout/search';
const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    
    return(
        <div className={clsx(ClassStyle.root)}>
            <h1>LIST USER</h1>
            
            <Grid spacing={2} xs={12} item className="container">
                <Grid xs={3}>
                    <Search/>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <TableUser/>
            </Grid>
            
        </div>
    )
}
export  default PageUser;