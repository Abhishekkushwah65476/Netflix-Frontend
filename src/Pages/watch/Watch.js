import React from 'react'
import './watch.scss'
import video from '../../images/Video.mp4'
import { Link } from 'react-router-dom'

function Watch() {
  return (
    <>
    <div className='watch'>
      <Link to='/home'>
        <div className='back'>
        <i class='bx bx-arrow-back'></i>
        Home
        </div>
      </Link>
        <video className='video' autoPlay progress  controls src={video}/>
    </div>
    
    </>
  )
}

export default Watch