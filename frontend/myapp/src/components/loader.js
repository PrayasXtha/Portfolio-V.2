import React from 'react'

function Loader() {
  return (
    <div className='h-screen  flex items-center justify-center fixed inset-0 bg-white'>
        <img src='../../css/img/loader.gif' className='h-72'></img>
    </div>
  )
}

export default Loader
