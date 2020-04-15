// import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Alert, AlertActionCloseButton, Button, Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { PaginationTop } from './page.js';

const App = () => {
  const x: number = 0;
  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  };
  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      toolbar="Toolbar"
      avatar=" | Avatar"
      showNavToggle
      isNavOpen={true}
    />
  );
  const Sidebar = <PageSidebar nav="Navigation" isNavOpen={true} theme="dark" />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.light}>
        <Alert
          variant="default"
          title="Default alert title"
          action={<AlertActionCloseButton />}
        >
          Info alert description. <a href="#">This is a link.</a>
        </Alert>
        <h1>Hello world!</h1>
        <Button variant="primary">Button</Button>
        <PaginationTop />
      </PageSection>
    </Page>
  );
};

ReactDom.render(<App />, document.getElementById('app'));

