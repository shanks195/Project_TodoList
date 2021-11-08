import * as React from 'react';
import clsx from 'clsx';
import TableUser from './TableUser/index';
import PageUserStyle from './style';
const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    return(
        <div className={clsx(ClassStyle.root)}>
            <TableUser/>
        </div>
    )
}
export  default PageUser;