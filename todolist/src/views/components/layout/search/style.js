import { makeStyles } from "@mui/styles";

const SearchStyle = makeStyles(()=> ({
    root:{
        '& .wrapper' :{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          
          '& .search-box': {
            width: '450px',
            height: '100px',
            position: 'relative',
          },
          
          '& .input': {
            position: 'absolute',
            top: '20px',
            right: '50px',
            boxSizing: 'border-box',
            width: '0px',
            height: '63px',
            padding: '0 20px',
            outline: 'none',
            fontSize: '18px',
            borderRadius: '50px',
            color: '#29313a',
            border: '3px solid #62d474',
            transition: 'all 0.8s ease'
          },
          
          '& ::-webkit-input-placeholder': {
            /* Chrome/Opera/Safari */
            color: '#62d474'
          },
          '::-moz-placeholder' :{
            /* Firefox 19+ */
            color: '#62d474'
          },
          '::-ms-input-placeholder': {
            /* IE 10+ */
            color: '#62d474',
          },
          '& ::-moz-placeholder': {
            /* Firefox 18- */
            color: '#62d474'
          },
          
          '& .btn': {
            position: 'absolute',
            width: '80px',
            height: '80px',
            background: '#62d474',
            borderRadius: '50%',
            right: '45px',
            top: '10px',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: '80px',
            fontSize: '20px',
            color: '#fff',
            transition: 'all 0.8s ease',
          },
          '& .input.active': {
            width: '350px',
            right: '100px'
          },
          '&.btn.animate': {
            transform: 'rotate(-360deg)',
            right: '100px'
          }
          
          
    }
}));
export default SearchStyle;