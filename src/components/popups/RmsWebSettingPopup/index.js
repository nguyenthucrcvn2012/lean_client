import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import Panel from 'components/Panel';
import Button from 'components/buttons/Button';
import InputCustom from 'src/components/custom/InputCustom';
import '../popup.scss';
import question from 'assets/images/question_mark.png';

const RmsWebSettingPopup = ({ openProps, onClose }) => {
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
      <Box className="popup" style={{ width: '400px' }}>
        <Box className="popup-header">
          <Typography>
          RMS WEB SERVICE設定
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '100px', padding: '15px' }}>
          <Box
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'} fontWeight="bold" color="dark" fontSize={15}>licenseKey</Typography>
            <InputCustom
              placeholder="licenseKey"
              name="company"
              sx={{ width: '50%' }}
            />
          </Box>
          <Box
          mt={3}
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'} fontWeight="bold" color="dark" fontSize={15}>接続テスト</Typography>
            <Typography fontWeight="bold" color="red" fontSize={15}>NG</Typography>
            <Typography component={Link} to="http://editor.greenwich.co.jp/faq" fontWeight="normal" color="red" ml={7} fontSize={15}>
              licenseKeyとは
              <img src={question} alt=""/>
            </Typography>
          </Box>
          
        </Box>
        <Box className="popup-footer">
          <Button className="btn-border">接続テスト</Button>
          <Button className="btn-border" disabled>保存</Button>
          <Button className="btn-border" onClick={handleClose}>閉じる</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default RmsWebSettingPopup;