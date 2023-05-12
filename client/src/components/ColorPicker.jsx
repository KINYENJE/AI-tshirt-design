import React from 'react'

import { SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-e'>
      <SketchPicker 
        color = {snap.color}
        disableAlpha
        // presetColors={['#80C670', '#2CCCE4']}
        onChange={(color) => state.color = color.hex}
      >

      </SketchPicker>
    </div>
  )
}

export default ColorPicker