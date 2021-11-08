import { makeStyles } from "@mui/styles";

const variableStyle = makeStyles((theme ) => ({
    "@global": {
        ":root": {
       
            "--primary-light":"#757ce8",
            "--primary-main":"#3f50b5",
            "--primary-dark": "#002884",
            "--primary-contrastText": "#fff",
            "--secondary-light":"#ff7961",
            "--secondary-main":"#f44336",
            "--secondary-dark": "#ba000d",
            "--secondary-constrastext":"#000",
            "--primary-light-white":"#b8bede",
            

            
        }
    }             
 })



)
export default variableStyle;