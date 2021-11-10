import * as React from 'react';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import ButtonCoStyle from './style';
const ButtonCo = (props) => {
    const   {name} =props;
    const classStyle = ButtonCoStyle();

    return ( <Button className={clsx(classStyle.root),"btn-primary-light btn-size-primary"}>Add {props.name}</Button>)
}
export default ButtonCo;