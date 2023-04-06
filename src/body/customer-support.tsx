import React from 'react';

import { mdi } from '../utils';
import supportImg from '../support.jpg';

const markdown = `
# Customer Support

At MacMate.app, we are committed to providing our customers with the best support possible. If you need assistance with any of our macOS apps, please don't hesitate to contact us.

## Contacting Support

The best way to reach our support team is by sending an email to [support@macmate.app](mailto:support@macmate.app). One of our friendly support agents will respond to your inquiry as soon as possible.

Please include as much detail as possible about the issue you are experiencing, including the name of the app you are using, your operating system version, and any error messages you may have received. This will help us to better diagnose and resolve your issue.
`;

const html = mdi.render(markdown);

const CustomerSupport = () => {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <img src={supportImg} />
    </div>
  );
};

export default CustomerSupport;
