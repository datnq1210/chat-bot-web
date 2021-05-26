export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  {
    text: 'Quản lý dữ liệu',
    icon: 'folder',
    items: [
      {
        text: 'Quản lý Intents',
        path: '/intents'
      },
      {
        text: 'Quản lý Utters',
        path: '/utters'
      },
      {
        text: 'Quản lý Stories',
        path: '/stories'
      },
      {
        text: 'Nhập liệu bằng excel',
        path: '/importExcel'
      }
    ],
  }
];
