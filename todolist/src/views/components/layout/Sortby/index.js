import * as React from "react";
import clsx from "clsx";
import sortbyStyle from "./style"; 
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Sortby = ()=> {
    const [sorby, setSorby] = React.useState('');

    const handleChange = (event) => {
        setSorby(event.target.value);
    };
  
    const classes= sortbyStyle();
    return (
        <Box sx={{ maxWidth: 100,maxheight:"50px!important" }} className={clsx(classes.root,"box-sort-by")}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sorby</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorby}
          label="Sorby"
          onChange={handleChange}
        >
          <MenuItem value={10}>A -Z</MenuItem>
          <MenuItem value={20}>Z-A</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    )
}
export default Sortby;