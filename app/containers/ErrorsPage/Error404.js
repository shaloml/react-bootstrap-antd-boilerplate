import React from 'react';
import { Typography, Button } from 'antd';
import Page from 'components/Page';
import './error.scss';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Error404() {
  return (
    <Page className="root" title="404">
      <Typography align="center">
        <FormattedMessage {...messages.msg404} />
      </Typography>
      <Typography align="center" variant="subtitle2">
        <FormattedMessage {...messages.subMessage} />
      </Typography>
    </Page>
  );
}

export default Error404;
