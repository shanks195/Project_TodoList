import * as React from 'react';
import tableUserStyle from './style';
import clsx from 'clsx';
const TableUser = () => {
    const ClassStyle = tableUserStyle();
    const dataTables =  [
        {
          "id": 1,
          "username": "admin",
          "email": "robocon87@gmail.com",
          "password": "T@an1995",
          "avatar": "",
          "coverImg": "",
          "phonenumber": "0902438743",
          "friendIds": [],
          "followingIds": [],
          "follwerIds": [],
          "detailList": [],
          "firstName": "To",
          "lastName": "Toan",
          "birthDay": "11/12/1995",
          "sex": "Male",
          "createdAt": "2021-10-30 03:04:15",
          "updatedAt": "2021-10-30 03:04:15",
       
        },
        {
          "id": 2,
          "username": "customer",
          "email": "robocon87@gmail.com",
          "password": "T@an1995",
          "avatar": "",
          "coverImg": "",
          "phonenumber": "0902438743",
          "friendIds": [],
          "followingIds": [],
          "follwerIds": [],
          "detailList": [],
          "firstName": "To",
          "lastName": "Toan",
          "birthDay": "11/12/1995",
          "sex": "Male",
          "createdAt": "2021-10-30 03:04:15",
          "updatedAt": "2021-10-30 03:04:15",
        
        }
      ];
      const elmTable = dataTables.map((item,index) => 
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.birthDay}</td>
                    <td>{item.sex}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>  
                    <td>
                        <button className="btn-primary-light btn-size mr-2"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                        <button className='btn-primary-delete btn-size'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    </td>  
                </tr>
    );
    return ( 
    <div class={clsx(ClassStyle.root)}>
         <table  className='content-table'>
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
                        <th>created At</th>
                        <th>updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elmTable}
                </tbody>
        </table>
    </div>
   
    )
}
export default TableUser;