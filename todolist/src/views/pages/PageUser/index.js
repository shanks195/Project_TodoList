import * as React from 'react';
import clsx from 'clsx';
import TableUser from './TableUser/index';
import PageUserStyle from './style';
import Grid from '@mui/material/Grid';
import Search from '../../components/layout/search';
import Sortby from '../../components/layout/Sortby';
import Add_user from '../../components/layout/Add_user';
import TablePaginationCo from '../../components/base/TablePaginationCo';

const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    
    return(
        <div className={clsx(ClassStyle.root)}>
            <h1>LIST USER</h1>
            <Grid>
                <Grid  container  >
                    <Grid xs={3}>
                        <Search/>
                    </Grid>
                    <Grid xs={3}>
                        <Sortby/>
                    </Grid>
                    <Grid xs={5} >
                    <Add_user/>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <TableUser />
                    <TablePaginationCo/>
                </Grid>
            </Grid>
           
            
        </div>
    )
}
export  default PageUser;