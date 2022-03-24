import actionMenu from 'src/config/actionMenu';

const menuFile = {
  label: 'ファイル',
  items: [
    {
      label: '新規商品作成',
      action: actionMenu.OPEN_POPUP,
      popupName: 'NewProductCreationPopup'
    },
    {
      label: 'コピーして新規商品作成',
      items: [
        {
          label: '個別',
          action: actionMenu.OPEN_POPUP,
          popupName: 'TestPopup',
        },
        {
          label: '複数',
          callback: () => console.log('複数'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'バックアップ',
      items: [
        {
          label: '(空き)',
          callback: () => console.log('(空き)'),
        },
        {
          label: '(空き)',
          callback: () => console.log('(空き)'),
        },
        {
          label: '(空き)',
          callback: () => console.log('(空き)'),
        },
        {
          label: '(空き)',
          callback: () => console.log('(空き)'),
        },
        {
          label: '(空き)',
          callback: () => console.log('(空き)'),
        },
      ],
    },
    {
      label: 'クラウドバックアップ',
      callback: () => console.log('クラウドバックアップ'),
    },
    {
      label: '自動バックアップ',
      items: [
        {
          label: '一括更新前',
          callback: () => console.log('一括更新前'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '読み込み（CSV）',
      items: [
        {
          label: '商品',
          callback: () => console.log('商品'),
        },
        {
          label: '項目選択肢(複数ファイル取込み用)',
          callback: () => console.log('項目選択肢(複数ファイル取込み用)'),
        },
        {
          label: '二重価格表示チェック結果',
          callback: () => console.log('二重価格表示チェック結果'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'RMS反映',
      items: [
        {
          label: '商品（APIモード）',
          callback: () => console.log('商品（APIモード）'),
        },
        {
          label: '商品（CSVモード大量反映）',
          callback: () => console.log('商品（CSVモード大量反映）'),
        },
        {
          label: '項目選択肢',
          callback: () => console.log('項目選択肢'),
        },
        {
          label: '項目選択肢別在庫',
          callback: () => console.log('項目選択肢別在庫'),
        },
        {
          label: 'カテゴリ（選択商品のデータ対象）',
          callback: () => console.log('カテゴリ（選択商品のデータ対象）'),
        },
      ],
    },
    {
      label: 'RMS反映ログ',
      items: [
        {
          label: 'APIログ',
          callback: () => console.log('APIログ'),
        },
        {
          label: 'CSVエラーログ',
          callback: () => console.log('CSVエラーログ'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'CSV書き出し',
      items: [
        {
          label: '商品',
          callback: () => console.log('商品'),
        },
        {
          label: '項目選択肢',
          callback: () => console.log('項目選択肢'),
        },
        {
          label: 'カテゴリ（全データ対象）',
          callback: () => console.log('カテゴリ（全データ対象）'),
        },
        {
          label: 'カテゴリ（選択商品のデータ対象）',
          callback: () => console.log('カテゴリ（選択商品のデータ対象）'),
        },
        {
          component: <hr className="separator-menu"/>,
        },
        {
          label: 'スーパーSALE申請用CSV',
          callback: () => console.log('スーパーSALE申請用CSV'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '店舗切替',
      action: actionMenu.OPEN_POPUP,
      popupName: 'ChangeShopPopup',
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '終了',
      callback: () => console.log('終了'),
    },
  ],
};

export default menuFile;