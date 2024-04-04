import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Loop from '../Components/Loop'
import Demo from '../Components/Demo';
import NetflixCrousel from '../Components/NetflixCrousel';
import List from '../Components/List/List';
import Feature from '../Components/Feature/Feature';
import axios from 'axios';


function Home({ type }) {

  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)



  // useEffect((item)=>{

  //   const getRandomList =async()=>{
  //     try {
  //   const res = await axios.get(`http://localhost:4000/admin/getList/list${type ? "?type=" + type:''}& ${genre ? "genre=" + genre:''}`)


  //       console.log(res)
  //     }
  //     catch (error) {
  //       console.log(error)
  //     }
  //   }  
  //   getRandomList()  

  // },[type,genre])

  useEffect(() => {

    axios.get(`http://localhost:4000/admin/getList/${type ? "?type=" + type : ''}${genre ? "genre=" + genre : ''}`)
      .then((res) => {
        // console.log(res);
        setLists(res.data.data)
      })
  }, [type, genre])






  return (
    <>
      <div className='home'>
        <Navbar />
        <Feature type={type} />
        {/* <div className='position-netflix'>
        </div> */}
        {
          lists.map((list, index) => {
            // console.log(list)
            return (<>
              <List  list={list}/>
            </>)
          })
        }









      </div>
    </>
  )
}

export default Home