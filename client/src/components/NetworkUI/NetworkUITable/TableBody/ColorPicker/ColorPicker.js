import React, { useEffect, useCallback } from 'react'
import { CompactPicker } from 'react-color';

const ColorPicker = ({ color, pathwayId, setColorPicker, updatePathwayColor }) => {
  const handleClose = useCallback((e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setColorPicker(null);
    }
  }, [setColorPicker])

  const handleKey = useCallback((e) => {
    e.stopPropagation();

    if (e.code === 'Escape') {
      setColorPicker(null);
    }
  }, [setColorPicker])

  useEffect(() => {
    document.addEventListener('keydown', handleKey, false);

    return () => {
      document.removeEventListener('keydown', handleKey, false)
    }
  }, [handleKey])

  return (
    <div className="ColorPicker">
      <div className="compact-picker-overlay" onClick={handleClose} />
      <div className="compact-picker-container">
        <CompactPicker
          color={color}
          onChangeComplete={(newColor) => updatePathwayColor(pathwayId, newColor.hex)}
        />
      </div>
    </div>
  )
}

export default ColorPicker
