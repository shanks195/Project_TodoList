import * as React from 'react';
import clsx from 'clsx';
import NavigateStyle from './style';
import Item from './Item';
const Navigate = ()=> {
    const ClassStyle = NavigateStyle();
    return <div className={clsx(ClassStyle.root)}>
         <div class="sidebar-menu">
      <ul>
     
       
        <Item classactive="active" classname="fa fa-dashboard" href="/" name="Dashboard"/>
        
        <Item classname="fa fa-rss" href="/user" name="List User"/>
      </ul>
    </div>
    </div>

}


export default Navigate;
