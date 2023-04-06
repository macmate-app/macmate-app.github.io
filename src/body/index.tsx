import { auto } from 'manate/react';

import { Store } from '../store';
import Home from './home';
import PrivacyPolicy from './privacy-policy';

const bodies = {
  '/privacy-policy/': PrivacyPolicy,
};

const Body = (props: { store: Store }) => {
  const render = () => {
    console.log(props.store.path);
    if (bodies[props.store.path]) {
      return bodies[props.store.path]();
    }
    return Home();
  };
  return auto(render, props);
};

export default Body;
