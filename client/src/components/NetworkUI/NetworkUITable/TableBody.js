import React from 'react';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Icon,
  Loader,
} from 'react-bulma-components';


const TableBody = ({ pathways, pathwayDatabases, loadState, selectedPathwayDatabase}) => {
  const sorted = selectedPathwayDatabase ? pathwayDatabases.byId[selectedPathwayDatabase].pathways.concat().sort((idA, idB) =>
    pathways.byId[idA].pVal - pathways.byId[idB].pVal
  ) : [];

  const rows =
  loadState === 'LOADING' ?
    <tr>
      {[1,2,3,4,5,6].map((col) =>
        <td key={col}>
          <Loader style={{
            width: 25,
            height: 25,
            border: '4px solid #209cee',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            margin: '0 auto',
          }}/>
        </td>
      )}
    </tr>
    :
    sorted.map(id => (
    <tr key={id}>
      <td className="col-name">
        {pathways.byId[id].name}
      </td>
      <td>
        <Icon style={{ borderRadius: '50%', backgroundColor: pathways.byId[id].color,
          width: '1em',
          height: '1em',
        }}>
        </Icon>
      </td>
      <td className="col-pwaymembers">
        {pathways.byId[id].membersLength}
      </td>
      <td className="col-edges">
        {pathways.byId[id].edgesLength}
      </td>
      <td className="col-overlap">
        {pathways.byId[id].overlapLength}
      </td>
      <td className="col-sig">
        {pathways.byId[id].pVal.toExponential(2)}
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