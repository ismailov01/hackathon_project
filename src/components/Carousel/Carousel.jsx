import React from 'react';
import { Carousel } from 'react-bootstrap';


const MyCarousel = () => {
    return (
        <div>            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://api.papajohns.kg//images/banners/ade8cc7c13a7e643d122555cb3546027.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://api.papajohns.kg//images/banners/a081ce55fd9627671868fe3e83c4f512.webp"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://oshfood.kg/image_by_id/57"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MyCarousel;