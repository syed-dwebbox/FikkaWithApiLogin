import React from 'react';
import './Dashboard.css'
import { Box,Typography,AppBar,Toolbar,Button,Grid, Card,CardContent } from '@mui/material';
import logo from '../images/fikkalogo.png';
import { NavLink } from 'react-router-dom';
import format from 'date-fns/format';

function Dashboard() {
 
  

  return (
    <Box className='main'>
  <Box className="Drawer">
         <img src={logo} alt="" />
        <Box className="list-element">
          <NavLink className='list'><Typography>Fikaa Dashboard</Typography></NavLink>          
          <NavLink to="/totaldownloads" className='list'><Typography>Total Downloads</Typography></NavLink>          
        </Box>
      </Box>

    <Box  sx={{width:`calc(100% - 245px)`,background:'white'}}>
     <AppBar  elevation={0} sx={{width:`calc(100% - 245px)`,background:'white'}} className='appbar' >
      <Toolbar  className='appbar' >
        <Typography sx={{color:"#C9234A",marginTop:"20px",fontSize:"32px",fontWeight:"500"}} >
        Fikaa Dashboard
        </Typography>
        <NavLink to='/formTwo' > 
          <Button variant='contained' sx={{background:'#C9234A','&:hover':{backgroundColor:"#C9234A"}}}>
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

    <Grid sx={{marginTop:'150px',padding:"50px"}} container spacing={5}>
  <Grid  item lg={3} md={6}>
    <Card  sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
    <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          Registered Users
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          1447
          </Typography>
        </CardContent>
    </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5"  sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          Profile Completed
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          97
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          PAN Verified Users         
           </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          247
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
    <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
    <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          KYC Verified Users
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          47
          </Typography>
        </CardContent>
    </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          UCC Verified Users       
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          15
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          Users Investing          
             </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}} >
          147
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}} >
          Total Funds Collected          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          208519
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}}  >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}}   >
          Total Funds Sold        
            </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}}>
          30918
          </Typography>
        </CardContent>
  </Card>
  </Grid>
  <Grid item lg={3} md={6}>
  <Card sx={{boxShadow: "0px 14.71571px 52.86286px 0px rgba(0, 0, 0, 0.08)"}} >
  <CardContent>
          <Typography gutterBottom variant="h5" sx={{color: "#C9234A",fontSize:"18px",fontWeight:"500"}}  >
          Per User Average Investment          
          </Typography>
          <Typography variant="body2" sx={{fontSize:"20px",fontWeight:'500',color:"black"}} >
          13901.27
          </Typography>
        </CardContent>
  </Card>
  </Grid>
</Grid>
    </Box>
    </Box>
  )
}

export default Dashboard
