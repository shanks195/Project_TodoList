import * as React from 'react';
import NotFoundStyle from './style';
import clsx from 'clsx';

const NotFound = ()=> {
    const ClassStyle =NotFoundStyle();
    return (
      <div className={clsx(ClassStyle.root)}>Not Found 404</div>
    )

}
export default NotFound;