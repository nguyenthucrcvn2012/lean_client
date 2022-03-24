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

const FtpRakutenSettingPopup = ({ openProps, onClose }) => {
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
      <Box className="popup" style={{ width: '450px' }}>
        <Box className="popup-header">
          <Typography>
          FTP設定
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>

        </Box>
        <Box style={{ minHeight: '200px', padding: '15px' }}>
          <Box
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'}  fontWeight="bold" color="dark" fontSize={15} >FTPサーバー</Typography>
            <Typography fontWeight="normal" color="dark" fontSize={15}>upload.rakuten.ne.jp</Typography>
          </Box>
          <Box
          mt={3}
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'}  fontWeight="bold" color="dark" fontSize={15} >FTPアカウント</Typography>
            <InputCustom
              type="text"
              placeholder="FTPアカウント"
              name="company"
              sx={{ width: '50%' }}
            /> *
          </Box>
          <Box
          mt={3}
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'} fontWeight="bold" color="dark" fontSize={15}>FTPパスワード</Typography>
            <InputCustom
              type="password"
              placeholder="FTPパスワード"
              name="company"
              sx={{ width: '50%' }}
            /> *
          </Box>
          <Box
          mt={3}
          style={{display: 'flex',
            alignItems: 'center',
            gap: '5px'}}
          >
            <Typography textGradient={true} width={'30%'} fontWeight="bold" color="dark" fontSize={15}>接続テスト</Typography>
            <Typography fontWeight="bold" color="red" fontSize={15}>NG</Typography>
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

export default FtpRakutenSettingPopup;