import {makeStyles} from '@mui/styles';
const NavigateStyle = makeStyles(() => ({
    root: {
      
'& .sidebar-menu li': {
    width: '100%',
    marginBottom: '1.7rem',
   
  },
  "& .sidebar-menu a": {
    paddingLeft:'1rem',
    display: 'block',
    color:'#fff',
    fontSize: '1.1rem',
  },
  "& .sidebar-menu a i:first-child": {
    fontSize: '1.5rem',
    paddingRight: '1rem',
  },
  '& .sidebar-menu a.active': {
    backgroundColor: 'white',
    paddingTop:'1rem',
    paddingBottom: '1rem',
    color:'var(--main-color)',
    borderRadius: '30px 0px 0px 30px'
  }
     
    }

}))

export default NavigateStyle;