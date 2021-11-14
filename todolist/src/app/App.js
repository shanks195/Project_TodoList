import React,{useState} from 'react';
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
import './style';
function App(props) {
  const  items=  [
    {
      "id": "uuidv4()",
      "username": "admin",
      "email": "robocon87@gmail.com",
      "password": "T@an1995",
      "avatar": "https://source.unsplash.com/random",
      "phonenumber": "0902438743",
      "firstName": "To",
      "lastName": "Toan",
      "birthDay": "11/12/1995",
      "sex": "Male",
      "role":1,
      "createdAt": "2021-10-30 03:04:15",
      "updatedAt": "2021-10-30 03:04:15",
   
    },
    {
      "id": "uuidv4()",
      "username": "customer 1",
      "email": "robocon87@gmail.com",
      "password": "T@an1995",
      "avatar": "https://source.unsplash.com/random",
      "phonenumber": "0902438743",
      "firstName": "To",
      "lastName": "Toan",
      "birthDay": "11/12/1995",
      "sex": "Male",
      "role":2,
      "createdAt": "2021-10-30 03:04:15",
      "updatedAt": "2021-10-30 03:04:15",
    
    },
    {
        "id": "uuidv4()",
        "username": "poster",
        "email": "robocon87@gmail.com",
        "password": "T@an1995",
        "avatar": "https://source.unsplash.com/random",
        "phonenumber": "0902438743",
        "firstName": "To",
        "lastName": "Toan",
        "birthDay": "11/12/1995",
        "sex": "Male",
        "role":3,
        "createdAt": "2021-10-30 03:04:15",
        "updatedAt": "2021-10-30 03:04:15",
      
      },
      {
        "id": "uuidv4()",
        "username": "customer 2",
        "email": "robocon87@gmail.com",
        "password": "T@an1995",
        "avatar": "https://source.unsplash.com/random",
        "phonenumber": "0902438743",
        "firstName": "To",
        "lastName": "Toan",
        "birthDay": "11/12/1995",
        "sex": "Male",
        "role":2,
        "createdAt": "2021-10-30 03:04:15",
        "updatedAt": "2021-10-30 03:04:15",
      
      }
  ];
  const [strSearch,setStrSearch] = useState(" ");
  const ClassStyle=AppStyle();
  const handleSearch= (value)=> {
    setStrSearch(value);
    console.log(setStrSearch);
  }
   
    // let elmForm = null;
    // if(search.length > 0){
    //   itemsOrigin.forEach((item) => {
    //     if(item.name.toLowerCase().indexOf(search) !== -1) {
    //       items.push(item);
    //     }
    // });
    // }else {
    //   items=itemsOrigin
    // }
  // const search =strSearch;
 console.log(items);
  console.log('strSearch:',strSearch);

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
                    <Grid spacing={2} className="main">
                        <Routes path="/" element={<Dashboard/>}>
                          <Route path="/user"
                          element={
                          <PageUser
                            items={items}
                            onClickSearchGo={handleSearch}
                          />
                        }
                          />      
                        </Routes>
                    </Grid>
                </div>
              </div>
              
          </Grid>
          
       </ThemeProvider>
    </BrowserRouter>
    
   
   
  );
}

export default App;
