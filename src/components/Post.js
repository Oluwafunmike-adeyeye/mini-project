import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Avatar, Checkbox  } from '@mui/material';
import { Favorite, FavoriteBorder, Share, MoreVert } from '@mui/icons-material';
import waterfall from '../images/waterfall.jpg';
import waterfall2 from '../images/waterfall2.jpg';
import waterfall3 from '../images/waterfall3.jpg';
import waterfall4 from '../images/waterfall4.jpg';


const Post = () => {
  return (
    <div>
        <Card sx={{height:"700px", margin:5}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Waterfall between Trees"
            subheader="March, 2023"
            />
            <CardMedia
            component="img"
            height="500"
            image={waterfall}
            alt="waterfall"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"#CE1212"}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
      </Card>

      <Card sx={{height:"700px", margin:5}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Flowing Waterfall"
            subheader="March, 2023"
            />
            <CardMedia
            component="img"
            height="500"
            image={waterfall2}
            alt="waterfall"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"#CE1212"}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
      </Card>

      <Card sx={{height:"700px", margin:5}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Waterfall with Rainbow"
            subheader="April, 2023"
            />
            <CardMedia
            component="img"
            height="500"
            image={waterfall3}
            alt="waterfall"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"#CE1212"}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
      </Card>

      <Card sx={{height:"700px", margin:5}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Waterfall between Rocky Cliffs with Green Forest"
            subheader="April, 2023"
            />
            <CardMedia
            component="img"
            height="500"
            image={waterfall4}
            alt="waterfall"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"#CE1212"}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
      </Card>
    </div>
  )
}

export default Post;