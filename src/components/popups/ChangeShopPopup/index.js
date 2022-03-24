import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'components/buttons/Button';
import SelectCustom from 'src/components/custom/SelectCustom';
import InputCustom from 'src/components/custom/InputCustom';
import Grid from '@mui/material/Grid';
import CheckboxCustom from 'src/components/custom/CheckboxCustom';
import '../popup.scss';

const ChangeShopPopup = ({ openProps, onClose }) => {
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
          店舗切替
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box style={{ minHeight: '300px', padding: '20px 0' }}>
          <Grid fontSize="0.85rem" container justifyContent="center" alignItems="center" spacing={2.5}>
            <Grid item xs={3}>
              店舗選択
            </Grid>
            <Grid item xs={7}>
              <SelectCustom sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={3}>
              店舗URL
            </Grid>
            <Grid item xs={7}>
              <InputCustom sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={3}>
              ユーザーID
            </Grid>
            <Grid item xs={7}>
              <InputCustom sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={3}>
              パスワード
            </Grid>
            <Grid item xs={7}>
              <InputCustom type="password" sx={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <CheckboxCustom />ユーザーIDとパスワードを保存
            </Grid>
            <Grid item xs={12} container gap={2} justifyContent="center">
              <Button
                sx={{
                  minHeight: '40px !important',
                  minWidth: '120px',
                  background: 'none',
                  backgroundColor: '#D0453A',
                  color: '#fff !important',
                  borderRadius: '5px !important',
                  "&:hover": {
                    background: 'none',
                    backgroundColor: '#D0453A',
                    opacity: 0.8,
                  }
                }}
                onClick={() => {}}
              >
                ログイン
              </Button>
              <Button
                sx={{
                  minWidth: '80px',
                }}
              >
                リセット
              </Button>
              <Button
                sx={{
                  minWidth: '80px',
                }}
              >
                削除
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box className="popup-footer" style={{ justifyContent: 'end' }}>
          <Button className="btn-border" onClick={handleClose}>閉じる</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ChangeShopPopup;