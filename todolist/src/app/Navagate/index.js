import * as React from 'react';
import clsx from 'clsx';
import NavigateStyle from './style';
import {NavLink} from 'react-router-dom';
//import Item from './Item';
const Navigate = ()=> {
    const ClassStyle = NavigateStyle();
    return <div className={clsx(ClassStyle.root)}>
         <div class="sidebar-menu">
      <ul>
          <li>
                <NavLink
                exact 
                activeClassName="active"
                to="/"
                >
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>

                </NavLink>
            </li> 
            
          <li>
                <NavLink
                exact 
                activeClassName="active"
                to="/user"
                >
                    <i className="fa fa-rss"></i>
                    <span>User List</span>

                </NavLink>
            </li>       
        </ul>
    </div>
    </div>

}


export default Navigate;
