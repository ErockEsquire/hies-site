import React, { Fragment } from 'react'
import Water from './water'
import Geo from './geo'
import { HomeOne, HomeTwo } from './home'

export default function Main() {
  return (
    <Fragment>
      <Water />
      <HomeOne />
      <Geo />
      <HomeTwo />
    </Fragment>
  )
}