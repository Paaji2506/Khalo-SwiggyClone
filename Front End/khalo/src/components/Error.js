import React from 'react'

export default function Error(props) {

  return (
    <div className="errormsg" style={{color:props.success?"green":"red"}}>
     <h3>{props.message}</h3>
    </div>
  )
}
