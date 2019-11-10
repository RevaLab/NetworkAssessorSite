import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Table,
} from 'react-bulma-components';

// local compoonents
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

// context
import { useNetwork } from '../NetworkUIContext';

import './NetworkUITable.css'

const NetworkUITable = () => {
  const {
    ui: {
      loadState,
      selectedPathwayDatabase,
      selectedPpiDatabase,
    },
    updatePathwayColor,
    tables
  } = useNetwork()

  return (
    <Table>
      <TableHead />
        <TableBody
          tableData={tables[selectedPpiDatabase][selectedPathwayDatabase]}
          loadState={loadState}
          updatePathwayColor={updatePathwayColor}
        />
    </Table>
  )
}

export default NetworkUITable;
