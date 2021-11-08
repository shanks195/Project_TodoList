import { makeStyles } from "@mui/styles";

const colorStyle = makeStyles(()=>({

    "@global": {
       
        ".bg-primary-light": {
            backgroundColor: "var(--primary-light)",
            color:"#fff"
        },
        ".bg-white": {
            backgroundColor:"var(--primary-contrastText)",
            color:'#000'
        },
        ".border-primary-text": {
            border:"1px solid var(--primary-light)",
            color:"#000"
        }
    }
}));

export default colorStyle;