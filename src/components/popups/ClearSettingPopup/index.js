import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import Panel from 'components/Panel';
import Button from 'components/buttons/Button';
import '../popup.scss';

const ClearSettingPopup = ({ openProps, onClose }) => {
  const [open, setOpen] = React.useState(openProps);
  const handleClose = () => {
    onClose();
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="popup" style={{ width: '350px' }}>
        <Box className="popup-header">
          <Typography>
          
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '70px' }}>
          <Typography p={2} fontWeight="normal" color="dark" fontSize={15}>
            保存データを削除します。よろしいですか？
          </Typography>
        </Box>
        <Box className="popup-footer">
          <Button className="btn-border">はい</Button>
          <Button className="btn-border" onClick={handleClose}>いいえ</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ClearSettingPopup;