import React, { useEffect, useCallback, useRef } from 'react'
import { CompactPicker } from 'react-color'

const ColorPicker = ({ color, setColorPicker, onChangeComplete }) => {
  const ref = useRef(null)

  const handleClose = useCallback((e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation()
      setColorPicker(null)
    }
  }, [setColorPicker])

  const handleClick = useCallback(e => {
    if (ref.current.contains(e.target)) {
      return
    }
    setColorPicker(null)
  }, [setColorPicker])

  const handleKey = useCallback((e) => {
    e.stopPropagation()

    if (e.code === 'Escape') {
      setColorPicker(null)
    }
  }, [setColorPicker])

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false)
    document.addEventListener('keydown', handleKey, false)

    return () => {
      document.removeEventListener('mousedown', handleClick, false)
      document.removeEventListener('keydown', handleKey, false)
    }
  }, [handleClick, handleKey])



  return (
    <div className="ColorPicker" ref={ref}>
      <div className="compact-picker-overlay" onClick={handleClose} />
      <div className="compact-picker-container">
        <CompactPicker
          color={color}
          onChangeComplete={onChangeComplete}
        />
      </div>
    </div>
  )
}

export default ColorPicker
