import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Table,
} from 'react-bulma-components';

// local compoonents
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

// context
import { NetworkUIConsumer } from '../NetworkUIContext';

import './NetworkUITable.css'

const NetworkUITable = () => {
  return (
    <Table>
      <TableHead />
      <NetworkUIConsumer>
        {
          ({
            // pathways,
            // pathwayDatabases,
            // ppiDatabases,
            ui: {
              loadState,
              // selectedPathwayDatabase,
              // selectedPpiDatabase,
              // selectedPathways,
            },
            // updateSelectedPathways,
            updatePathwayColor,
            tableData
          }) =>
          <TableBody
            tableData={tableData}
            loadState={loadState}
            updatePathwayColor={updatePathwayColor}
          />
        }
      </NetworkUIConsumer>
    </Table>
  )
}

export default NetworkUITable;
