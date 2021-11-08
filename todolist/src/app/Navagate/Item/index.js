import * as React from 'react';

const Item = (props) => {
    const {href,classname, name,classactive}= props;
    return (
        <li>
          <a href={href} className={classactive}>
            <i className={classname}></i>
            <span>{name}</span>
          </a>
        </li>
    )
}

export default Item;