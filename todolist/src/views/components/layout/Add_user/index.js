import * as React from "react";
import AddUserStyle from "./style";
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  minWidth: '1300px',
  height:'70%',
  border:'1px solid white',
  borderRadius: '4px',
  bgcolor: 'background.paper',

  p: 2,
  px: 4,
  pb: 3,
};
const Add_user = ()=> {
    const classStyle = AddUserStyle();
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <div className={clsx(classStyle.root)}>
            <button type="button" className="text-upercase btn-primary-light btn-size-primary" onClick={handleOpen}>
                Add User
            </button>
           <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid xs={8} > <h2 className="text-normal-title">Form Add User</h2></Grid>
                        <Grid xs={4} ><i class="fa fa-times float-right cusor" aria-hidden="true" onClick={handleClose}></i> </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={3}>
                            <FormLabel component="legend"  className="text-normal">1. User Name</FormLabel>
                            <TextField
                                label="User Name"
                                type="text"
                                variant="filled"
                                
                                />
                        </Grid>
                        <Grid xs={3}>
                            <FormLabel component="legend"  className="text-normal">2. Email</FormLabel>
                            <TextField
                                label="Email"
                                type="mail"
                                variant="filled"
                                
                                />
                        </Grid>
                        <Grid xs={3}> 
                            <FormLabel component="legend"  className="text-normal">3. Password</FormLabel>
                            <TextField
                                label="Password"
                                type="password"
                                variant="filled"
                                />
                        </Grid>
                        <Grid xs={3}>
                            <FormLabel component="legend" className="text-normal">4. Current Password</FormLabel>
                            <TextField
                                id="filled-password-input"
                                label="Comfirm Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                />
                        </Grid>
                        
                    </Grid>
                    <Grid container className="pt-10">
                        <Grid xs={3}> 
                            <FormLabel component="legend"  className="text-normal">5. Phone Number</FormLabel>
                                <TextField
                                        label="Phone Number"
                                        type="number"
                                        variant="filled"
                                        />
                        </Grid>
                        <Grid xs={3}> 
                                <FormLabel component="legend"  className="text-normal">6. First Name</FormLabel>
                                <TextField
                                        type="text"
                                        variant="filled"
                                        label="First Name"
                                        />
                        </Grid>
                        <Grid xs={3}> 
                        <FormLabel component="legend"  className="text-normal">7. Lat Name</FormLabel>
                                <TextField
          
                                        label="Lat Name"
                                        type="text"
                                        variant="filled"
                                        />
                        </Grid>
                        <Grid xs={3}> 
                                <FormLabel component="legend"  className="text-normal">8. BirthDay</FormLabel>
                                <TextField
                                        type="date"
                                       placeholder="BirthDay"
                                        />
                        </Grid>
                    </Grid>
                    <Grid container  className="pt-10">
                        <Grid xs={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend"  className="text-normal">9. Gender</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                     
                        </Grid>
                        <Grid>
                                <FormLabel component="legend" className="text-normal">10. Role</FormLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}

                                    label="Role"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Admin</MenuItem>
                                    <MenuItem value={2}>Customer</MenuItem>
                                    <MenuItem value={3}>Poster</MenuItem>
                                </Select>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className="form-add-group-action">
                            <Grid item >
                                <Box component="div" className="add-cancel-box">
                                <Button onClick={handleClose} variant="contained" className="cancel-btn">
                                    Hủy
                                </Button>
                                </Box>
                            </Grid>
                            <Grid item >
                                <Box component="div" className="add-save-box">
                                    <Button variant="contained" className="save-btn">
                                        Lưu
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                       

                </Box>
            </StyledModal>
    </div>
}

export default Add_user;