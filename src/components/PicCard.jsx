import React from 'react'

export default function PicCard({showimg}) {
  return (
    <div style={{border:"2px solid red",padding:"10px",display:"inline-block"}}>
        <img src={showimg} style={{width:'100px'}} alt='' />
    </div>
  )
}
