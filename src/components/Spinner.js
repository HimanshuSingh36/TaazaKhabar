import React, { Component } from 'react'
import loading from './Winter.gif'

const Spinner=()=>{
 
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner