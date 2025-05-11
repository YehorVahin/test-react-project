import React, { Component } from 'react'
import { CarouselCaption, CarouselItem } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import episodeone from '../assets/episodeone.jpg'
import episodetwo from '../assets/episodetwo.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
            <img
            className='d-block w-100'
            src={episodeone}
            alt='firest slide'
            height="700px"
            />
            <CarouselCaption>
                <h3>First Slide</h3>
                <p>Lorem ipsum</p>
            </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
            <img
            className='d-block w-100'
            src={episodetwo}
            alt='second slide'
            height="700px"
            />
            <CarouselCaption>
                <h3>Second Slide</h3>
                <p>Lorem ipsum</p>
            </CarouselCaption>
        </CarouselItem>
      </Carousel>
    )
  }
}
