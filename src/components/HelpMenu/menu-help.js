const systemName = '商品一括エディタ for 楽天市場';

const menuHelp = {
  //label: '楽天市場　納期管理番号設定について',
  items: [
    {
      label: '楽天市場　納期管理番号設定について',
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: `${systemName} ヘルプ`,
    },
    {
      label: `${systemName} マニュアル`,
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: `${systemName}ダウンロード一覧`,
      items: [
        {
          label: 'クイックスタートマニュアル',
        },
        {
          label: '操作マニュアル',
        },
        {
          label: 'スーパーSALE設定マニュアル',
        },
      ],
    },
    {
      label: 'ダウンロードパスワードの表示',
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: `${systemName} について`,
    },
    {
      component: <hr className="separator-menu"/>,
    },
    {
      label: `${systemName} お問い合わせ`,
    },
    {
      label: `${systemName} ご意見箱`,
    },
    {
      label: 'グリニッジにデータを報告する',
    },
  ],
};

export default menuHelp;