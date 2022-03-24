const menuSearch = {
  label: '検索',
  items: [
    {
      label: '商品検索',
      callback: () => console.log('商品検索'),
    },
    {
      label: '項目選択肢検索',
      callback: () => console.log('項目選択肢検索'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '並べ替え',
      items: [
        {
          label: 'カテゴリ登録数：降順',
          callback: () => console.log('カテゴリ登録数：降順'),
        },
        {
          label: 'カテゴリ登録数：昇順',
          callback: () => console.log('カテゴリ登録数：昇順'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '全商品表示',
      callback: () => console.log('全商品表示'),
    },
  ],
};

export default menuSearch;