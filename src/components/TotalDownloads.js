import React from 'react';
import './Dashboard.css'
import { Box,Typography,AppBar,Toolbar,Button,Grid, Card,CardContent } from '@mui/material';
import logo from '../images/fikkalogo.png';
import { NavLink } from 'react-router-dom';
import format from 'date-fns/format';

function TotalDownloads() {
  return (
    <Box className='main'>
    <Box className="Drawer">
           <img src={logo} alt="" />
          <Box className="list-element" >
            <NavLink to="/dashboard" className="list" ><Typography>Fikaa Dashboard</Typography></NavLink>          
            <NavLink  className='list'><Typography>Total Downloads</Typography></NavLink>          
          </Box>
        </Box>
  
      <Box  sx={{width:`calc(100% - 245px)`,background:'white'}}>
       <AppBar  elevation={0} sx={{width:`calc(100% - 245px)`,background:'white'}} className='appbar' >
        <Toolbar  className='appbar' >
          <Typography sx={{color:"#C9234A",marginTop:"20px",fontSize:"32px",fontWeight:"500"}} >
          Total Downloads
          </Typography>
          <NavLink to='/formTwo' > 
          <Button variant='contained' sx={{background:'#C9234A','&:hover':{backgroundColor:"#C9234A"}}} >
          
              Add Data
          </Button>
          </NavLink>  

        </Toolbar>
        <Toolbar  className='appbar' >
          <Typography sx={{color:"black",fontSize:"25px",fontWeight:"600"}} >
          Today 
          </Typography>
      
        </Toolbar>
        <Toolbar  className='appbar' >
          <Typography sx={{color:"black",marginTop:"-50px",fontSize:"15px",fontWeight:"500"}} >
          Date - {format(new Date(),'d/MM/yyyy')}
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Grid sx={{marginTop:'150px',padding:"50px"}} container spacing={5} alignItems="center" >
  <Grid  item lg={12} >
    <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}} >
    <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"30px",fontWeight:"500",textAlign:"center"}}  >
          Total Downloads
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black",textAlign:"center"}}>
          18576
          </Typography>
        </CardContent>
    </Card>
  </Grid>
  </Grid>
      </Box>        
      </Box>
  )
}

export default TotalDownloads
