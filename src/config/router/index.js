import About from '../../containers/pages/About';
import Contact from '../../containers/pages/Contact';
import Home from '../../containers/pages/Home';
import TableRedash from '../../containers/pages/table';

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
      path: '/contact',
      link: '/contact',
      icon: 'video-camera',
      name: 'Navigasi Contact',
      component: Contact
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
