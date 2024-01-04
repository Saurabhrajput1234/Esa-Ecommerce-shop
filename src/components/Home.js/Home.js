import React from 'react'
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';



function Home() {
  return (<>
    <div className='Home-page' >
        <h1>WELLCOME TO E-SA</h1>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="pics/home_back.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="pics/home_back.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="pics/home_back.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    </div>
    
    
    </>
  )
}

export default Home;