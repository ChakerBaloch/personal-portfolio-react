import * as React from 'react';
import chakerImage from '../Images/chaker_image.jpg';
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
import AdbIcon from '@mui/icons-material/Adb';
import { CenterFocusStrong } from '@mui/icons-material';


const pages = ['Home', 'About', 'Projects','Contact'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'#9747FF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{flexGrow: 0}}>
          <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
            <Tooltip>
              <IconButton sx={{ p: 2 }}>
              <Avatar alt="Chaker Baloch" src={chakerImage} />
              </IconButton>
            </Tooltip>
              <Tooltip title = "">
                <Typography variant="body1" textAlign="center"
                 sx={{
                    flexGrow: 1,
                    my: '2',
                    fontSize: '20px',
                    color: 'inherit',
                    whiteSpace: 'nowrap'
                }}>
                  CHAKER BALOCH
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
                sx={{ my: 2, color: 'white', display: 'block',
                mx:2, // Add margin to all buttons except the first one
                fontSize: '18px'
               }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;