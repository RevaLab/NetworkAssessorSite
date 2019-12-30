import React from 'react'
import { useNetwork } from '../../NetworkUIContext/NetworkUIContext'

import './TableHead.css'

const TableHead = () => {
  const { ui: { pValSortingOrder }, togglePValSortingOrder } = useNetwork()
  
  const isAscending = pValSortingOrder === 'ASC'
  const sortingOrderText = `Significance, ${isAscending ? 'ascending' : 'descending'}`
  const sortingClass = isAscending ? 'asc' : 'desc'

  return (
    <thead>
      <tr>
        <th className='col-pway-select'></th>
        <th className='col-name'>Name</th>
        <th className='col-color'></th>
        <th className='col-pwaymembers'>
          <abbr title='Pathway members'>L</abbr>
        </th>
        <th className='col-edges'>
          <abbr title='Edges between pathway and query list'>E</abbr>
        </th>
        <th className='col-overlap'>
          <abbr title='Overlap between pathway and query list'>O</abbr>
        </th>
        <th className='col-sig' onClick={togglePValSortingOrder}>
          <abbr title={sortingOrderText} className={sortingClass}>Sig.</abbr>
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
