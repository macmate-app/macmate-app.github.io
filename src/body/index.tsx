import { auto } from 'manate/react';

import { Store } from '../store';
import Home from './home';
import PrivacyPolicy from './privacy-policy';
import CustomerSupport from './customer-support';
import App from './app';
import ibpMarketing from '../assets/icon-builder-plus/marketing';
import * as ibpAssets from '../assets/icon-builder-plus/assets';
import tpMarketing from '../assets/typescript-playground/marketing';
import * as tpAssets from '../assets/typescript-playground/assets';

const bodies = {
  '/privacy-policy/': PrivacyPolicy(),
  '/customer-support/': CustomerSupport(),
  '/icon-builder-plus/': App({ marketing: ibpMarketing, assets: ibpAssets }),
  '/typescript-playground/': App({ marketing: tpMarketing, assets: tpAssets }),
};

const Body = (props: { store: Store }) => {
  const render = () => {
    if (bodies[props.store.path]) {
      return bodies[props.store.path];
    }
    return Home();
  };
  return auto(render, props);
};

export default Body;
