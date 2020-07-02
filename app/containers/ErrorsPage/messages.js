/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 *
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ErrorsPage';

export default defineMessages({
  subMessage: {
    id: `app.containers.ErrorsPage.404`,
    defaultMessage:
      'You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation'
  },

  msg404: {
    id: `app.containers.ErrorsPage.404`,
    defaultMessage: '404: The page you are looking for isn’t here'
  },
  msg401: {
    id: `app.containers.ErrorsPage.401`,
    defaultMessage: '401: We are sorry but we are not able to authenticate you.'
  },
  msg500: {
    id: `app.containers.ErrorsPage.500`,
    defaultMessage: '500: Ooops, something went terribly wrong!'
  }
});
