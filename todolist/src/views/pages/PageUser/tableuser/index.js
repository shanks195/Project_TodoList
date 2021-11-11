import * as React from 'react';
import tableUserStyle from './style';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
const TableUser = (props) => {
    const ClassStyle = tableUserStyle();
    // const {index} =props;

    const dataTables =  [
        {
          "id": uuidv4(),
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
          "id": uuidv4(),
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
            "id": uuidv4(),
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
            "id": uuidv4(),
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
    

      const elmTable = dataTables.map((item,index) => 
                <tbody key={index}>  
                               {(()=>{
                            let elmRule =
                            <tr  className='w-100 bg-primary-dark'>
                                       <td>{index}</td>
                                    <td>
                                        <div class="user">
                                            <img src={item.avatar} alt="" />
                                            <span>{item.username}</span>
                                        </div>
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.phonenumber}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthDay}</td>
                                    <td>{item.sex}</td>
                                    <td>Poster</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>
                                        <button className="btn-primary-light btn-size mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button className='btn-primary-delete btn-size'><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td> 
                            </tr>
                             
                           
                            if(item.role ===1) {
                                elmRule = 
                                <tr className='w-100 bg-primary-red' >
                                    <td>{index}</td>
                                    <td>
                                        <div class="user">
                                            <img src={item.avatar} alt="" />
                                            <span>{item.username}</span>
                                        </div>
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.phonenumber}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthDay}</td>
                                    <td>{item.sex}</td>
                                    <td>Admin</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>
                                        <button className="btn-primary-light btn-size mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button className='btn-primary-delete btn-size'><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td> 
                                </tr>
                            }else if(item.role ===2) {
                                elmRule = <tr  className="w-100 bg-secondary-light">
                                <td>{index}</td>
                                <td>
                                    <div class="user">
                                        <img src={item.avatar} alt="" />
                                        <span>{item.username}</span>
                                    </div>
                                </td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.phonenumber}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.birthDay}</td>
                                <td>{item.sex}</td>
                                <td>Customer</td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                                <td>
                                    <button className="btn-primary-light btn-size mr-2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                    <button className='btn-primary-delete btn-size'><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                </td> 
                            </tr>
                            }
                            return elmRule;

                        })()}
                </tbody>
             
                       
              
    );
    return ( 
    <Grid class={clsx(ClassStyle.root)}>
         <table  className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>email</th>
                        <th>password</th>
                        <th>phonenumber</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>birthDay</th>
                        <th>sex</th>
                        <th>role</th>
                        <th>created At</th>
                        <th>updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {elmTable}
        </table>
    </Grid>
   
    )
}
export default TableUser;