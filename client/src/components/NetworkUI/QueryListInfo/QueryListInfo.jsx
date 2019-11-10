import React, { useState } from 'react'


import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Table,
} from 'react-bulma-components';
import ColorPicker from '../ColorPicker/ColorPicker';
import { useNetwork } from '../NetworkUIContext';

export const QueryListInfo = () => {
  const [colorPicker, setColorPicker] = useState(false)
  const { updatePathwayColor, colors } = useNetwork()

  const color = colors[0]

  return (
    <Table style={{ width: 'auto' }}>
      <tbody>
        <tr>
          <td>
            Query List
          </td>
          <td className="col-color">
            <Button
              onClick={() => { setColorPicker(true) }}
              style={{ backgroundColor: color }}>
            </Button>
            {colorPicker && (
              <ColorPicker
                setColorPicker={setColorPicker}
                color={color}
                onChangeComplete={color => updatePathwayColor(0, color.hex)}
              />
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
