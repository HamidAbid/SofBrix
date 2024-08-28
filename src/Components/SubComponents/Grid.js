import React from 'react'



export default function Grid(props) {
  return (
    <div className='pt-5 grid '>
      <img className='img-fluid ' src={props.img} alt='native'></img>
      <div className=' text p-4 '>
        <h1 className='fs-5 fw-bold g-head'>{props.head}</h1>
        <p className='fs-6 fs-normal g-subhead '>{props.subhead}</p>
      </div>
    </div>
  )
}
