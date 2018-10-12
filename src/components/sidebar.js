import React from 'react'

import brent from '../images/brent.png'

const Sidebar = ({ children }) => (
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        style={{ borderRadius: 360, width: '10rem' }}
        src={brent}
        alt="Brent Anderson"
      />
    </div>
  </div>
)

export default Sidebar
