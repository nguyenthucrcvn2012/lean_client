import actionMenu from 'src/config/actionMenu';

const menuEdit = {
  label: '編集',
  items: [
    {
      label: '表示中の商品をすべて選択',
      action: actionMenu.MAIN_GRID,
      id: 'edit.select_all',
    },
    {
      label: '選択を解除',
      action: actionMenu.MAIN_GRID,
      id: 'edit.deselect_all',
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '商品編集',
      callback: () => console.log('商品編集'),
    },
    {
      label: '商品一括編集',
      callback: () => console.log('商品一括編集'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '項目選択肢一括編集',
      callback: () => console.log('項目選択肢一括編集'),
    },
    {
      label: '項目選択肢別在庫一括編集',
      callback: () => console.log('項目選択肢別在庫一括編集'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: 'カテゴリ一括編集',
      callback: () => console.log('カテゴリ一括編集'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '商品組み合わせ編集',
      callback: () => console.log('商品組み合わせ編集'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '選択商品をRMSから削除',
      callback: () => console.log('選択商品をRMSから削除'),
    },
    {
      label: '選択商品の削除取り消し',
      callback: () => console.log('選択商品の削除取り消し'),
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '選択商品を未反映状態に変更',
      callback: () => console.log('選択商品を未反映状態に変更'),
    },
    {
      label: '選択商品を新規未反映状態に変更',
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
          label: '項目選択肢別在庫',
          callback: () => console.log('項目選択肢別在庫'),
        },
        {
          label: 'カテゴリ',
          callback: () => console.log('カテゴリ'),
        },
      ],
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: '選択した商品ページを開く',
      callback: () => console.log('選択した商品ページを開く'),
    },
  ],
};

export default menuEdit;