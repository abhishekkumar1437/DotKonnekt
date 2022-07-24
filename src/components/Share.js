import { Close, Share } from "@mui/icons-material";
import { Button, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

export default function SharePlugin() {
  const initialIcon = {
    size: 32,
    round: true
  };
  const [icon, setIcon] = useState(initialIcon);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <TextField id="message" size="small" label="Type Message" variant="outlined" value={message} name="message" onChange={handleChangeMessage} />
      <IconButton
        id="share-button"
        aria-controls={open ? 'share-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Share color="primary" />
      </IconButton>
      <Menu
        id="share-menu"
        aria-labelledby="share-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ transform: 'translateY(-10px)' }}
      >
        <MenuItem onClick={handleClose}>
          <WhatsappShareButton title={message} url="https://dotkonnect.io/index.html">
            <WhatsappIcon size={icon.size} round={icon.round} />
          </WhatsappShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FacebookShareButton title={message} quote={message} url="https://dotkonnect.io/index.html">
            <FacebookIcon size={icon.size} round={icon.round} />
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TwitterShareButton title={message} url="https://dotkonnect.io/index.html">
            <TwitterIcon size={icon.size} round={icon.round} />
          </TwitterShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkedinShareButton title={message} url="https://dotkonnect.io/index.html">
            <LinkedinIcon size={icon.size} round={icon.round} />
          </LinkedinShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EmailShareButton subject="" body={message} url="https://dotkonnect.io/index.html">
            <EmailIcon size={icon.size} round={icon.round} />
          </EmailShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Close color="primary" sx={{ fontSize: icon.size }} />
        </MenuItem>
      </Menu>
    </>
  );
}