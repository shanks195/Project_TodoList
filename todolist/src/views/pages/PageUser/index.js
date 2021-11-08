import * as React from 'react';
import PageUserStyle from './style';
import clsx from 'clsx';
const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    return(
        <div className={clsx(ClassStyle.root)}>Hello page user</div>
    )
}
export  default PageUser;