import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { 
  Modal,
  Box,
  IconButton,
  Typography,
  RadioGroup,
} from '@mui/material';
import Button from 'components/buttons/Button';
import RadioCustom from 'components/custom/RadioCustom';
import '../popup.scss';

const ModeSettingPopup = ({ openProps, onClose }) => {
  const [open, setOpen] = React.useState(openProps);
  const handleClose = () => {
    onClose();
    setOpen(false);
  }
  const [mode, setMode] = React.useState(1);
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="popup" style={{ width: '350px' }}>
        <Box className="popup-header">
          <Typography>
          利用モード切替
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ padding: '15px'}}>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Typography fontWeight="bold" color="dark" fontSize={15}>利用モードを選択して下さい。</Typography>
            <RadioGroup
              row
              value={mode}
              onChange={handleChange}
              style={{ gap: '10px' }}
            >
              <RadioCustom value={1} label="APIモード" />
              <RadioCustom value={2} label="CSVモード" />
            </RadioGroup>
          </Box>
        </Box>
        <Box className="popup-footer">
          <Button className="btn-border">保存</Button>
          <Button className="btn-border" onClick={handleClose}>閉じる</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ModeSettingPopup;