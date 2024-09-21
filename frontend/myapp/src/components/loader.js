import React from 'react'

function Loader() {
  return (
    <div className='h-screen  flex items-center justify-center fixed inset-0 bg-white' id='loader'>
        <img src='../../css/img/pp.gif' className=' blink-class h-72'></img>
    </div>
  )
}

export default Loader
