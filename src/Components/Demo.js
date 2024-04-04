import React from 'react'
import Slider from "react-slick";

function Demo({title}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='text-white pb-3 fw-bold p-3'>
    {title}
    </div>
    <div className=''>

      <div className="slider-container">
      <Slider {...settings}>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
        <div className='card-0'>
          <h3>
            <img className='' style={{width:'100%',aspectRatio:"1/1",objectFit:'cover'}} src='https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg'/>
          </h3>
          <div className='hide'>
          <div className='text-white text-center'>Magic of swardigo</div>
          <p className='text-white text-center'>Movie</p>
          </div>

        </div>
      
      
       
      
      
      </Slider>
    </div>

    </div>

    
    </>
  )
}

export default Demo