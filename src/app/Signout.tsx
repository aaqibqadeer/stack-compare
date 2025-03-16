'use client'

import React from 'react'
import { signOut } from '~/auth'

export const Signout = () => {
  return (
    <div onClick={async () => await signOut()}>
      <button> Signout</button>
    </div>
  )
}
