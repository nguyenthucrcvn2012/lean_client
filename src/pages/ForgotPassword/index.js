import React from 'react';
import { useHistory } from 'react-router-dom';

import Card from '@mui/material/Card';

import MDBox from 'components/MD/MDBox';
import MDTypography from 'components/MD/MDTypography';
import MDInput from 'components/MD/MDInput';
import MDButton from 'components/MD/MDButton';
import BasicLayout from 'components/BasicLayout';

import { LOGIN } from 'src/config/path';

const ForgotPassword = () => {
  const history = useHistory();
  const backlogin = () => {
    history.push(LOGIN);
  };
  return (
    <BasicLayout backgroundColor="#e6e6e6">
      <Card>
        <MDBox
          pt={2}
          px={2}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="primary">
            パスワード再発行
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="dark">
            ※下記の項目を入力し[送信]ボタンを押して下さい。
            <MDTypography component="span" variant="button" fontWeight="medium" color="error">
              全て必須。
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'30%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
              店舗URL
              </MDTypography>
              <MDInput
                type="text"
                placeholder="店舗URL"
                name="company"
                sx={{ width: '65%' }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'30%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
              ユーザーID
              </MDTypography>
              <MDInput
                type="text"
                placeholder="ユーザーID"
                name="username"
                sx={{ width: '65%' }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDTypography textGradient={true} width={'30%'} fontWeight="medium" color="dark" verticalAlign="sub" variant="string" mr={2} fontSize={15}>
              メールアドレス
              </MDTypography>
              <MDInput
                type="text"
                placeholder="メールアドレス"
                name="email"
                sx={{ width: '65%' }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDTypography variant="inherit" fontWeight="light" color="dark" fontSize={13}>
                ※店舗URLは、登録時に弊社よりお送りした<br/>
                　登録情報メールに記載されている、アカウント情報のことです。<br/>
                　楽天市場の店舗URLと同じものです。<br/>
                ※メールアドレスは、商品一括エディタご登録時にご入力<br/>
                　して頂いたメールアドレスです。
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1} textAlign="center">
              <MDButton  color="info" variant="contained" sx={{ mr: 2 }} onClick={() => {}} >
              送信
              </MDButton>
              <MDButton
                color="light"
                variant="contained"
                onClick={backlogin}
                >
                閉じる
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};

export default ForgotPassword;
