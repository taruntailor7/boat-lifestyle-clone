import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@chakra-ui/react';
import { HomeSailWithBoat } from './HomeSailWithBoat';
import { ShopByCategory } from './ShopByCategory';
import { SlidingImages } from './SlidingImages';
import { HomeBestOfBoat } from './HomeBestOfBoat';
import { CinematicMagic } from './CinematicMagic';
import { ExploreNow } from './ExploreNow';

export const Home = () => {
  return (
    <Box width="95%" margin="auto" marginTop="100px" zIndex="-1">
        <Carousel >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web_1_2000x.png?v=1665644267"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/diwali-banner_2000x.gif?v=1664442921"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SN-Desktop-Banner-Wave-Style_1_2000x.jpg?v=1663914840"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DESKTOP-Banner-WB_4_2000x.gif?v=1664782144"
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
        <HomeSailWithBoat />
        <ShopByCategory />
        <SlidingImages />
        <HomeBestOfBoat />
        <CinematicMagic />
        <ExploreNow />
        <HomeSailWithBoat />
    </Box>
  )
}
