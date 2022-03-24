import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectPopup } from 'components/NestedMenu/menuSlice';
import * as Popups from 'components/popups';

const PopupContainer = () => {
  const menuPopup = useSelector(selectPopup);
  const [popupName, setPopupName] = React.useState('');

  React.useEffect(() => {
    if (menuPopup.popupName) {
      setPopupName(menuPopup.popupName);
    }
  }, [menuPopup]);

  const handleClose = () => {
    setPopupName('');
  }

  if (popupName) {
    const Popup = Popups[popupName];
    return <Popup openProps={true} onClose={handleClose} />
  }
  return null;
}

export default PopupContainer;