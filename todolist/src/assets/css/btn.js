import { makeStyles } from "@mui/styles";

const btnStyle = makeStyles(()=>({

    "@global": {
       
        ".btn-primary-light": {
            backgroundColor: "var(--primary-light)",
            color:"#fff",
            border:"none",
            cursor:"pointer"
        },
        ".btn-primary-delete": {
            backgroundColor:"var(--secondary-dark)",
            color:"#fff",
            border:"none",
            cursor:"pointer"
        },
        ".btn-size":{
            minWidth: "20px",
            minHeight: "20px",
           
        },
        ".btn-circle":{
            borderRadius:"50%"
        },
        ".btn-white": {
            backgroundColor:"var(--primary-contrastText)",
            color:'#000'
        },
        ".border-primary-text": {
            border:"1px solid var(--primary-light)",
            color:"#000"
        }
    }
}));

export default btnStyle;