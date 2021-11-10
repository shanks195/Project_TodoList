import { makeStyles } from "@mui/styles";

const SearchStyle = makeStyles(()=> ({
    root:{
      "& .wrapper": {
        marginBottom:"10px"
      },
      "& .search-box": {
        overflow: "hidden"
      },
      "& .input": {
        minWidth:'200px',
        height: "50px",
        border:"none",
        display:"inline-block",
        paddingLeft:10
      },
      "& .input:focus": {
        outline: "none"
      },
      "& .btn" : {
        minWidth:"50px",
        display: "inline-block",
        backgroundColor: "var(--primary-main)",
        justifyContent: "center",
        textAlign: "center",
        color:"white",
        paddingTop:"15px",
        height:"50px",
        boxSizing: "border-box"

      },
     
          
          
    }
}));
export default SearchStyle;