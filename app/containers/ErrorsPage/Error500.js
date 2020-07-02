import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button } from 'antd';
import Page from 'components/Page';
import './error.scss';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Error500() {
  return (
    <Page className="root" title="Error 500">
      <Typography align="center">
        <FormattedMessage {...messages.msg500} />
      </Typography>
      <Typography align="center" variant="subtitle2">
        <FormattedMessage {...messages.subMessage} />
      </Typography>
    </Page>
  );
}

export default Error500;
