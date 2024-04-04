import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Detail/Detail.scss'
import Navbar from '../../Components/Navbar';
import { Link } from 'react-router-dom';

function DetailModel(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <div className='background'>
                    <div className='parent-natflix' style={{ position: 'relative' }}>

                        <div className='w-100'>
                            
                            <div className='p-4 fs-6' style={{ position: 'absolute', bottom: '0' }} >
                                <div className='mx-4'>
                                    <img className='img-fluid img' width={400} src='https://www.blackadammovie.net/images/tt.png' />
                                </div>
                            </div>


                                <div className='d-flex gap-2 container justify-content-between w-100 px-3' style={{position:'absolute',bottom:'5px'}}>
                                    <div className='d-flex align-items-center '>
                                          <Link className='text-decoration-none text-black' to="/Watch">
                                        <div className='bg-white text-black rounded px-2 p-1 d-flex align-items-center cursor-pointer mx-2'>
                                            <i className='bx bx-play fs-5'></i>
                                          <span>Play</span>
                                        </div>
                                          </Link>  

                                        <div className=' d-flex align-items-center'>
                                            <i className='bx bx-plus rounded-circle p-2 bg-transparent ' style={{ border: '2px solid white', marginRight: '5px' }}></i>
                                            <i className='bx bx-like rounded-circle p-2 bg-transparent' style={{ border: '2px solid white' }}></i>
                                        </div>
                                    </div>

                                    <div>
                                        <i className='bx bx-volume-mute rounded-circle p-2 bg-transparent' style={{ border: '2px solid white' }}></i>
                                    </div>



                                    {/* <button className='btn btn-secondary lh-1 '><i class='bx bx-info-circle mx-1'></i><span>More info</span></button> */}
                                </div>
                           
                        </div>

                    </div>
                    <div className='description-section'>
                     <div className='section-1'>
                         <div className='new-1'>
                          <div className='mb-2'>
                            <span className='new'>New</span> 
                            2024 2h 4m <span className='hd'>HD</span>
                          </div>
                          <div>
                            <span className='U'>U/A 13+</span>
                             gore, language, violence
                          </div>
                         </div>
                        <p className='description'>
                        feed from his magical powers a chmpion ship toes the line between good and evil between
                        </p>
                     </div>
                     <div className='section-2'>
                        
                        <p>
                          <span className='cast'>Cast :&nbsp;</span>
                          <span>lorem hi there is dynm system in by me the end work </span>
                        </p>
                        <p>
                          <span className='cast'>Genra :&nbsp;</span>
                          <span>lorem hi there is dynm system in work </span>
                        </p>
                        <p>
                          <span className='cast'>This is Movie :&nbsp;</span>
                          <span>lorem hi there is dynm system in work </span>
                        </p>

                     </div>
                    </div>

                </div>


            </Modal>

        </>
    )
}

export default DetailModel