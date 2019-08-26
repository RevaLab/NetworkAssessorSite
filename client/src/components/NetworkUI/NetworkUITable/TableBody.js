import React, { useState, useEffect } from 'react';
import { CompactPicker } from 'react-color';

// component libraries
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Content,
  Heading,
  Loader,
  Modal,
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
  const [modal, setModal] = useState(null);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setColorPicker(null);
    }
  }

  const pathwaysToSort = (selectedPathwayDatabase && pathwayDatabases.byId[selectedPathwayDatabase].pathways) || [];
  const sorted = pathwaysToSort.concat().sort((idA, idB) =>
    pathways.byId[idA].pVal - pathways.byId[idB].pVal
  );

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
          checked={!!selectedPathways[pathwayId]}
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
      <td className="col-pwaymembers"
        onClick={() => setModal(pathwayId)}
      >
        {pathwayId === modal &&
          <Modal
            show={true}
            onClose={() => setModal(null)}
            closeOnBlur={true}
            showClose={false}
          >
            <Modal.Card>
              <Modal.Card.Head onClose={(e) => {
                e.stopPropagation();
                setModal(null)
              }}>
                <Modal.Card.Title renderAs="div">
                  <Heading size={4} renderAs="h1">
                    {pathways.byId[pathwayId].name}
                  </Heading>
                  <Heading subtitle size={6} renderAs="h2">
                    {pathways.byId[pathwayId].membersLength} Member{pathways.byId[pathwayId].membersLength > 1 ? 's' : ''}
                  </Heading>
                </Modal.Card.Title>
              </Modal.Card.Head>
              <Modal.Card.Body>
                <Content>
                  <ul style={{ listStyle: 'none' }}>
                    {[1, 2, 3].map(gene => <li key={gene}>{gene}</li>)}
                  </ul>
                </Content>
              </Modal.Card.Body>
              <Modal.Card.Foot></Modal.Card.Foot>
            </Modal.Card>
          </Modal>
        }
        <button className="as-link">{pathways.byId[pathwayId].membersLength}</button>
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