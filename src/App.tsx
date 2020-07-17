import React, { Fragment } from 'react';
import { Alert, AlertActionCloseButton, Button } from '@patternfly/react-core';
import { RedoIcon } from '@patternfly/react-icons';

import { PaginationTop } from './Page';

export const App = () => {
  return (
    <Fragment>
      <Alert
        variant="default"
        title="Default alert title"
        actionClose={<AlertActionCloseButton />}
      >
        <RedoIcon />
        Info alert description. <a href="#">This is a link.</a>
      </Alert>
      <h1>Hello world!</h1>
      <Button variant="primary">Button</Button>
      <PaginationTop />
    </Fragment>
  );
};
