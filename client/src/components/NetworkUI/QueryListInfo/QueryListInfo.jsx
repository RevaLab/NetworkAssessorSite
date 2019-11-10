import React, { useState } from 'react'


import 'react-bulma-components/dist/react-bulma-components.min.css';
import {
  Button,
  Table,
} from 'react-bulma-components';
import ColorPicker from '../ColorPicker/ColorPicker';

export const QueryListInfo = () => {
  const [colorPicker, setColorPicker] = useState(false)
  const [color, setColor] = useState('black')

  return (
    <Table>
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
                onChangeComplete={color => setColor(color.hex)}
              />
            )}
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
