import * as React from 'react';
import clsx from 'clsx';
import TableUser from './TableUser/index';
import PageUserStyle from './style';
import Grid from '@mui/material/Grid';
import Search from '../../components/layout/search';
import Sortby from '../../components/layout/Sortby';
import { ButtonBase } from '../../components/layout/ButtonBase';
const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    
    return(
        <div className={clsx(ClassStyle.root)}>
            <h1>LIST USER</h1>
            <Grid>
                <Grid  container spacing={2} >
                    <Grid xs={2.5}>
                        <Search/>
                    </Grid>
                    <Grid xs={3}>
                        <Sortby/>
                    </Grid>
                    <Grid xs={3}>
                        <ButtonBase/>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <TableUser/>
                </Grid>
            </Grid>
           
            
        </div>
    )
}
export  default PageUser;