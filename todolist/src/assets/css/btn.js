import { makeStyles } from "@mui/styles";

const btnStyle = makeStyles(()=>({

    "@global": {
       ".btn-size-primary":{
        minWidth:'500px!important',
        minHeight:'50px!important',
        backgroundColor: "#4b83c8!important",
        color:"#fff!important",
        border:"none!important",
        cursor:"pointer!important"
       },
        ".btn-primary-light": {
            backgroundColor: "var(--primary-light)!important",
            color:"#fff!important",
            border:"none!important",
            cursor:"pointer!important"
        },
        ".btn-primary-delete": {
            backgroundColor:"var(--secondary-dark)!important",
            color:"#fff!important",
            border:"none!important",
            cursor:"pointer!important"
        },
        ".btn-size":{
            minWidth: "20px",
            minHeight: "20px",
           
        },
        ".btn-circle":{
            borderRadius:"50%"
        },
        ".cancel-btn":{
            backgroundColor:'red!important',
            color:'white!important'
        },
        ".btn-white": {
            backgroundColor:"var(--primary-contrastText)",
            color:'#000'
        },
        ".border-primary-text": {
            border:"1px solid var(--primary-light)",
            color:"#000"
        },
        ".cusor":{
            cursor:"pointer"
        }
    }
}));

export default btnStyle;