import actionMenu from 'src/config/actionMenu';

const menuSetting = {
  label: '設定',
  items: [
    {
      label: '並べ替え設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'SortSettingPopup',
    },
    {
      label: '文字サイズ設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'SizeSettingPopup',
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'ショップURL設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'UrlRakutenSettingPopup',
    },
    {
      label: 'FTP設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'FtpRakutenSettingPopup',
    },
    {
      label: 'RMS WEB SERVICE設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'RmsWebSettingPopup',
    },
    {
      label: '利用モード切替',
      action: actionMenu.OPEN_POPUP,
      popupName: 'ModeSettingPopup',
    },
    {
      label: 'エラー通知設定',
      action: actionMenu.OPEN_POPUP,
      popupName: 'ErrorSettingPopup',
    },
    {
      label: 'ユーザー設定',
      callback: () => console.log('ユーザー設定'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '保存データ削除',
      action: actionMenu.OPEN_POPUP,
      popupName: 'ClearSettingPopup',
    },
  ],
};

export default menuSetting;