import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button } from 'antd';
import Page from 'components/Page';
import './error.scss';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Error401() {
  return (
    <Page className="root" title="401">
      <Typography align="center">
        <FormattedMessage {...messages.msg401} />
      </Typography>
      <Typography align="center" variant="subtitle2">
        <FormattedMessage {...messages.subMessage} />
      </Typography>
    </Page>
  );
}

export default Error401;
