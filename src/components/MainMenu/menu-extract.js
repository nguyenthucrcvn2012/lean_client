const menuExtract = {
  label: '抽出',
  items: [
    {
      label: 'RMS未反映',
      items: [
        {
          label: '全て',
          callback: () => console.log('全て'),
        },
        {
          label: '新規',
          callback: () => console.log('新規'),
        },
        {
          label: '変更',
          callback: () => console.log('変更'),
        },
        {
          label: '削除',
          callback: () => console.log('削除'),
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
      label: '商品種別',
      items: [
        {
          label: '通常商品',
          callback: () => console.log('通常商品'),
        },
        {
          label: 'あす楽商品',
          callback: () => console.log('あす楽商品'),
        },
        {
          label: '予約商品',
          callback: () => console.log('予約商品'),
        },
        {
          label: '期間限定商品',
          callback: () => console.log('期間限定商品'),
        },
        {
          label: '倉庫',
          callback: () => console.log('倉庫'),
        },
        {
          label: '闇市',
          callback: () => console.log('闇市'),
        },
      ],
    },
    {
      label: '特殊抽出',
      items: [
        {
          label: 'カテゴリへの登録上限の商品',
          callback: () => console.log('カテゴリへの登録上限の商品'),
        },
        {
          label: '表示中の商品以外',
          callback: () => console.log('表示中の商品以外'),
        },
      ],
    },
  ],
};

export default menuExtract;