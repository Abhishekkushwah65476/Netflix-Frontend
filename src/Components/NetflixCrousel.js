import React, { useEffect, useState } from 'react'
import Data from '../Components/Json.json'


function NetflixCrousel() {
  // const [movieData, setMovieData] = useState([Data]);

  console.log('movie',Data);

  return (
    <>
    <div className='text-white mx-3 fw-bold m-3' style={{clear:'both'}}>
      Movie
    </div>

    <div className='bg-black'>


    <div id="carouselExample" className="carousel slide">
  <div className="carousel-item active">
    <div className="child container-fluid ">

      <img className="c-img" src='https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false&quot;/' />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false&quot;/" />
      <img className="c-img" src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg" />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20&crop=false" />
      
    </div>
  </div>
  <div className="carousel-item active">
    <div className="child container-fluid ">
      <img className="c-img" src="https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false" />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false&quot;/" />
      <img className="c-img" src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg" />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20&crop=false" />
    </div>
  </div>
  <div className="carousel-item active">
    <div className="child container-fluid ">
      <img className="c-img" src="https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false" />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/832/832/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=70&crop=false&quot;/" />
      <img className="c-img" src="https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg" />
      <img className="c-img" src="https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20&crop=false" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon c-button-a" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon c-button-b" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
     </div>

    </div>

    

    </>
  )
}

export default NetflixCrousel