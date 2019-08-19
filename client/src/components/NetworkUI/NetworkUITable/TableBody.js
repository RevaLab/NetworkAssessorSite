import React, { useState, useEffect } from 'react';
import { CompactPicker } from 'react-color';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Loader,
} from 'react-bulma-components';

const TableBody = ({
    pathways,
    pathwayDatabases,
    ppiDatabases,
    loadState,
    selectedPathwayDatabase,
    selectedPpiDatabase,
    updateSelectedPathways,
    selectedPathways,
    updatePathwayColor,
  }) => {

  const [colorPicker, setColorPicker] = useState(null);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setColorPicker(null);
    }
  }


  const sorted = selectedPathwayDatabase ? pathwayDatabases.byId[selectedPathwayDatabase].pathways.concat().sort((idA, idB) =>
  pathways.byId[idA].pVal - pathways.byId[idB].pVal
  ) : [];

  const ColorPicker = ({ pathwayId }) => {
    const handleKey = (e) => {
      e.stopPropagation();

      if (e.code === 'Escape') {
        setColorPicker(null);
      }
    }

    useEffect(() => {
      document.addEventListener('keydown', handleKey, false);

      return () => {
        document.removeEventListener('keydown', handleKey, false)
      }
    })

    return (
      <div className="ColorPicker">
        <div className="compact-picker-overlay" onClick={handleClose} />
        <div className="compact-picker-container">
          <CompactPicker
            color={pathways.byId[pathwayId].color}
            onChangeComplete={(newColor) => updatePathwayColor(pathwayId, newColor.hex)}
          />
        </div>
      </div>
    )
  }

  const rows =
  loadState === 'LOADING' ?
    <tr>
      {[1,2,3,4,5,6, 7].map((col) =>
        <td key={col}>
          <Loader style={{
            width: 15,
            height: 15,
            border: '2px solid #209cee',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            margin: '0 auto',
          }}/>
        </td>
      )}
    </tr>
    :
    sorted.map((pathwayId) => (
    <tr key={pathwayId}>
      <td className="pway-select">
        <input type="checkbox"
          onChange={e => updateSelectedPathways(pathwayId, e.target.checked)}
          value={selectedPathways[pathwayId]}
        />
      </td>
      <td className="col-name">
        {pathways.byId[pathwayId].name}
      </td>
      <td className="col-color">
        <Button
          onClick={() => {
            setColorPicker(pathwayId)
          }}
          style={{
            backgroundColor: pathways.byId[pathwayId].color,
          }}>
        </Button>
        {
          pathwayId === colorPicker &&
          <ColorPicker pathwayId={pathwayId}/>
        }
      </td>
      <td className="col-pwaymembers">
        {pathways.byId[pathwayId].membersLength}
      </td>
      <td className="col-edges">
        {ppiDatabases.byId[selectedPpiDatabase].edgesLengths[pathwayId]}
      </td>
      <td className="col-overlap">
        {pathways.byId[pathwayId].overlapLength}
      </td>
      <td className="col-sig">
        {pathways.byId[pathwayId].pVal.toExponential(2)}
      </td>
    </tr>
  ))

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

export default TableBody;