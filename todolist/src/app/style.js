import {makeStyles} from '@mui/styles';
const AppStyle = makeStyles(() => ({
    root: {
      "& .sidebar": {
        transition:' width 300ms',
        zIndex: 100,
        width: '345px',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        backgroundColor: 'var(--primary-main)',
      },
      
      "& .sidebar-brand a": {
        textDecoration: 'none',
      },
      '& .sidebar-brand h2 ': {
            height: '90px',
            padding:'1rem 0rem 1rem 2rem',
            color:'var(--primary-contrastText)',
      },
      '& .sidebar-brand span': {
        display: 'inline-block',
        paddingRight: '1rem'
      },
            
      '& .main-content': {
        transition: 'margin-left 300ms',
        marginLeft: '345px'
      },

      '& header': {
        backgroundColor: 'var(--primary-contrastText)',
        display: 'flex',
        justifyContent: 'space-between',
        padding:'1rem 1.5rem',
        position: 'fixed',
        /* left: 345px; */
        width: '77%',
        boxShadow: '2px 2px 5px rgba(0,0, 0, 2)',
        top:0,
        zIndex: 100,
        transition: 'width 300ms'
      },
      '& header h2': {
        color:'#222',
      },
      '& header label span': {
        fontSize: '1.7rem',
        paddingRight: '1rem'
      },
      '& main':  {
          marginTop:'95px',
          padding:'2rem 1.5rem',
          backgroundColor: '#f1f5f9',
          minHeight: 'calc(100vh-90px)' 
        },  
      }     
      

}))

export default AppStyle;