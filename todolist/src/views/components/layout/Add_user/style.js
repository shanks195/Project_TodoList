import { makeStyles } from "@mui/styles";

const AddUserStyle =makeStyles(()=> ({
    root:{
        float:'Right',
       "& .cancel-btn":{
           minWidth:"200px!important",
           height:30
       }
    }
}));
export default AddUserStyle; 