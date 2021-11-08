import * as React from 'react';
import AppControlStyle from './style';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
const AppControl = ()=> {
    const ClassStyle = AppControlStyle();
    return(
       <div>
            <Grid container spacing={2} className={clsx(ClassStyle.root)}>
                        <Grid item xs={3} >
                            <List
                            className="bg-primary-light" 
                            sx={{ 
                                width:'100%', 
                                maxWidth: '300px',
                                minHeight:'50px',
                                textAlign:'center' ,
                                justifyContent:'center',
                                alignItems: 'center',
                                display:'flex',
                                textTransform:'uppercase'
                                }}
                            >
                                User
                            </List>
                            <List
                            className="bg-white border-primary-text" 
                            sx={{ 
                                width:'100%', 
                                maxWidth: '297px',
                                minHeight:'150px',
                                textAlign:'center' ,
                                justifyContent:'center',
                                alignItems: 'center',
                                display:'flex',
                                textTransform:'uppercase'
                            }}
                            >
                              <a href="/user">
                                    <Grid className="list">
                                            Danh sách User
                                    </Grid>
                              </a>
                              
                            </List>
                            
                        </Grid>
                        
        </Grid>
        <hr/>
       </div>
       
       
    )
}
export  default AppControl;