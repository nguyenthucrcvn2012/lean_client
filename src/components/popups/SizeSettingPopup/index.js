import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { 
  Modal,
  Box,
  IconButton,
  MenuItem,
  Typography
} from '@mui/material';
import Button from 'components/buttons/Button';
import SelectCustom from 'components/custom/SelectCustom';
import '../popup.scss';

const SizeSettingPopup = ({ openProps, onClose }) => {
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
          文字サイズ設定
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '110px', padding: '15px'}}>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <Typography fontWeight="bold" color="dark" fontSize={15}>文字サイズ</Typography>
            <SelectCustom
              defaultValue={1}
            >
              <MenuItem value={0}>小</MenuItem>
              <MenuItem value={1}>中(初期設定)</MenuItem>
              <MenuItem value={2}>大</MenuItem>
            </SelectCustom>
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

export default SizeSettingPopup;