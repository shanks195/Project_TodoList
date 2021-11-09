import { makeStyles } from "@mui/styles";

const tableUserStyle = makeStyles(
  ()=> ({
    root:   {

      '& .table':{
        width: '100%',
        borderCollapse: 'collapse'
      },

'& .table td,.table th':{
  padding:'12px 15px',
  border:'1px solid #ddd',
  textAlign: 'center',
  fontSize:'16px'
},
'& .table th':{
	backgroundColor: 'darkblue',
  fontSize:'14px',
  textTransform:'uppercase',
	color:'#ffffff',
},

'& .table tbody tr:nth-child(even)':{
	backgroundColor: '#f5f5f5',
},
"& .user img": {
  width:'20px',
  height:'20px',
  borderRadius:"50%"
},
/*responsive*/

'@media(max-width: 500px)':{
	'& .table thead': {
		display: 'none'
	},

	'& .table, .table tbody, .table tr, .table td':{
		display: 'block',
		width: '100%'
	},
	'& .table tr':{
		marginBottom:'15px'
	},
	'&.table td':{
		textAlign: 'right',
		paddingLeft: '50%',
		textAlign: 'right',
		position: 'relative',
	},
	'& .table td::before':{
		content: 'attr(data-label)',
		position: 'absolute',
		left:0,
		width: '50%',
		paddingLeft:'15px',
		fontSize:'15px',
		fontWeight: 'bold',
		textAlign: 'left'
  }
}
    }
  }
));
export default tableUserStyle;