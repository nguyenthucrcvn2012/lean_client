const menuSpecial = {
  label: 'らくらく',
  items: [
    {
      label: 'スーパーSALE商品作成',
      callback: () => console.log('スーパーSALE商品作成'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'タグ補正',
      callback: () => console.log('タグ補正'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'HTTPS化',
      callback: () => console.log('HTTPS化'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '利用不可タグID削除',
      callback: () => console.log('利用不可タグID削除'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '商品画像URL1入替え',
      items: [
        {
          label: '商品管理番号と画像名が同じ',
          callback: () => console.log('商品管理番号と画像名が同じ'),
        },
        {
          label: '商品管理番号と画像名が異なる',
          callback: () => console.log('商品管理番号と画像名が異なる'),
        },
        {
          label: '商品画像URL1ひもづきエラー',
          callback: () => console.log('商品画像URL1ひもづきエラー'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'R-Cabinet画像ダウンロード',
      items: [
        {
          label: '商品画像URL1のみ',
          callback: () => console.log('商品画像URL1のみ'),
        },
        {
          label: '画像エラーレポートから',
          callback: () => console.log('画像エラーレポートから'),
        },
        {
          label: '全商品画像',
          callback: () => console.log('全商品画像'),
        },
      ],
    },
    {
      label: 'R-Cabinet画像アップロード',
      callback: () => console.log('R-Cabinet画像アップロード'),
    },
  ],
};

export default menuSpecial;