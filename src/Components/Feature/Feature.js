import React, { useEffect, useState } from 'react'
import '../Feature/Feature.scss'
import axios from 'axios'

 function  Feature ({type}) {

  const [content,setContent] =useState({})
  // console.log("content",content.description)
  useEffect(()=>{
    axios.get(`http://localhost:4000/admin/getRandomMovie?type=${type}`)
    .then((res)=>{
      // console.log("random",res.data.data[0]);
       setContent(res.data.data[0])
    }).catch((error)=>{
      console.log(error)
    })

  },[type])

  return (
    <>
      <div className='feature'>
        {
          type && (
            <div className='category'>
         <span>{type === "movies" ? "Movies":"Series"}</span>
         <select name='genre' id='genre'>
          <option>Genre</option>
         </select>
            </div>
          )
        }
        <img src={content?.img} />
      
      </div>
      <div className='info'>
        <img src={content?.imgTitle} />
        <span className='desc'>
         {content?.description}
        </span>
        <div className='buttons'>

          <button className='Play'>
            <i class='bx bx-play'></i>
           <span>Play</span>
          </button>

          <button className='More'>
          <i class='bx bx-info-circle'></i>
          <span>More</span>
          </button>

        </div>

      </div>
    </>
  )
}

export default Feature