import { makeStyles } from "@mui/styles";

const colorStyle = makeStyles(()=>({

    "@global": {
        ".bg-secondary-light": {
            backgroundColor:"var(--secondary-light)",
            color:'white'
        },
        ".bg-primary-dark": {
            backgroundColor:"var(--primary-dark)",
            color:'white',
        },
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
        },
        ".bg-primary-red": {
            backgroundColor:"var(--secondary-dark)",
            color:"white"
        }
    }
}));

export default colorStyle;