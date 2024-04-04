import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function Login() {
  return (
    <>
     <div className="container-fluid bg-black px-5 min-vh-100" style={{ background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}>
                <div>
                    <img style={{width:'150px'}} src="https://assets-global.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" width="300px" />
                </div>

                <div className='bg-bg-secondary  w-100 d-flex justify-content-center align-items-center' style={{ height: '60vh' }}>
                    <div>
                        <div className="d-flex justify-content-center ">
                            <h1 style={{ fontFamily: "inherit" }} className="text-white fw-italic fw-500"> Unlimited movies,</h1>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <h1 style={{ fontFamily: "inherit" }} className="text-white fst-italic fs-2 "> TV shows and more</h1>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <h7 style={{ fontFamily: "bold" }} className="text-white"> Starts at ₹149. Cancel anytime.</h7>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <h7 className="text-white">Ready to watch? Enter your email to create or restart your membership.</h7>
                        </div>
                        <div className="d-flex p-3 gap-1 lh-5">
                            <div className='row'>
                                <div className='col-8'>
                                    <input className="fs-4 p-1 line-n" type="text" placeholder="Email address" />
                                </div>

                                <div className='col-4'>
                                    <Button className='p-2 fs-5' variant="danger">Get Started</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div style={{ backgroundColor: 'black' }}>
                <div className='container-fluid' style={{
                    backgroundColor: 'purple',
                    backgroundImage: 'linear-gradient(149deg, #192247 0%, #210e17 96.86%)'
                }}>
                    <div className='text-center pt-5' >
                        <div className='row'>
                            <div className="col-md-6">
                                <h3 className='text-white' style={{ fontFamily: "serif" }}>Mobile games now included in every plan</h3>
                                <p className='text-white' style={{ fontFamily: "inherit" }}>No ads, extra fees, or in-app purchases. Enjoy unlimited access to a growing catalogue of popular and exclusive games.</p>
                            </div>
                            <div className='col-6 px-5 my-5'>
                                <img src="https://www.geo.tv/assets/uploads/updates/2023-01-03/462603_4381654_updates.jpg " width={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-white pt-5 bg-black py-5'  >
                <div className='container '>
                    <div className='row'>
                        <h3>More reasons to join</h3>
                        <div className='col-md-3 ' >
                            <Card style={{ width: '18rem' }}>
                                <Card.Body className='text-white' style={{
                                    backgroundColor: 'purple',
                                    backgroundImage: 'linear-gradient(149deg, #192247 0%, #210e17 96.86%)'
                                }}>
                                    <Card.Title>Enjoy on your TV</Card.Title>
                                    <Card.Text>
                                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                                    </Card.Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                                    </svg>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }} >
                                <Card.Body className='text-white' style={{
                                    backgroundColor: 'purple',
                                    backgroundImage: 'linear-gradient(149deg, #192247 0%, #210e17 96.86%)'
                                }}>
                                    <Card.Title>Download your shows to watch offline</Card.Title>
                                    <Card.Text>
                                        Save your favourites easily and always have something to watch.
                                    </Card.Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                    </svg>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }} >
                                <Card.Body className='text-white' style={{
                                    backgroundColor: 'purple',
                                    backgroundImage: 'linear-gradient(149deg, #192247 0%, #210e17 96.86%)'
                                }}>
                                    <Card.Title>Watch everywhere</Card.Title>
                                    <Card.Text>
                                        Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
                                    </Card.Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-binoculars-fill" viewBox="0 0 16 16">
                                        <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z" />
                                    </svg>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card style={{ width: '18rem' }} >
                                <Card.Body className='text-white' style={{
                                    backgroundColor: 'purple',
                                    backgroundImage: 'linear-gradient(149deg, #192247 0%, #210e17 96.86%)'
                                }}>
                                    <Card.Title>Create profiles for kids</Card.Title>
                                    <Card.Text>
                                        Send kids on adventures with their favourite characters in a space made just for them.
                                    </Card.Text>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                                    </svg>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div className='container'>
                    <div className='pt-3 mb-3'>
                        <h2 className='text-white '>Frequently Asked Questions</h2>
                        <Accordion>
                            <Accordion.Item>
                                <Accordion.Header >
                                    What is Netflix?</Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='mb-3'>
                        <Accordion >
                            <Accordion.Item >
                                <Accordion.Header>
                                    How much does Netflix cost?</Accordion.Header>
                                <Accordion.Body className='bg-dark text-white'>
                                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <Accordion >
                        <Accordion.Item >
                            <Accordion.Header >
                                Where can I watch?</Accordion.Header>
                            <Accordion.Body className='bg-dark text-white'>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='container-fluid bg-black d-flex justify-content-center '>
                <div className='row mt-5'>
                    <div className='col-6 align-item-center'>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"></input>
                    </div>
                    <div className='col-6'>
                        <button type="button" class="btn btn-danger">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='bg-black text-white py-5 pb-5'>
                <div className='container'>
                    <h6>Questions? Call 000-800-919-1694</h6>
                    <div className='row'>
                        <div className='col-3 px-5'>
                            <h3>FAQ</h3>
                            <p>Investor relation</p>
                            <p>privacy</p>
                            speed test
                        </div>
                        <div className='col-3 px-5'>
                            <h4>Help center</h4>
                            <p>Jobs</p>
                            <p>Cookie Prefrences</p>
                            <p>Legal Notices</p>
                        </div>
                        <div className='col-3 px-5'>
                            <h4>Account</h4>
                            <p>ways to watch</p>
                            <p>Corporate information</p>
                            <p>only on netflix</p>

                        </div>
                        <div className='col-3 px-5'>
                            <h6>Media Centre</h6>
                            <p>Terms of Use</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            


    </>
  )
}

export default Login