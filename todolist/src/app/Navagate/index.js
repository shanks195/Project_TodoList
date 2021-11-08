import * as React from 'react';
import clsx from 'clsx';
import NavigateStyle from './style';
const Navigate = ()=> {
    const ClassStyle = NavigateStyle();
    return <div className={clsx(ClassStyle.root)}>
         <div class="sidebar-menu">
      <ul>
     
        <li>
          <a href="/" class="active">
            <i class="fa fa-dashboard"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/user">
            <i class="fa fa-rss"></i>
            <span>User</span>
          </a>
        </li>
      </ul>
    </div>
    </div>

}


export default Navigate;
