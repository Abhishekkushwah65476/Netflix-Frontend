import React, { useState } from 'react'
import Loop from './Loop'
import Feature from './Feature/Feature'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isScrolled,setIsScrolled] = useState(false)
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=>window.onscroll = null;
    }
    // console.log(isScrolled)
    return (
        <>
            <div className={isScrolled ? "parent-natflix scrolled" : "parent-natflix"}>

                <div className='d-flex justify-content-between '>
                    <ul className='navbar-netflix mx-3'>
                        <li>
                            <img className='img-fluid' width={150} src='https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' />
                        </li>
                        <Link to='/home' className='link'>
                        <li>Home</li>
                        </Link>

                        <Link to='/series' className='link'>
                        <li>Series</li>
                        </Link>
                        <Link to='/movies' className='link'>
                        <li>Movies</li>
                        </Link>
                        <li>TV Show</li>
                        <li>New & populer</li>
                        <li>My List</li>
                        <li>Browse by Language</li>
                    </ul>
                    <ul className='navbar-netflix mx-4'>
                        <li><i class='bx bx-search'></i></li>
                        <li>Children</li>
                        <li><i class='bx bx-bell' ></i></li>
                        <li><i className='bx bxs-user-circle fs-2' ></i></li>
                    </ul>
                </div>

                {/* <div className='d-flex'>

                <div className='nav-text mx-3' >
                  
                    <div className='mx-4'>
                        <img className='img-fluid img'   width={400} src='https://www.blackadammovie.net/images/tt.png' />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium aspernatur consequatur corporis delectus dolore
                        doloremque dolorum eaque, enim expedita facere fuga harum

                    </p>
                    <div className='d-flex gap-2'>
                        <button className='btn btn-light'><i className='bx bx-play' ></i>Play</button>
                        <button className='btn btn-secondary lh-1 '><i class='bx bx-info-circle mx-1'></i><span>More info</span></button>
                    </div>
                </div>

                <div className='nav-text mx-3' >
                   
             
                </div>

                </div> */}

            

            </div>
           
        </>
    )
}

export default Navbar