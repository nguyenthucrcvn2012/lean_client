import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import Panel from 'components/Panel';
import Button from 'components/buttons/Button';
import InputCustom from 'src/components/custom/InputCustom';
import '../popup.scss';

const UrlRakutenSettingPopup = ({ openProps, onClose }) => {
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
      <Box className="popup" style={{ width: '500px' }}>
        <Box className="popup-header">
          <Typography>
          楽天ショップURL設定
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '50px', padding: '15px' }}>
          <Box
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography fontWeight="normal" color="dark" fontSize={15}>ショップURL</Typography>
            <Typography fontWeight="normal" color="dark" pl={2} fontSize={15}>http://www.rakuten.co.jp/</Typography>
            <InputCustom
              type="text"
              placeholder="店舗URL"
              name="company"
              sx={{ width: '30%' }}
            />
            <Typography fontWeight="normal" color="dark" fontSize={15}>/</Typography>
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

export default UrlRakutenSettingPopup;