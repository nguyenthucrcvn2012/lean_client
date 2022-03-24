import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckboxCustom from 'components/custom/CheckboxCustom';
//import Panel from 'components/Panel';
import Button from 'components/buttons/Button';
import '../popup.scss';

const ErrorSettingPopup = ({ openProps, onClose }) => {
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
          エラー通知設定
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '150px' }}>
          <Typography p={2} fontWeight="normal" color="dark" fontSize={15}>
            <b>エラー通知</b> <CheckboxCustom className="checkbox-custom" /> しない
          </Typography>
        </Box>
        <Box className="popup-footer">
          <Button className="btn-border">保存</Button>
          <Button className="btn-border" onClick={handleClose}>閉じる</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ErrorSettingPopup;