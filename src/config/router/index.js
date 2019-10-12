import About from '../../containers/pages/About';
import Contact from '../../containers/pages/Contact';
import Home from '../../containers/pages/Home';
import TableRedash from '../../containers/pages/table';
import Chart from '../../containers/pages/chart';

const pageRoutes = () => {
  return [
    {
      path: '/table',
      link: '/table',
      icon: 'user',
      name: 'Table',
      component: TableRedash
    },
    {
      path: '/chart',
      link: '/chart',
      icon: 'video-camera',
      name: 'Navigasi Chart',
      component: Chart
    },
    {
      path: '/home',
      link: '/home',
      icon: 'upload',
      name: 'Navigasi Home',
      component: Home
    }
  ];
};

export default pageRoutes();
