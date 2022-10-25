import React from 'react'

import './sideDrawer.css'

export default function SideDrawer(props) {
  return (
    <aside className='side-drawer'>{props.children}</aside>
  )
}
