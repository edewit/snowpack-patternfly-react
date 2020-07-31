import React from 'react';
import { Table, TableBody, TableHeader } from '@patternfly/react-table';

import { Client } from './client-model';

type ClientListProps = {
  clients: Client[];
};

const columns = ['clientId', 'protocol', 'baseUrl'];

export const ClientList = ({ clients }: ClientListProps) => {
  const data = clients.map((c) => {
    return { cells: columns.map((col) => (c as any)[col]) };
  });
  return (
    <Table
      cells={['Client Id', 'Type', 'Base URL']}
      rows={data}
      aria-label="Client list"
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
