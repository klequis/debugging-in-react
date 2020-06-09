import React, { useState } from 'react'
import {createUseStyles} from 'react-jss'

const Node = () => {
  const [state, setState] = ({
    key: null,
    left: null,
    right: null,
    row: null,
    col: null
  })


  const useStyles = createUseStyles({
    node: {
      borderRadius: '50%'
    }
  })
  const classes = useStyles()
  // const classes = 
  return (
    <div className={classes.node}>
      {key}
    </div>
  )

}

export default Node