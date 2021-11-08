import * as React from 'react';
import clsx from 'clsx';
import tableuser from './tableuser';
import PageUserStyle from './style';
const PageUser = ()=> {
    const ClassStyle = PageUserStyle();
    return(
        <div className={clsx(ClassStyle.root)}>
            <tableuser/>
        </div>
    )
}
export  default PageUser;