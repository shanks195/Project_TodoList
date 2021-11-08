import { makeStyles } from "@mui/styles";
const  AppControlStyle = makeStyles(()=>({
    root: {
        "& .list": {
            padding:'50px',
            boxSizing: 'border-box',
            border:'1px solid var(--primary-light-white)',
            borderRadius: 15
        },
        "& .list:click": {
            backgroundColor: 'var(--secondary-light)'
        },
        "& .list:hover": {
            cursor: "pointer"
        }
    }

}));
export default AppControlStyle;