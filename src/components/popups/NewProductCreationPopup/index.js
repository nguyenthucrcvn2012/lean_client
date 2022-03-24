import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'components/buttons/Button';
import ProductTabs from './ProductTabs';
import '../popup.scss';

import Loading from 'src/components/Loading';

const NewProductCreationPopup = ({ openProps, onClose }) => {
  const [open, setOpen] = React.useState(openProps);
  const [isLoading, setIsLoading] = React.useState(false)
  const handleClose = () => {
    onClose();
    setOpen(false);
  }

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="popup" style={{ width: '100%', maxWidth: '1024px' }}>
        {isLoading ? <Loading /> : ''}
        <Box className="popup-header">
          <Typography>
            新規商品作成
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box style={{ minHeight: '300px' }}>
          <ProductTabs />
        </Box>
        <Box className="popup-footer">
          <Button className="btn-border" onClick={handleSubmit}>登録</Button>
          <Button className="btn-border" onClick={handleClose}>閉じる</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default NewProductCreationPopup;