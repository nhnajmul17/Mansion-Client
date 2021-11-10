import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade variant="dark">
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"

                    src='https://i.ibb.co/rQpWmmb/banner1.jpg'
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h1 className=' fw-bold text-secondary'>CONVENIENT LOCATION</h1>
                    <h5 className="fs-1 fw-bold text-white fst-italic">Beautiful Spaces <br />
                        In The Best Places</h5>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/BTY1hsy/banner2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 className='fw-bold text-secondary'>CONVENIENT LOCATION</h1>
                    <h5 className="fs-1 fw-bold text-white fst-italic">Beautiful Spaces <br />
                        In The Best Places</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/5xqZZXp/banner3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className=' fw-bold text-secondary'>CONVENIENT LOCATION</h1>
                    <h5 className="fs-1 fw-bold text-white fst-italic">Beautiful Spaces <br />
                        In The Best Places</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;