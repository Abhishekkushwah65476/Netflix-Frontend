import React, { useEffect, useState } from 'react'
import './Listitem.scss'
import Data from '../Json.json'
import video from '../../images/Video.mp4'
import { Link } from 'react-router-dom'
import Detail from '../../Pages/Detail/Detail'
import axios from 'axios'



function Listitem({index,item}) {
  const [ishover, setIshover] = useState(false)
  const [movie,setMovie] =useState({})
  // const trailer = {item}
  const id = item.slice(1, -1)
//  console.log(item.slice(1, -1))
  // console.log("movie",movie)
  
  
  useEffect(() => {
    
   List()

  }, [item])

  const List =()=>{ axios.get(`http://localhost:4000/admin/getSingleMovie/find/${id}`)
    .then((res)=>{
      console.log("Movie",res)
     
        setMovie(res.data.data)
      
    }).catch((err)=>{
      console.log(err)
    })}
  



  // console.log("trailer",item)

  return (
    <>
    <Link to={{pathname:'/watch',movie:movie}}>
      <div
        className='listitem'
         style={{left:ishover && index*225 -50 + index*2.5}}
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
        >
        <img src={movie[0]?.img} />
        {
          ishover &&
          <div className='trailer'>
             

            {/* {
              movie.trailer ?
              <video src={movie[0]?.trailer} autoPlay={true} loop controls></video>
              :
              <img src={movie[0].img}/>

            } */}

          </div>
        }
        <div className='item-info'>
          <div className='icons'>
          {/* <i class='bx bx-play icon' ></i> */}
            <i class='bx bx-play icon'></i>
            <Detail/>
            <i class='bx bxs-like icon'  ></i>
            <i class='bx bxs-dislike icon' ></i>

          </div>
          <div className='item-info-top'>
            <span>{movie?.duration}</span>
            <span className='limit'>+{movie[0]?.limit}</span>
            <span>{movie[0]?.year}</span>
          </div>
          <div className='dis'>
           {movie[0]?.description}
          </div>
          <div className='genra'>
            {movie[0]?.genre}
          </div>
        </div>
      </div>
    </Link>

    </>
  )
}

export default Listitem