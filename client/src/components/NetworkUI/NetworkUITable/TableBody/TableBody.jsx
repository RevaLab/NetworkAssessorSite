import React, { useState, useCallback, useMemo } from 'react'
import ColorPicker from '../../ColorPicker/ColorPicker'
import PathwayMembersModal from './PathwayMembersModal/PathwayMembersModal'
import { useNetwork } from '../../NetworkUIContext/NetworkUIContext'

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Button, Loader } from 'react-bulma-components'

import './TableBody.css'

const TableBody = ({
    tableData,
    loadState,
    updatePathwayColor,
  }) => {
  const [colorPicker, setColorPicker] = useState(null)
  const [modal, setModal] = useState(null)
  const {
    ui: { selectedPathways, pValSortingOrder },
    updateSelectedPathways,
    colors
  } = useNetwork()

  const handleModalClose = useCallback((e) => {
    e.stopPropagation()
    setModal(null)
  }, [setModal])

  const handleModalSelect = useCallback((id) => {
    setModal(id)
  }, [setModal])

  const loaderRow = (
    <tr className="tableRow">
      {[1, 2, 3, 4, 5, 6, 7].map((col) =>
        <td key={col}>
          <Loader style={{
            width: 15,
            height: 15,
            border: '2px solid #209cee',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            margin: '0 auto',
          }} />
        </td>
      )}
    </tr>
  )

  
  const tableDataSorted = useMemo(() => {
    const sortDataByPval = ({ pVal: a }, { pVal: b }) => {
      const ascAdjust = pValSortingOrder === 'ASC' ? 1 : -1
      return ascAdjust * (a - b)
    }

    return tableData.sort(sortDataByPval)
  }, [pValSortingOrder, tableData])

  const rows =
    loadState === 'LOADING'
      ? loaderRow
      : tableDataSorted.map(
          ({ id, name, membersLength, overlapLength, edgesLength, pVal }) => (
            <tr key={id}>
              <td className='col-pway-select'>
                <input
                  type='checkbox'
                  onChange={(e) => updateSelectedPathways(id, e.target.checked)}
                  checked={!!selectedPathways[id]}
                />
              </td>
              <td className='col-name'>{name}</td>
              <td className='col-color'>
                <Button
                  onClick={() => {
                    setColorPicker(id)
                  }}
                  style={{ backgroundColor: colors[id] }}
                ></Button>
                {id === colorPicker && (
                  <ColorPicker
                    setColorPicker={setColorPicker}
                    onChangeComplete={(newColor) =>
                      updatePathwayColor(id, newColor.hex)
                    }
                    color={colors[id]}
                  />
                )}
              </td>
              <td
                className='col-pwaymembers'
                onClick={() => handleModalSelect(id)}
              >
                {id === modal && (
                  <PathwayMembersModal
                    name={name}
                    membersLength={membersLength}
                    onClose={handleModalClose}
                  />
                )}
                <button className='as-link'>{membersLength}</button>
              </td>
              <td className='col-edges'>{edgesLength}</td>
              <td className='col-overlap'>{overlapLength}</td>
              <td className='col-sig'>{pVal.toExponential(2)}</td>
            </tr>
          )
        )

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

export default TableBody
