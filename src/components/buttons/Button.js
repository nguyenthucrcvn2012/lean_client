import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, image, style, group, className, ...others }) => {
  let buttonStyle = {
    borderRadius: image ? '5px' : '3px',
  }

  if (group && group === 'left') {
    buttonStyle = {
      ...buttonStyle,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }
  }
  if (group && group === 'right') {
    buttonStyle = {
      ...buttonStyle,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    }
  }
  if (group && group === 'mid') {
    buttonStyle = {
      ...buttonStyle,
      borderRadius: 0,
    }
  }
  if (style) {
    buttonStyle = {...buttonStyle, ...style};
  }
  return (
    <MuiButton {...others} style={buttonStyle} className={classNames(styles.buttonStyle, className)}>
      {image && <img src={image} alt="" />}
      {children}
    </MuiButton>
  );
}

export default Button;