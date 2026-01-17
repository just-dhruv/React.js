import React from 'react'
import { createPortal } from 'react-dom'

function PortalTest() {
  return createPortal(
    <div>PortalTest</div>,
    document.querySelector('#test-selecter')
  )
}

export default PortalTest