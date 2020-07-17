import React, { Fragment } from 'react';
import { Alert, AlertActionCloseButton, Button } from '@patternfly/react-core';
import { RedoIcon } from '@patternfly/react-icons';
import { useTranslation, Trans } from 'react-i18next';

import { PaginationTop } from './Page';

export const App = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Alert
        variant="default"
        title="Default alert title"
        actionClose={<AlertActionCloseButton />}
      >
        <RedoIcon />
        <Trans i18nKey="infoAlert">
          Info alert description. <a href="#">This is a link.</a>
        </Trans>
      </Alert>
      <h1>{t('Welcome to React')}</h1>
      <Button variant="primary">Button</Button>
      <PaginationTop />
    </Fragment>
  );
};
