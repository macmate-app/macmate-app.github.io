import { auto } from 'manate/react';

import { Store } from '../store';
import Home from './home';
import PrivacyPolicy from './privacy-policy';
import CustomerSupport from './customer-support';
import IconBuilderPlus from './icon-builder-plus';
import TypeScriptPlayground from './typescript-playground';

const bodies = {
  '/privacy-policy/': PrivacyPolicy,
  '/customer-support/': CustomerSupport,
  '/icon-builder-plus/': IconBuilderPlus,
  '/typescript-playground/': TypeScriptPlayground,
};

const Body = (props: { store: Store }) => {
  const render = () => {
    if (bodies[props.store.path]) {
      return bodies[props.store.path]();
    }
    return Home();
  };
  return auto(render, props);
};

export default Body;
