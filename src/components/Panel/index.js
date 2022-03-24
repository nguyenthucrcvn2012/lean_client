import React from 'react';
import MDBox from 'components/MD/MDBox';
import styles from './Panel.module.scss';

const Panel = ({ children, ...others }) => {
  const classWrap = others.className || styles.Panel;
  return (
    <MDBox {...others} className={classWrap}>
      {children}
    </MDBox>
  )
}

Panel.Header = ({ children, ...others }) => {
  const classHeader = others.className || styles.Header;
  return (
    <MDBox {...others} className={classHeader}>
      {children}
    </MDBox>
  )
}

Panel.Body = ({ children, ...others }) => {
  const classBody = others.className || styles.Body;
  return (
    <MDBox {...others} className={classBody}>
      {children}
    </MDBox>
  )
}

Panel.Footer = ({ children, ...others }) => {
  const classFooter = others.className;
  return (
    <MDBox {...others} className={classFooter}>
      {children}
    </MDBox>
  )
}

export default Panel;