import React from 'react'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
  Table,
} from 'react-bulma-components'

// local compoonents
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'

// context
import { useNetwork } from '../NetworkUIContext/NetworkUIContext'

import './NetworkUITable.css'

const NetworkUITable = () => {
  const {
    ui: {
      loadState,
    },
    updatePathwayColor,
    selectedTable
  } = useNetwork()

  return (
    <Table>
      <TableHead />
        <TableBody
        tableData={selectedTable}
          loadState={loadState}
          updatePathwayColor={updatePathwayColor}
        />
    </Table>
  )
}

export default NetworkUITable
