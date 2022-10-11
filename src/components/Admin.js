import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddStudent from './AddStudent';

class Admin extends Component {
 
   render() {    
     return (
        <div>
          <AppBar position="static" color="default">
             <Toolbar>
                <Typography variant="h6" color="inherit">
                   Administrative Functions
                </Typography>
             </Toolbar>
          </AppBar>
          <div align="left" >
        <AddStudent />
          </div>
       </div>
     )
   }
 }
 export default Admin;
 
    