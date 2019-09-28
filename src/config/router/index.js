import About from '../../containers/pages/About';
import Contact from '../../containers/pages/Contact';
import Home from '../../containers/pages/Home';

const pageRoutes = () => {
  return [
    {
      path: '/about',
      link: '/about',
      icon: 'user',
      name: 'Navigasi About',
      component: About
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
