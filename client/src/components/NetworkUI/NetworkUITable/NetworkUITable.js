import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Table,
} from 'react-bulma-components';

// local compoonents
import TableHead from './TableHead';
import TableBody from './TableBody';

// context
import {
  NetworkUIConsumer,
} from '../NetworkUIContext';

const NetworkUITable = () => {
  return (
    <Table>
      <TableHead />
      <NetworkUIConsumer>
        {({ pathways, pathwayDatabases, ui: { loadState, selectedPathwayDatabase }}) =>
          <TableBody
            pathways={pathways}
            loadState={loadState}
            selectedPathwayDatabase={selectedPathwayDatabase}
            pathwayDatabases={pathwayDatabases}
          />
        }
      </NetworkUIConsumer>
    </Table>
  )
}

export default NetworkUITable;