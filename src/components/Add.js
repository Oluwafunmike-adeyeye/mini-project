import { React, useState } from 'react';
import { Tooltip, Fab, Modal, Box, styled, Typography, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material';
import { Add as AddIcon, EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange } from '@mui/icons-material';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
            <Tooltip onClick = {(e)=>setOpen(true)}
                title="Add" 
                sx={{
                    position:"fixed", 
                    bottom:20, 
                    left: {xs: "cal(50%-25px)", md:30}
                }}
            >
                <Fab color="error" aria-label="add">
                    <AddIcon />
                </Fab> 
            </Tooltip>

            <StyledModal
                open={open}
                onClose={(e)=>setOpen(false)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box 
                    width={400} 
                    height={280} 
                    bgcolor={"background.default"} 
                    color={"text.primary"} 
                    p={3} 
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create New Post
                    </Typography>
                    <UserBox>
                        <Avatar 
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                        <Typography fontWeight={500} variant="span">Peter Johnson</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>

                    <ButtonGroup
                        fullWidth 
                        variant="contained" 
                        aria-label="outlined button group"
                        color="error"
                    >
                        <Button>
                            Post
                        </Button>
                        <Button sx={{width:"100px"}} >
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add;