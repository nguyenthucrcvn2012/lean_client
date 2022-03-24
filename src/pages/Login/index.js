import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
// import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import MDBox from 'components/MD/MDBox';
import MDTypography from 'components/MD/MDTypography';
import MDInput from 'components/MD/MDInput';
import MDButton from 'components/MD/MDButton';
import BasicLayout from 'components/BasicLayout';
import Checkbox from '@mui/material/Checkbox';
import { TOP, FORGOT_PASSWORD } from 'src/config/path';
import logo from 'assets/images/product_logo.png';
import icosmall from 'assets/images/ico_list_small.png';
import './Login.scss';

const Login = () => {
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [values, setValues] = useState({
    company: '',
    username: '',
    password:''
  });

  const login = () => {
    history.push(TOP);
  };

  const handleChangeText = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  
  const handleClearText = event => {
    setValues({
      company: '',
      username: '',
      password:''
    });
  };

  return (
    <BasicLayout backgroundColor="#e6e6e6">
      <Card>
        <MDBox
          pt={2}
          textAlign="center"
        >
        <img src={logo} alt="" />
        </MDBox>
        <MDBox pt={'14px'} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'20%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
                店舗選択
              </MDTypography>
              <MDInput
                select
                variant="outlined"
                placeholder="店舗選択"
                value={values.company}
                sx={{ width: '75%' }}
              >

                <MenuItem value="greenwich">greenwich</MenuItem>
              </MDInput>
            </MDBox>
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'20%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
              店舗URL
              </MDTypography>
              <MDInput
                type="text"
                placeholder="店舗URL"
                name="company"
                sx={{ width: '75%' }}
                onChange={handleChangeText}
                value={values.company}
                />
            </MDBox>
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'20%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
                ユーザーID
              </MDTypography>
              <MDInput
                type="text"
                placeholder="ユーザーID"
                name="username"
                sx={{ width: '75%' }}
                onChange={handleChangeText}
                value={values.username}
                />
            </MDBox>
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'20%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
                パスワード
              </MDTypography>
              <MDInput
                type="password"
                placeholder="パスワード"
                name="password" sx={{ width: '75%' }}
                onChange={handleChangeText}
                autoComplete="on"
                value={values.password}
                /> 
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1} justifyContent="center">
              <Checkbox className="checkbox-custom" onClick={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ml: 0 }}
              >
              ユーザーIDとパスワードを保存
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1} textAlign="center">
              <MDButton  color="error" variant="contained" sx={{ mr: 5 }}  onClick={login} className="change-color-login">
                ログイン
              </MDButton>
              <MDButton
                color="light"
                variant="contained"
                sx={{ mr: 2 }}
                className="change-color-clear"
                onClick={handleClearText}
                >
                リセット
              </MDButton>
              <MDButton  color="light" variant="contained" sx={{ mr: 2 }} className="change-color-clear">
                削除
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <MDBox textAlign="center">
        <MDTypography variant="string" className="bg-color-change">
          <MDTypography
            component={Link}
            to={FORGOT_PASSWORD}
            variant="button"
            color="dark"
            fontWeight="medium"
            textGradient={true}
          >
            <img src={icosmall} alt="" className="img-m" />
            パスワードを忘れたかたはこちら
          </MDTypography>
        </MDTypography>
      </MDBox>
    </BasicLayout>
  );
};

export default Login;
