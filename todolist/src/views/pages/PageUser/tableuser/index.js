import * as React from 'react';
import tableUserStyle from './style';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';

const TableUser = (props) => {
    const {index,items} =props;
    const ClassStyle = tableUserStyle();
    
    


      const elmTable = items.map((item,index) => 
                <tbody key={index} item={item} >  
                               {(()=>{
                            let elmRule =
                            <tr  className='w-100 bg-primary-dark'>
                                       <td>{index }</td>
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