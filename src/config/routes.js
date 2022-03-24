
import * as path from 'config/path';
import Top from 'pages/Top';
import Single from '../pages/Single';
import Login from '../pages/Login';

export const routes = [
  {
    path: path.SINGLE,
    component: Single,
  },
  {
    path: path.TOP,
    component: Top,
  }
];