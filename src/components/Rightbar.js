import React from 'react';
import { Box, Typography, Avatar, AvatarGroup , ImageList, ImageListItem, ListItemAvatar, List, ListItem, Divider, ListItemText} from '@mui/material';
import nature from '../images/nature.jpg';
import nature2 from '../images/nature2.jpg';
import nature3 from '../images/nature3.jpg';
import nature4 from '../images/nature4.jpg';
import nature5 from '../images/nature5.jpg';
import nature6 from '../images/nature6.jpg';



const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    p={2}
    sx={{display:{xs:"none", sm:"block"}}}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>Online Friends</Typography>
        <AvatarGroup total={13}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>Latest Posts</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={nature} alt='' />
          </ImageListItem>

          <ImageListItem>
            <img src={nature2} alt='' />
          </ImageListItem>

          <ImageListItem>
            <img src={nature3} alt='' />
          </ImageListItem>

          <ImageListItem>
            <img src={nature4} alt='' />
          </ImageListItem>

          <ImageListItem>
            <img src={nature5} alt='' />
          </ImageListItem>

          <ImageListItem>
            <img src={nature6} alt='' />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={200} mt={2}>Other Activities</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Posted a new picture"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Added three new photos"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Alex Jennifer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Rightbar;