import React from 'react';
import ReactDom from 'react-dom';
import {
  Alert,
  AlertActionCloseButton,
  Button,
  Page,
  PageHeader,
  PageSidebar,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { RedoIcon } from '@patternfly/react-icons';

import { PaginationTop } from './Page';

export const App = () => {
  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank',
  };
  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      showNavToggle
      isNavOpen={true}
    />
  );
  const Sidebar = <PageSidebar nav="Navigation" isNavOpen={true} />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.light}>
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
      </PageSection>
    </Page>
  );
};
