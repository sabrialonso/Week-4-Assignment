import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from "react-router-dom";
import image from '../../images/Liv.png'
import { red } from '@mui/material/colors';
import PropTypes from 'prop-types';

const pages = ['Home', 'Features', 'About', 'Contact', 'Login'];

function ResponsiveAppBar(backgroundColor) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{backgroundColor: "orange" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={image} style={{ height: "80px", width: "70px" }} />
          <Typography
            variant="h6"
            color="white"
            noWrap
            component={Link}
            to = "/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "white",
              textDecoration: 'none',
            }}
          >
           
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
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
                  <Typography textAlign="center"><Link to={`/${page.toLowerCase()}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            color="white"
            component={Link}
            to = "/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => ( <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: "none"}} >
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
               
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

ResponsiveAppBar.PropTypes = {
  backgroundColor: PropTypes.string,
}

ResponsiveAppBar.defaultProps = {
  backgroundColor: "red"

}
