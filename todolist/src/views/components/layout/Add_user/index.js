import * as React from "react";
import AddUserStyle from "./style";
import clsx from 'clsx';
import ButtonCo from "../../base/ButtonCo";
import AddNewModelUser from "./AddNewModelUser";


const Add_user = ()=> {
    const classStyle = AddUserStyle();
    const handleOpen = () => setOpen(true);

    const [open, setOpen] = React.useState(false);
    return <div className={clsx(classStyle.root)}>
            <ButtonCo name="user" onClick={handleOpen}/>
           <AddNewModelUser />
    </div>
}

export default Add_user;