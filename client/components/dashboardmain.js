import React from 'react'
import { Link } from 'react-router-dom'

const Dashboardmain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/a12370a8-aaa9-4612-9c08-b57fe36dbebb"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

Dashboardmain.propTypes = {}

export default Dashboardmain
