import { makeStyles } from "@mui/styles";

const tableUserStyle = makeStyles(()=> ({
    root:   {
        
'& .content-table': {
    borderCollapse: 'collapse',
    margin: '25px 0',
    fontSize: '0.9em',
    minWidth: '400px',
    borderRadius: '5px 5px 0 0',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
  },
  
  '& .content-table thead tr' :{
    backgroundColor: 'var(--primary-main)',
    color: '#ffffff',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  
  '& .content-table th':{
    textTransform: "uppercase",
    padding: '12px 15px'
  },
  '& .content-table td': {
    padding: '12px 15px'
  },
  
  '& .content-table tbody tr': {
    borderBottom: '1px solid #efefef',
    backgroundColor:'pink',
  },
  
  '& .content-table tbody tr:nth-of-type(even)': {
    backgroundColor: 'brown',
    color:'white',
  },
  
 '&  .content-table tbody tr:last-of-type': {
    borderBottom: '2px solid #009879',
  },
  
  '& .content-table': {
    borderBottom: '2px solid var(--primary-main)',
    fontWeight: 'bold',
    color: 'var(--primary-main)',
  }
  
    }
}));
export default tableUserStyle;