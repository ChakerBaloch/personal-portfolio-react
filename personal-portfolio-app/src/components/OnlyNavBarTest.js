import * as React from 'react';
import chakerImage from '../Images/chaker_image.jpg';
import image from '../Images/scattered-forcefields.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';





const pages = ['About', 'Projects','Contact'];

function OnlyNavBarTest() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
  <div style={{
  
  }}>
    <AppBar position="fixed"  
    sx={{backgroundColor:'white', position:'sticky',top:'0',
    top: 0,
    left: 0,
    right: 0,
   
    backgroundColor: 'green',
     // Use camelCase for CSS properties
    // Add any other styles you want for your sticky navbar
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{flexGrow: 0}}>
          <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
            <Tooltip>
              <IconButton sx={{ p: 1 }}>
              <Avatar alt="Chaker Baloch" src={chakerImage} />
              </IconButton>
            </Tooltip>
              <Tooltip title = "">
                <Typography variant="body1" textAlign="center"
                 sx={{
                    flexGrow: 1,
                    my: '2',
                    fontSize: '20px',
                    color: 'black',
                    whiteSpace: 'nowrap'
                }}>
                  Chaker Baloch
                </Typography>
              </Tooltip>
          </Box>
        </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> 
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', paddingLeft:'33%' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'lightgray', display: 'block',
                mx:2, // Add margin to all buttons except the first one
                fontSize: '18px',
                textTransform: 'none'
               }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
   
    <Box sx={{ width: '100%',
     flexGrow: 1,
     my: 20,
     lineHeight:'normal',
     display:{xs: 'none', md: 'flex'},
     flexDirection: 'column',
     justifyContent: 'center', 
     alignItems: 'center',
     color: 'black'
     
     }}>
      <Typography variant="h1" gutterBottom  sx={{font:'Robot, san-serif', fontWeight: 'semi-bold', fontStyle:'initial'}}>
      HEY, I AM CHAKER BALOCH 
      </Typography>
      <div style={{textAlign:'center'}}>
        <Typography variant="h5" gutterBottom sx={{maxWidth: '40em'}}>
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product     </Typography>
      </div>
    </Box>



    {/* <Stack spacing={2} direction="row" sx={{flexGrow: 1,display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="contained" sx={{flexGrow: 0,display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9747FF', fontSize:'20px', zIndex:'50',width:'17rem', height: '4rem'}} >Projects</Button>
    </Stack> */}

  </div>

  );
}
export default OnlyNavBarTest;