import { React, useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { FilterVintage, Mail, Notifications, Search as SearchIcon} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: "space-between",
  backgroundColor: "#CE1212"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0, 10px",
  borderRadius: theme.shape.borderRadius,
  width: "25%",
}));

const Icons = styled(Box)(({ theme }) => ({
display: "flex",
gap: "20px",
alignItems: "center"
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs: "none", sm:"block"}}}>PHUNMEHKHE</Typography>
            <FilterVintage sx={{display:{xs: "block", sm:"none"}}} />
            <Search>
              <InputBase placeholder="search..." />
            </Search>
            <Icons>
              <Badge badgeContent={6} color="primary">
                <Mail />
              </Badge>
              <Badge badgeContent={2} color="primary">
                <Notifications />
              </Badge>
              <Avatar 
              sx={{width:30, height:30, backgroundColor: "white", color: "#CE1212"}}
              onClick={(e)=>setOpen(true)}
              >OA
              </Avatar>
            </Icons>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;